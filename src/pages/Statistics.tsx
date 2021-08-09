import React, {ReactNode, useState} from 'react';
import Layout from "../components/Layout";
import styled from 'styled-components';
import {CollectedData, useCollectedData} from "../components/hooks/useCollectedData";
import {CategorySection} from "../components/AddMoney/CategorySection/CategorySection";
import {useTags} from "../components/hooks/useTags";
import day from 'dayjs';

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  background: white;
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

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

const Statistics = () => {
	const [category, setCategory] = useState<'-' | '+'>('-')
	const {collectedData} = useCollectedData()
	const {getName} = useTags()
	const data = collectedData.filter(r => r.category === category)
	const hash: { [K: string]: CollectedData[] } = {}  // {'2020-05-11': [item,item]. '2020-05-10':[item,item]}
	data.map(r => {
		const key = day(r.date).format('YYYY-MM-DD')
		if (!(key in hash)) {
			hash[key] = []
		}
		hash[key].push(r)
	})

	const arr = Object.entries(hash).sort((a, b) => {
		if (a[0] === b[0]) return 0
		if (a[0] > b[0]) return -1
		if (a[0] < b[0]) return 1
		return 0
	})
	return (<Layout>
		<CategoryWrapper>
			<CategorySection value={category} onChange={value => setCategory(value)}/>
		</CategoryWrapper>
		{
			arr.map(([date, collectedData]) => <div>
				<Header>
					{date}
				</Header>
				{collectedData.map(r => {
					return (
						<Item>
							<div className='tags'>
								{r.tagsId
									.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
									.reduce((result, span, index, array) =>
										result.concat(index < array.length - 1 ? [span, ', '] : [span]), [] as ReactNode[])}
							</div>
							{r.note && <div className='note'> {r.note} </div>}
							<div className='amount'>
								$ {r.amount}
							</div>
							{/*<span>{day(r.date).format('YYYY/MM/DD HH:mm:ss')}</span>*/}
						</Item>)
				})}
			</div>)
		}
	</Layout>)
}

export default Statistics;
