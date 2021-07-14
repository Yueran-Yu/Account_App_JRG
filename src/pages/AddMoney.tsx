import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {Icon} from "../components/Icon";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {CategorySection} from '../components/AddMoney/CategorySection';
import {OutputSection} from '../components/AddMoney/OutputSection';
import {TagsSection} from '../components/AddMoney/TagsSection';
import {NoteSection} from '../components/AddMoney/NoteSections';
import {NumberPadSection} from "../components/AddMoney/NumberPadSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const AddMoney = () => {
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
        <NoteSection/>
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