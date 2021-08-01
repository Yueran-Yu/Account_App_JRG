import React from 'react';
import {useTags} from "../../../pages/Tags/useTags";
import {Wrapper} from "./TagsSection.styles";
import {CreateId} from "../../../lib/createId";

type Props = {
	value: number[]
	onChange: (selected: number[]) => void
}
export const TagsSection: React.FC<Props> = (props) => {
	const {tags, addTag} = useTags()
	const selectedTagsId = props.value
	const getSelectedTagsClass = (tagId: number) => selectedTagsId.indexOf(tagId) >= 0 ? 'selected' : ''
	const onToggleTag = (currentTag: number) => {
		const index = selectedTagsId.indexOf(currentTag)
		if (index >= 0) {
			props.onChange(selectedTagsId.filter(id => id !== currentTag))
			// If currentTag has been selected before, copy all tags other than the currentTag
		} else {
			props.onChange([...selectedTagsId, currentTag])
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
			<button onClick={addTag}>New Tag</button>
		</Wrapper>
	)
}
