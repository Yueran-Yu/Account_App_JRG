import styled from 'styled-components';
import React, {useState} from 'react';

export const Wrapper = styled.section`
  font-size: 14px;
  margin: 10px auto;
  display: inline-flex;

  > .roundCorner {
    border-radius: 5px 5px 5px 5px;
    border: 0.5px solid #5678de;


    > ul {
      display: flex;
      justify-content: center;

      > li {
        text-align: center;
        padding: 6px 10px;
        color: #5678de;

        &.selected {
          background: #5678de;
          color: white;
        }
      }
    }
  }
`

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

