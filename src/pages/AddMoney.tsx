import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {CategorySection} from '../components/AddMoney/CategorySection/CategorySection';
import {TagsSection} from '../components/AddMoney/TagsSection/TagsSection';
import {NoteSection} from '../components/AddMoney/NoteSection/NoteSection';
import {NumberPadSection} from "../components/AddMoney/NumberSection/NumberPadSection";
import {DateSection} from "../components/AddMoney/DateSection/DateSection";
import {useCollectedData} from "../hooks/useCollectedData";

const NoteDate = styled.section`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  .dateSection {
    display: flex;
    align-items: center;
  }
`
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormData = {
	tagsId: [] as number[],
	note: '',
	date: new Date(),
	category: '-' as Category,
	amount: 0
}

const AddMoney = () => {
	const [selected, setSelected] = useState(defaultFormData)

	// get the type of selected Object by typeof method
	type Selected = typeof selected
	const onChangeTemplate = (obj: Partial<Selected>) => {
		setSelected({...selected, ...obj})
	}
	const {addCollectedData} = useCollectedData()

	const submit = () => {
		if (addCollectedData(selected)) {
			// clear the data in the form
			setSelected(defaultFormData)
			alert('Saved Successfully')
		}
	}
	return (
		<MyLayout>
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

				<DateSection className={'dateSection'} value={selected.date}
										 onDateChange={(date: Date) => onChangeTemplate({date: date})}/>
			</NoteDate>
			<NumberPadSection
				value={selected.amount}
				onChange={amount => {onChangeTemplate({amount})}}
				onOk={submit}
			/>
		</MyLayout>
	)
}

export default AddMoney;