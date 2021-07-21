import styled from 'styled-components';
import React, {useState} from 'react';
import {Icon} from "../Icon";

const Wrapper = styled.section`
  .outputWrapper {
    display: flex;
    flex-direction: column;
    background: white;
    color: #8d8d8d;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);

    .output {
      font-size: 36px;
      line-height: 35px;
      height: 35px;
      padding: 4px 0;
    }

    .total {
      line-height: 15px;
      padding-bottom: 6px;
    }
  }

  .pad {
    display: flex;
    flex-wrap: wrap;
    cursor: auto;

    > button {
      width: 25%;
      height: 56px;
      outline: none;
      border-bottom: 0.5px solid #e2e2e2;
      border-top: none;
      border-right: 0.5px solid #e2e2e2;
      border-left: none;
      font-size: 1.5rem;
      color: #888888;

      .icon {
        font-size: 1.2rem;
        fill: #888888;
      }

      &.ok {
        background-color: #5678de;
        color: white;
        border: none;
      }
    }
  }
`
export const NumberPadSection = () => {
    const [output, _setOutput] = useState('0')
    const [result, setResult] = useState('0')
    const [temp, setTemp] = useState('')
    const [btn, setBtn] = useState('OK')
    const lastChar = output.charAt(output.length - 1)

    const setOutput = (x: string) => {
        if (x.length > 30) {
            x = x.slice(0, 30)
        } else if (x.length === 0) {
            x = ''
        }
        _setOutput(x)
    }

    const isANumber = (c: string) => {
        return c >= '0' && c <= '9'
    }

    const calc = (value: string) => {
        if (value !== '') {
            return eval(value).toFixed(9).toString().replace(/(\.0*|(?<=(\..*))0*)$/, '')
        } else {
            return '0'
        }
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) {return}

        try {
            switch (text) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (output === '0') {
                        setOutput(text)
                        setTemp(text)
                        setResult(calc(text))
                    } else {
                        setOutput(output + text)
                        setTemp(temp + text)
                        setResult(calc(output + text))
                    }
                    console.log("temp = ")
                    console.log(temp)
                    break;
                case '':
                    if (output.length > 0) {
                        setOutput(output.slice(0, -1))
                        if (output.charAt(output.length - 2) === '+' || output.charAt(output.length - 2) === '-') {
                            setResult(calc(output.slice(0, -2)))
                        } else {
                            setResult(calc(output.slice(0, -1)))
                        }
                    } else {
                        console.log("triggered???? ")
                        result.length > 1 ? setResult(result.slice(0, -1)) : setResult('0')
                    }
                    output.length <= 1 ? setBtn('OK') : setBtn('=')
                    temp.length > 1 ? setTemp(temp.slice(0, -1)) : setTemp('')
                    break;
                case '+':
                case '-':
                    setBtn('=')
                    setTemp('')
                    if (output.length === 0) {
                        setOutput(result + text)
                    } else if (isANumber(lastChar) || lastChar === '.') {
                        setOutput(output + text)
                    }
                    break;
                case 'C':
                    setOutput('0')
                    setTemp('')
                    setResult('0')
                    break;
                case '.':
                    if (output.length > 0 && output !== '0') {

                        if (temp.indexOf('.') >= 1 || temp.charAt(0) === '.') {
                            console.log("can't click '.' again ")
                            return
                        } else {
                            setTemp(temp + text)
                            setOutput(output + text)
                            if (temp.length === 0) {
                                setTemp(temp + '0' + text)
                                setOutput(output + '0' + text)
                            }
                        }

                        // console.log("triggered?")
                        // console.log("output & length")
                        // console.log(output.length)
                        // console.log(output)
                        // console.log("temp & length")
                        // console.log(temp)
                        // console.log(temp.length)
                    } else {
                        setTemp('0' + text)
                        setOutput('0' + text)
                    }

                    break;
                case 'OK':
                    if (output.length === 0) return
                    setResult(calc(output))
                    setOutput('')
                    setTemp('')
                    break;
                case '=':

                    if (lastChar === '+' || lastChar === '-') {
                        setResult(calc(output.slice(0, -1)))
                    } else {
                        setResult(calc(output))
                    }
                    setBtn('OK')
                    setOutput('')
                    setTemp('')
                    break;
                default:
                    break;
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Wrapper>
            <div className='outputWrapper'>
                <div className='output'>
                    {result}
                </div>
                <span className='total'>{output === '0' ? '' : output}</span>
            </div>
            <div className='pad clearfix' onClick={onClickButtonWrapper}>
                {/* button{$}*16 */}
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>
                    <Icon name='delete'/>
                </button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <button>C</button>
                <button>0</button>
                <button>.</button>
                <button className='ok'>{btn}</button>
            </div>
        </Wrapper>
    )
}
