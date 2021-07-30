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
		const index = findTagIndex(id)
		// deep-clone get tagsClone
		const tagClone = JSON.parse(JSON.stringify(tags))
		// replace the tags copy with new name value
		tagClone.splice(index, 1, {id: id, name: obj.name})
		setTags(tagClone)
	}

	const deleteTag = (id: number) => {
		const index = findTag(id)
		const tagClone = JSON.parse(JSON.stringify(tags))
		// replace the tags copy with new name value
		tagClone.splice(index, 1)
		setTags(tagClone)

	}
	return {
		tags: tags,
		setTags: setTags,
		findTag,
		updateTag,
		deleteTag
	}
}
