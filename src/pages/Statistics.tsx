import React, {useState} from 'react';
import Layout from "../components/Layout";
import styled from 'styled-components';
import {useCollectedData} from "../components/hooks/useCollectedData";
import {CategorySection} from "../components/AddMoney/CategorySection/CategorySection";
import {useTags} from "../components/hooks/useTags";
import day from 'dayjs';

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

const Statistics = () => {
	const [category, setCategory] = useState<'-' | '+'>('-')
	const {collectedData} = useCollectedData()
	const {getName} = useTags()
	const selectedCollected = collectedData.filter(r => r.category === category)

	return (<Layout>
		<CategoryWrapper>
			<CategorySection value={category} onChange={value => setCategory(value)}/>
		</CategoryWrapper>
		{selectedCollected.map(r => {
			return (
				<Item>
					<div className='tags'>
						{r.tagsId.map(tagId => <span>{getName(tagId)}</span>)}
					</div>
					{r.note && <div className='note'> {r.note} </div>}
					<div className='amount'>
						$ {r.amount}
					</div>
					{/*{day(r.date).format('YYYY/MM/DD HH:mm:ss')}*/}
				</Item>)
		})}
	</Layout>)
}

export default Statistics;
