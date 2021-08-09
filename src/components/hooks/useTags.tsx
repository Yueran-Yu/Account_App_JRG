import {useEffect, useState} from 'react';
import {CreateId} from '../../lib/createId';
import {useUpdate} from "./useUpdate";

export const useTags = () => {
	const [tags, setTags] = useState<{ id: number; name: string }[]>([])

	useEffect(() => {
		let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
		if (localTags.length === 0) {
			localTags = [
				{id: CreateId(), name: 'Residence'},
				{id: CreateId(), name: 'Clothing'},
				{id: CreateId(), name: 'Food'},
				{id: CreateId(), name: 'Transportation'},
			]
		}
		setTags(localTags)
	}, [])  // mounted the component execute the code

	useUpdate(() => {
		window.localStorage.setItem('tags', JSON.stringify(tags))
	}, tags)


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

	const getName = (id: number) => {
		const tag = tags.filter(t => t.id === id)[0]
		return tag ? tag.name : ''
	}

	const addTag = () => {
		const tagName = window.prompt('The new Tag name is:')
		if (tagName !== null && tagName !== '') {
			const id = CreateId()
			setTags([...tags, {id: id, name: tagName}])
		}
	}
	return {
		tags: tags,
		setTags,
		findTag,
		findTagIndex,
		updateTag,
		deleteTag,
		addTag,
		getName
	}
}


