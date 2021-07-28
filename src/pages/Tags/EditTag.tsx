import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from "./useTags";
import Layout from "../../components/Layout";
import {Icon} from "../../components/Icon";
import {Button} from 'components/Button';
import styled from 'styled-components';
import {InputForm} from "../../components/InputForm";
import {Center} from "../../components/Center";


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

const InputWrapper = styled.div`
  background: white;
  margin-top: 16px;
  padding: 5px 20px 5px 0;
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
			<InputWrapper>
				<InputForm
					label='tagName'
					type='text'
					placeholder='Tag Name'>
					<Icon name='write'/>
				</InputForm>
			</InputWrapper>
			<Center>
				<Button>Remove</Button>
			</Center>
		</Layout>
	)
}

