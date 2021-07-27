/* eslint no-eval: 0 */
import React, {useState} from 'react';
import {Icon} from "../../Icon";
import {Wrapper} from './NumberPadSection.styles';


type Props = {
	value: number
	onChange: (value: number) => void
	onOk?: () => void
}
export const NumberPadSection: React.FC<Props> = (props) => {
	const [output, _setOutput] = useState('0')
	const [result, _setResult] = useState('0')
	const [temp, _setTemp] = useState('')
	const [btn, setBtn] = useState('OK')
	const lastChar = output.charAt(output.length - 1)

	const setOutput = (x: string) => {
		if (x.slice(0, 10).includes('+') || x.slice(0, 10).includes('-') || x.slice(0, 10).includes('.')) {
			x = x.slice(0, 40)
		} else {
			x = x.slice(0, 10)
			if (x.length > 9) alert("The number is long.")
		}
		if (x.length === 0) x = ''
		_setOutput(x)
	}

	const setTemp = (x: string) => {
		x.length > 9 ? _setTemp(x.slice(0, 9)) : _setTemp(x)
	}
	const setResult = (x: string) => {
		x.length > 9 ? _setResult(x.slice(0, 9)) : _setResult(x)
	}

	const isANumber = (c: string) => c >= '0' && c <= '9'

	const calc = (value: string) => {
		if (value !== '') {
			// replace() is used to truncate trailing "0"
			return eval(value).toFixed(9).toString().replace(/(\.0*|(?<=(\..*))0*)$/, '')
		} else {
			return '0'
		}
	}

	const setResultOutputTemp = (result: string, output: string, temp = '') => {
		setResult(result)
		setOutput(output)
		setTemp(temp)
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
					setBtn('=')
					if (output.length > 0 && output !== '0') {
						if (output.charAt(output.length - 1) === '0') {
							setResultOutputTemp(calc(output.slice(0, -1) + text), output.slice(0, -1) + text, text)
						} else {
							setResultOutputTemp(calc(output + text), output + text, temp + text)
						}
					} else {
						setResultOutputTemp(calc(text), text, text)
					}
					break;
				case '':
					if (output.length > 0) {
						setOutput(output.slice(0, -1))
						const lastSecChar = output.charAt(output.length - 2)
						if (lastSecChar === '+' || lastSecChar === '-') {
							setResult(calc(output.slice(0, -2)))
						} else {
							setResult(calc(output.slice(0, -1)))
						}
					} else {
						console.log("triggered???")
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
					setResultOutputTemp('0', '0', '')
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
					} else {
						setTemp('0' + text)
						setOutput('0' + text)
					}
					break;
				case 'OK':
					if (result === '0') return
					if (props.onOk) props.onOk()

					setResultOutputTemp('0', '', '')
					break;
				case '=':
					if (lastChar === '+' || lastChar === '-') {
						setResult(calc(output.slice(0, -1)))
					} else {
						setResult(calc(output))
					}
					props.onChange(parseFloat(result))
					setBtn('OK')
					setOutput('')
					setTemp('')
					break;
				default:
					break;
			}
		} catch
			(e) {
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

				<button>7</button>
				<button>8</button>
				<button>9</button>

				<button>
					<Icon name='delete'/>
				</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>+</button>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>-</button>
				<button>C</button>
				<button>0</button>
				<button>.</button>
				<button className='ok'>{btn}</button>
			</div>
		</Wrapper>
	)
}



