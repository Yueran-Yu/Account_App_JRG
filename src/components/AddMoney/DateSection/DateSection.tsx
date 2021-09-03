import React from 'react';
import DatePicker from "react-datepicker";
import {Wrapper} from "./DateSection.styles";
import 'react-datepicker/dist/react-datepicker.css';
import cs from 'classnames';


type Props = {
	value: Date
	onDateChange: (dateValue: Date) => void
	className: string
}

export const DateSection: React.FC<Props> = (props) => {
	const date = props.value
	const {className} = props
	const onChange = (e: Date) => {

		props.onDateChange(e)
	}
	return (
		<Wrapper className={cs(className)}>
			<DatePicker
				name='date'
				className='date'
				selected={date}
				onChange={onChange}
				dateFormat="dd/MMMM"
				dateFormatCalendar={"MMM yyyy"}
			/>
		</Wrapper>
	)
}

// change the style