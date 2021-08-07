import React, {useState} from 'react';
import {Wrapper} from "./CategorySection.styles";

type Props = {
	value: '-' | '+'
	onChange: (value: '-' | '+') => void
}
export const CategorySection: React.FC<Props> = (props) => {
	const category = props.value
	const categoryMap = {'-': 'Expense', '+': 'Income'}
	type Keys = keyof typeof categoryMap
	// 新的类型： 字符串的联合
	const [categoryList] = useState<(Keys)[]>(['-', '+'])
	// equals const [categoryList] = useState<('-', '+')[]>(['-', '+'])
	return (
		<Wrapper>
			<div className='roundCorner'>
				<ul>
					{
						categoryList.map(c =>
							<li key={c}
									onClick={() => {props.onChange(c)}}
									className={category === c ? 'selected' : ''}>
								{categoryMap[c]}
							</li>)
					}
				</ul>
			</div>
		</Wrapper>
	)
}

