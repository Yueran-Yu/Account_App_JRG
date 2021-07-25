import styled from 'styled-components';
import React from 'react';
import DatePicker from "react-datepicker";


const Wrapper = styled.div`
  & .date {
    text-align: center;
    float: right;
    width: 80%;
    color: #5678de;
    border: 0.5px solid #5678de;
    padding: 3px 0;
    margin-right: 5px;
    border-radius: 5px 5px 5px 5px;
    font-weight: 700;
  }
`
type Props = {
	value: Date | null
	onDateChange: (dateValue: Date | null) => void
}

export const DateSection: React.FC<Props> = (props) => {
	const date = props.value
	const onChange = (e: Date | null) => {
		console.log("********************")
		console.log(e)
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