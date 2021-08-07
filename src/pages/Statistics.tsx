import React, {useState} from 'react';
import Layout from "../components/Layout";
import styled from 'styled-components';
import {useCollectedData} from "../components/hooks/useCollectedData";
import {CategorySection} from "../components/AddMoney/CategorySection/CategorySection";
import {useTags} from "../components/hooks/useTags";
import day  from 'dayjs';

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`

const Statistics = () => {
	const [category, setCategory] = useState<'-' | '+'>('-')
	const {collectedData} = useCollectedData()
	const {getName} = useTags()

	return (<Layout>
		<CategoryWrapper>
			<CategorySection value={category} onChange={value => setCategory(value)}/>
		</CategoryWrapper>
		<div>
			{collectedData.map(r => {
				return (
					<div>
						{r.tagsId.map(tagId => <span>{getName(tagId)}</span>)}
						{r.amount}
						<hr/>
						<br/>
						{day(r.date).format('YYYY/MM/DD HH:mm:ss')}
						<br/>
					</div>)
			})}
		</div>
	</Layout>)
}

export default Statistics;
