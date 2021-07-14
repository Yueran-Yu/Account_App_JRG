import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {Icon} from "../components/Icon";
import DatePicker from "react-datepicker";
import {subMonths, addMonths} from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {CategorySection} from '../components/AddMoney/CategorySection';
import {OutputSection} from '../components/AddMoney/OutputSection';
import {TagsSection} from '../components/AddMoney/TagsSection';
import {NotesSection} from '../components/AddMoney/NotesSections';
import {NumberPadSection} from "../components/AddMoney/NumberPadSection";


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
        <TagsSection/>
        <NotesSection>
            <label>
                <span><Icon name='write'/></span>
                <input type="text" placeholder="Add notes here"/>
            </label>
            <DatePicker
                className='date'
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="dd/MMMM"
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