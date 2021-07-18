import styled from 'styled-components';
import React, {useState} from 'react';
import {Icon} from "../Icon";

const Wrapper = styled.section`
  .output {
    background: white;
    font-size: 38px;
    color: #8d8d8d;
    line-height: 56px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);
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
    const [btn, setBtn] = useState('OK')
    let temp = ''
    let totaltemp = ''

    const setOutput = (output: string) => {
        if (output.length > 16) {
            output = output.slice(0, 16)
        } else if (output.length === 0) {
            output = '0'
        }
        _setOutput(output)
    }

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) {return}
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
                } else {
                    setOutput(output + text)
                }
                break;
            case '':
                if (output.length === 1) {
                    setOutput('')
                } else {
                    setOutput(output.slice(0, -1))
                }

                break;
            case '+':
                setBtn('=')
                // const lastLetter = (output.length - 1)
                // const secLastLetter = (output.length - 2)
                // console.log("last " + output.charAt(lastLetter))
                // console.log("sec " + output.charAt(secLastLetter))

                if (output === '0') {
                    temp = output
                    console.log(temp)
                    totaltemp = temp + text
                    console.log(totaltemp)
                    setOutput('0')
                } else {
                    setOutput(output + text)
                }
                break;
            case '-':
                console.log(text)
                break;
            case 'C':
                setOutput('')
                break;
            case '.':
                if (output.indexOf('.') >= 0) {
                    return;
                } else {
                    setOutput(output + '.')
                }
                break;
            case 'OK':
                console.log(text)
                break;
            default:
                break;
        }
    }
    return (
        <Wrapper>
            <div className='output'>
                {output}
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
