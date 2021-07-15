import styled from 'styled-components';
import React, {useRef, useState} from 'react';
import {Icon} from "../Icon";
import DatePicker from "react-datepicker";
import {subMonths, addMonths} from 'date-fns';

const Wrapper = styled.section`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  label {
    display: flex;
    align-items: center;
    width: 80%;

    > span {
      margin-right: 6px;
      white-space: nowrap;

      .icon {
        fill: #5678de;
      }
    }

    input {
      display: block;
      width: 100%;
      background: none;
      border: none;

      ::placeholder {
        color: #bebebe;
        font-family: fantasy;
      }
    }
  }

  .date {
    text-align: center;
    float: right;
    width: 90%;
    color: #5678de;
    border: 0.5px solid #5678de;
    padding: 3px 0;
    margin-right: 5px;
    border-radius: 5px 5px 5px 5px;
  }
`

export const NoteSection: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [note, setNote] = useState('')
    const refInput = useRef<HTMLInputElement>(null)!
    const onBlur = () => {
        if (refInput !== null && refInput && refInput.current) {
            setNote(refInput.current.value)
        }
    }

    return (
        <Wrapper>
            <label>
                <span><Icon name='write'/></span>
                <input
                    type="text"
                    placeholder="Add notes here"
                    ref={refInput}
                    defaultValue={note}
                    onBlur={onBlur}/>
            </label>
            <DatePicker
                className='date'
                selected={startDate}
                onChange={(startDate: Date | null) => setStartDate(startDate)}
                dateFormat="dd/MMMM"
                dateFormatCalendar={"MMM yyyy"}
                minDate={subMonths(new Date(), 6)}
                maxDate={addMonths(new Date(), 6)}
                showMonthYearDropdown
            />
        </Wrapper>
    )
}
