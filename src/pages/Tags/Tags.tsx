import React from 'react';
import {useTags} from 'hooks/useTags';
import Layout from "../../components/Layout";
import {Icon} from "../../components/Icon";
import {Link} from 'react-router-dom';
import {Button} from "../../components/Button";
import {Center} from "../../components/Center";
import {TagsList} from "./Tags.styles";


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
