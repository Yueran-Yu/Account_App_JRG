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
        <CategorySection />
        <OutputSection />
        <TagsSection/>
        <NoteSection/>
        <NumberPadSection />
    </MyLayout>)
}

export default AddMoney;