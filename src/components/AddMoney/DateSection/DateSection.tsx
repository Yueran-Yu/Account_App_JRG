import React from 'react';
import DatePicker from "react-datepicker";
import {Wrapper} from "./DateSection.styles";

type Props = {
	value: Date
	onDateChange: (dateValue: Date) => void
}

export const DateSection: React.FC<Props> = (props) => {
	const date = props.value
	const onChange = (e: Date) => {
		props.onDateChange(e)
	}
	return (
		<Wrapper>
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