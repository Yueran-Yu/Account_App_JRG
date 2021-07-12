import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {Icon} from "../components/Icon";
import DatePicker from "react-datepicker";
import {subMonths, addMonths} from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`
const NotesSection = styled.section`
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
const OutputSection = styled.section`
  .output {
    background: white;
    font-size: 30px;
    color: #5a5a5a;
    line-height: 56px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);
  }
`
const CategorySection = styled.section`
  font-size: 14px;
  margin: 10px 0;

  > ul {
    display: flex;
    justify-content: center;
    line-height: 8px;

    > li {
      border: 0.5px solid #5678de;
      width: 20%;
      text-align: center;
      padding: 10px 0;
      color: #5678de;

      &.left {
        border-radius: 5px 0 0 5px;
      }

      &.right {
        border-radius: 0 5px 5px 0;
      }


      &.selected {
        background: #5678de;
        color: white;
      }
    }
  }
`
const NumberPadSection = styled.section`
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

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const AddMoney = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (<MyLayout>
        <CategorySection>
            <ul>
                <li className='left'>Expense</li>
                <li className='selected right'>Income</li>
            </ul>
        </CategorySection>
        <OutputSection>
            <div className='output'>
                100
            </div>
        </OutputSection>
        <TagsSection className='tags'>
            <ol>
                {/*
                shift * 2 => search : Surround with Emmet => type: li*
                This is the quick way to wrap <li> around content
                  */}
                <li>Residence</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Transportation</li>
            </ol>
            <button>New Tag</button>
        </TagsSection>
        <NotesSection>
            <label>
                <span><Icon name='write'/></span>
                <input type="text" placeholder="Please add notes here"/>
            </label>
            <DatePicker
                className='date'
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="dd / MMMM"
                dateFormatCalendar={"MMM yyyy"}
                minDate={subMonths(new Date(), 6)}
                maxDate={addMonths(new Date(), 6)}
                showMonthYearDropdown
            />


        </NotesSection>
        <NumberPadSection>
            <div className='pad clearfix'>
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
                <button className='ok'>OK</button>
            </div>
        </NumberPadSection>
    </MyLayout>)
}

export default AddMoney;