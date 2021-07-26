import {useState} from 'react';

//encapsulate a self defined Hook
export const useTags = () => {
	const [tags, setTags] = useState<{ id: number; name: string }[]>([
		{id: 1, name: 'Residence'},
		{id: 2, name: 'Clothing'},
		{id: 3, name: 'Food'},
		{id: 4, name: 'Transportation'},
	])
	return {
		tags: tags,
		setTags: setTags
	}
}
