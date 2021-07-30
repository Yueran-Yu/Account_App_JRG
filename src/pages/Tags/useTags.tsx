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
	const findTagIndex = (id: number) => {
		let result = -1
		for (let i = 0; i < tags.length; i++) {
			if (tags[i].id === id) {
				result = i
				break
			}
		}
		return result
	}

	const updateTag = (id: number, obj: { name: string }) => {
		setTags(tags.map(tag => tag.id === id ? {id: id, name: obj.name} : tag))
	}

	const deleteTag = (id: number) => {
		setTags(tags.filter(tag => tag.id !== id))
	}
	return {
		tags: tags,
		setTags,
		findTag,
		updateTag,
		deleteTag
	}
}
