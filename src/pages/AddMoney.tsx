import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {CategorySection} from '../components/AddMoney/CategorySection/CategorySection';
import {TagsSection} from '../components/AddMoney/TagsSection/TagsSection';
import {NoteSection} from '../components/AddMoney/NoteSection/NoteSection';
import {NumberPadSection} from "../components/AddMoney/NumberSection/NumberPadSection";
import {DateSection} from "../components/AddMoney/DateSection/DateSection";


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
		tagsId: [] as number[],
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
		{selected.note}
		{/*<p>*/}
		{/*	{selected.date ? `${selected.date.getFullYear()}/${selected.date.getMonth() + 1}/${selected.date.getDate()}/*/}
		{/*		${selected.date.getHours()}:${selected.date.getMinutes()}:${selected.date.getSeconds()}` : ""}*/}
		{/*</p>*/}
		<CategorySection
			value={selected.category}
			onChange={category => onChangeTemplate({category: category})}/>

		<TagsSection
			value={selected.tagsId}
			onChange={tagsId => onChangeTemplate({tagsId})}/>

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