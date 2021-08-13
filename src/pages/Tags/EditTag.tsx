import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useTags} from "../../components/hooks/useTags";
import Layout from "../../components/Layout";
import {Icon} from "../../components/Icon";
import {Button} from 'components/Button';
import styled from 'styled-components';
import {InputForm} from "../../components/AddMoney/InputForm";
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

  .editTag {
    font-weight: 150;
    color: grey;
    font-size: 16px;
    line-height: 16px;
  }
`

export const EditTag: React.FC = () => {
	const {findTag, updateTag, deleteTag} = useTags()
	const {tagId} = useParams<Params>()
	// const tag = tags.filter(t => t.id === parseInt(tagId))[0]
	const tag = findTag(parseInt(tagId))
	const history= useHistory()
	const onClickBack = () => {
		history.goBack()
	}

	const tagContent = (tag: { id: number; name: string }) => (
		<div>
			<InputWrapper>
				<InputForm className='editTag'
									 label='tagName'
									 type='text'
									 value={tag.name}
									 placeholder='Tag Name'
									 onChange={
										 (e) => {
											 updateTag(tag.id, {name: e.target.value})
										 }
									 }>
					<Icon name='write'/>
				</InputForm>
			</InputWrapper>
			<Center>
				<Button onClick={() => {
					console.log("delete is happened.")
					deleteTag(tag.id)
				}}>Remove</Button>
			</Center>
		</div>
	)
	return (
		<Layout>
			<Topbar>
				<Icon name='left' className='hoist' onClick={onClickBack}/>
				<span>Edit</span>
				<Icon/>
			</Topbar>
			{tag ? tagContent(tag) : <Center>tag is not exist.</Center>}
		</Layout>
	)
}


