import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
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
		date: new Date(),
		category: '-' as Category,
		amount: 0
	})

	// get the type of selected Object by typeof method
	type Selected = typeof selected
	const onChangeTemplate = (obj: Partial<Selected>) => {
		setSelected({...selected, ...obj})
	}

	return (<MyLayout>
		{/*<p>*/}
		{/*	{selected.date ? `${selected.date.getFullYear()}/${selected.date.getMonth() + 1}/${selected.date.getDate()}/*/}
		{/*		${selected.date.getHours()}:${selected.date.getMinutes()}:${selected.date.getSeconds()}` : ""}*/}
		{/*</p>*/}
		<CategorySection
			value={selected.category}
			onChange={category => onChangeTemplate({category: category})}/>

		<TagsSection
			value={selected.tags}
			onChange={tags => onChangeTemplate({tags})}/>

		<NoteDate>
			<NoteSection
				value={selected.note}
				onChange={note => onChangeTemplate({note})}/>

			<DateSection value={selected.date}
									 onDateChange={(date: Date) => onChangeTemplate({date: date})}/>
		</NoteDate>
		<NumberPadSection
			value={selected.amount}
			onChange={amount => {onChangeTemplate({amount})}}
			onOk={() => {console.log("all data collected!")}}
		/>
	</MyLayout>)
}

export default AddMoney;