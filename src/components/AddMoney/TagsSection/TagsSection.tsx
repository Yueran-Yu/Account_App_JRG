import React from 'react';
import {useTags} from "../../../pages/Tags/useTags";
import {Wrapper} from "./TagsSection.styles";

type Props = {
	value: number[]
	onChange: (selected: number[]) => void
}
export const TagsSection: React.FC<Props> = (props) => {
	const {tags, setTags} = useTags()
	const selectedTagsId = props.value
	const onAddTag = () => {
		const tagName = window.prompt('The new Tag name is:')
		if (tagName !== null) {
			const id = new Date().getTime()
			console.log(id)
			setTags([...tags, {id: id, name: tagName}])
		}
	}
	const getSelectedTagsClass = (tagId: number) => selectedTagsId.indexOf(tagId) >= 0 ? 'selected' : ''
	const onToggleTag = (currentTagId: number) => {
		const index = selectedTagsId.indexOf(currentTagId)
		if (index >= 0) {
			props.onChange(selectedTagsId.filter(id => id !== currentTagId))
			// If currentTag has been selected before, copy all tags other than the currentTag
		} else {
			props.onChange([...selectedTagsId, currentTagId])
		}
	}

	return (
		<Wrapper>
			<ol>
				{/* shift * 2 => search : Surround with Emmet => type: li*
                This is the quick way to wrap <li> around content
                  */}
				{
					tags.map(tag =>
						<li
							key={tag.id}
							// onClick里面传函数 要的是一个动作
							// className 要的直接是一个结果
							onClick={() => { onToggleTag(tag.id)}}
							className={getSelectedTagsClass(tag.id)}>
							{tag.name}
						</li>)
				}
			</ol>
			<button onClick={onAddTag}>New Tag</button>
		</Wrapper>
	)
}
