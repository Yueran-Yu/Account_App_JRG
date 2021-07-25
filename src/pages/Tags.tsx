import React from 'react';
import styled from 'styled-components';
import {useTags} from 'useTags';
import Layout from "../components/Layout";
import {Icon} from "../components/Icon";

const TagsList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 0;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #5678de;
  color: white;
  border-radius: 3px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
`

const Tags = () => {
	const {tags, setTags} = useTags()
	return (
		<Layout>
			<TagsList>
				{tags.map(tag => <li key={tag}>
					<span className="oneLine">{tag}</span>
					<Icon name='right'/>
				</li>)}
			</TagsList>
			<Center>
				<Button>New Tag</Button>
			</Center>
		</Layout>
	)
}

export default Tags;
