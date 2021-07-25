import React from 'react';
import {useTags} from 'useTags';
import Layout from "../components/Layout";

const Tags = () => {
	const {tags, setTags} = useTags()
	return (
		<Layout>
			<h2> Tags</h2>
		</Layout>
	)
}

export default Tags;
