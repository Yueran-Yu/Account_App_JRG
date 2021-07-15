import styled from 'styled-components';
import React, {useState} from 'react';

export const Wrapper = styled.section`
  font-size: 14px;
  margin: 10px 0;

  > ul {
    display: flex;
    justify-content: center;
    line-height: 8px;


    > li {
      border: 0.5px solid #5678de;
      width: 20%;
      text-align: center;
      padding: 10px 0;
      color: #5678de;

      &.selected {
        background: #5678de;
        color: white;
      }
    }
  }
`

export const CategorySection: React.FC = () => {
    const [category, setCategory] = useState('-') // - means expense, + means income
    const categoryMap = {'-': 'Expense', '+': 'Income'}
    type Keys = keyof typeof categoryMap
    // 新的类型： 字符串的联合
    const [categoryList] = useState<(Keys)[]>(['-', '+'])
    // equals const [categoryList] = useState<('-', '+')[]>(['-', '+'])

    return (
        <Wrapper>
            <ul>

                {
                    categoryList.map(c =>
                        <li onClick={() => {setCategory(c)}}
                            className={category === c ? 'selected' : ''}>
                            {categoryMap[c]}
                        </li>)

                }
            </ul>
        </Wrapper>
    )
}

