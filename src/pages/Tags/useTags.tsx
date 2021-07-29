import {useState} from 'react';
import {CreateId} from '../../lib/createId';

//encapsulate a self defined Hook
const defaultTags = [
	{id: CreateId(), name: 'Residence'},
	{id: CreateId(), name: 'Clothing'},
	{id: CreateId(), name: 'Food'},
	{id: CreateId(), name: 'Transportation'},
]

export const useTags = () => {
	const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)
	const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
	const updateTag = (id: number, obj: { name: string }) => {
		const tagChange = findTag(id)
	}
	return {
		tags: tags,
		setTags: setTags,
		findTag
	}
}
