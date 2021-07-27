import {useState} from 'react';
import {CreateId} from '../../lib/createId';

//encapsulate a self defined Hook

export const useTags = () => {
	const [tags, setTags] = useState<{ id: number; name: string }[]>([
		{id: CreateId(), name: 'Residence'},
		{id: CreateId(), name: 'Clothing'},
		{id: CreateId(), name: 'Food'},
		{id: CreateId(), name: 'Transportation'},
	])
	return {
		tags: tags,
		setTags: setTags
	}
}
