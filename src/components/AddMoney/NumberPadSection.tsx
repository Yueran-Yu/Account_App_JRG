import styled from 'styled-components';
import React, {useState} from 'react';
import {Icon} from "../Icon";

const Wrapper = styled.section`
  cursor: pointer;

  .outputWrapper {
    display: flex;
    flex-direction: column;
    background: white;
    color: #8d8d8d;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);

    .output {
      font-size: 38px;
      height: 35px;
      padding-bottom: 2px;
    }

    .total {
      line-height: 15px;
      padding-bottom: 6px;
    }
  }

  .pad {
    display: flex;
    flex-wrap: wrap;

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
    const [total, setTotal] = useState('')
    const [btn, setBtn] = useState('OK')

    const setOutput = (output: string) => {
        if (output.length > 16) {
            output = output.slice(0, 16)
        } else if (output.length === 0) {
            output = ''
        }
        _setOutput(output)
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
                        setTotal(text)
                    } else {
                        if (total === '') {
                            setOutput(text)
                            setTotal(text)
                        } else {
                            setOutput(output + text)
                            setTotal(total + text)
                        }
                    }
                    break;
                case '':
                    if (total.length > 1) {
                        if (output === '') {
                            setTotal(total.slice(0, -1))
                        } else {
                            setOutput(output.slice(0, -1))
                            setTotal(total.slice(0, -1))
                        }
                    } else {
                        setOutput('0')
                        setTotal('')
                    }
                    break;
                case '+':
                    setBtn('=')
                    setTotal(total + text)
                    setOutput('')
                    break;
                case '-':
                    setBtn('=')
                    setTotal(total + text)
                    setOutput('')
                    break;
                case 'C':
                    setOutput('0')
                    setTotal('')
                    break;
                case '.':
                    if (output.indexOf('.') >= 0) {
                        return;
                    } else {
                        setTotal(total + text)
                        setOutput(output + '.')
                    }
                    break;
                case 'OK':
                    console.log(output)
                    break;
                case '=':
                    setBtn('OK')
                    setOutput(eval(total).toFixed(9).toString().replace(/(\.0*|(?<=(\..*))0*)$/, ''))
                    setTotal('')
                    break;
                default:
                    break;
            }
        } catch (e) {
            console.log(e.message())
        }

    }
    return (
        <Wrapper>
            <div className='outputWrapper'>
                <div className='output'>
                    {output}
                </div>
                <span className='total'>{total}</span>
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
