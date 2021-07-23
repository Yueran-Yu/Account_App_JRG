import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {CategorySection} from '../components/AddMoney/CategorySection';
import {TagsSection} from '../components/AddMoney/TagsSection';
import {NoteSection} from '../components/AddMoney/NoteSections';
import {NumberPadSection} from "../components/AddMoney/NumberSection/NumberPadSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'
const AddMoney = () => {
	const [selected, setSelected] = useState({
		tags: [] as string[],
		note: '',
		category: '-' as Category,
		amount: 0
	})

	return (<MyLayout>
		<CategorySection/>
		<TagsSection
			value={selected.tags}
			onChange={tags => setSelected({...selected, tags: tags})}/>
		<NoteSection/>
		<NumberPadSection/>
	</MyLayout>)
}

export default AddMoney;