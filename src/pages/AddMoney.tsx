import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {CategorySection} from '../components/AddMoney/CategorySection';
import {TagsSection} from '../components/AddMoney/TagsSection';
import {NoteSection} from '../components/AddMoney/NoteSection';
import {NumberPadSection} from "../components/AddMoney/NumberSection/NumberPadSection";
import {DateSection} from "../components/AddMoney/DateSection";


const NoteDate = styled.section`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'
const AddMoney = () => {
	const [selected, setSelected] = useState({
		tags: [] as string[],
		note: '',
		date: new Date() as (Date | null),
		category: '-' as Category,
		amount: 0
	})

	return (<MyLayout>
		{selected.tags.join('.')}
		<hr/>
		{selected.note}
		<hr/>
		<p>
			{selected.date ? `${selected.date.getFullYear()}-${selected.date.getMonth() + 1}-${selected.date.getDate()}` : ""}
		</p>
		<p>{selected.amount}</p>

		<CategorySection
			value={selected.category}
			onChange={category => { setSelected({...selected, category: category})}}/>

		<TagsSection
			value={selected.tags}
			onChange={tags => setSelected({...selected, tags: tags})}/>

		<NoteDate>
			<NoteSection
				value={selected.note}
				onChange={(note) => {setSelected({...selected, note: note})}}/>

			<DateSection value={selected.date}
									 onDateChange={(date: (Date | null)) => {setSelected({...selected, date: date})}}/>
		</NoteDate>
		<NumberPadSection
			value={selected.amount}
			onOk={amount => {setSelected({...selected, amount: amount})}}
		/>
	</MyLayout>)
}

export default AddMoney;