import React from 'react';
import styled from 'styled-components';
import {useTags} from 'pages/Tags/useTags';
import Layout from "../../components/Layout";
import {Icon} from "../../components/Icon";
import {Link} from 'react-router-dom';

const TagsList = styled.ol`
  font-size: 16px;
  background: white;

  > a > li {
    display: flex;
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 8px 0;
    margin: 0 16px;
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
	const {tags} = useTags()

	return (
		<Layout>
			<TagsList>
				{tags.map(tag =>
					<Link to={'/tags/' + tag.id}>
						<li key={tag.id}>
							<span className="oneLine">{tag.name}</span><Icon name='right'/>
						</li>
					</Link>)}
			</TagsList>
			<Center>
				<Button>New Tag</Button>
			</Center>
		</Layout>
	)
}

export default Tags;
