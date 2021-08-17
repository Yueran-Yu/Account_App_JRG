import React from 'react';
import styled from 'styled-components';
import {useTags} from 'components/hooks/useTags';
import Layout from "../../components/Layout";
import {Icon} from "../../components/Icon";
import {Link} from 'react-router-dom';
import {Button} from "../../components/Button";
import {Center} from "../../components/Center";

const TagsList = styled.ol`
  font-size: 16px;
  background: white;
  font-weight: 150;

  h3 {
    text-align: center;
    width: 100%;
    padding: 15px 0 10px 0;
    background: #eeeeee;
		font-weight: 300;
  }

  > a > li {
    display: flex;
    border-bottom: 1px dashed #d5d5d9;
    line-height: 20px;
    padding: 8px 0;
    margin: 0 16px;
    justify-content: space-between;
    align-items: center;

    .icon {
      fill: grey;
      font-size: 12px;
    }
  }`

const Tags = () => {
	const {tags, addTag} = useTags()
	return (
		<Layout>
			<TagsList>
				<h3>Tag List</h3>
				{tags.map(tag =>
					<Link to={'/tags/' + tag.id}>
						<li key={tag.id}>
							<span className="oneLine">{tag.name}</span>
							<Icon name='right'/>
						</li>
					</Link>)}
			</TagsList>
			<Center>
				<Button onClick={addTag}>New Tag</Button>
			</Center>
		</Layout>
	)
}

export default Tags;
