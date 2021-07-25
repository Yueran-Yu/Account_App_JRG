import {useState} from 'react';

//encapsulate a self defined Hook
export const useTags = () => {
	const [tags, setTags] = useState<string[]>(['Residence', 'Clothing', 'Food', 'Transportation'])
	return {
		tags: tags,
		setTags: setTags
	}
}
