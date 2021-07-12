import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

export const TagsSection: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['Residence', 'Clothing', 'Food', 'Transportation'])

    const onAddTag = () => {
        const x = window.prompt('The new Tag name is:')
        console.log(x)
    }

    return (
        <Wrapper>
            <ol>
                {/*
                shift * 2 => search : Surround with Emmet => type: li*
                This is the quick way to wrap <li> around content
                  */}
                {
                    tags.map(tag => <li key={tag}>{tag}</li>)
                }
            </ol>
            <button onClick={onAddTag}>New Tag</button>
        </Wrapper>
    )
}
