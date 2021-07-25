import {useState} from 'react';

export const useTags = () => {
	const [tags, setTags] = useState<string[]>(['Residence', 'Clothing', 'Food', 'Transportation'])
	return {
		tags: tags,
		setTags: setTags
	}
}
