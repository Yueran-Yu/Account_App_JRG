import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from "./useTags";


type Params = {
	tagId: string
}
export const EditTag: React.FC = () => {
	const {tags} = useTags()
	const {tagId} = useParams<Params>()
	const tag = tags.filter(t => t.id === parseInt(tagId))[0]
	// const {findTag} = useTags();
	// const tag = findTag(parseInt(tagId))
	return (
		<h1>{tag.name}</h1>
	)
}

