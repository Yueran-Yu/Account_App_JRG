import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from "./useTags";
import Layout from "../../components/Layout";
import {Icon} from "../../components/Icon";
import {Button} from 'components/Button';
import styled from 'styled-components';


type Params = {
	tagId: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
	align-items: center;
`
export const EditTag: React.FC = () => {
	const {tags} = useTags()
	const {tagId} = useParams<Params>()
	const tag = tags.filter(t => t.id === parseInt(tagId))[0]
	// const {findTag} = useTags();
	// const tag = findTag(parseInt(tagId))
	return (
		<Layout>
			<Topbar>
				<Icon name='left'/>
				<span>Edit</span>
				<Icon/>

			</Topbar>
			<label>
				<span>Note</span>
				<input
					type="text"
					placeholder="Tag Name"/>
			</label>
			<div>
				<Button>Remove</Button>
			</div>
		</Layout>
	)
}

