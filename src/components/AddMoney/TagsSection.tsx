import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #7c9eff;
        color: #ffffff;
        border: none;
      }
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
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('The new Tag name is:')
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    }

    const selected = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''

    const onToggleTag = (currentTag: string) => {
        const index = selectedTags.indexOf(currentTag)
        if (index >= 0) {
            setSelectedTags(selectedTags.filter(t => t !== currentTag))
            // If currentTag has been selected before, copy all tags other than the currentTag
        } else {
            setSelectedTags([...selectedTags, currentTag])
        }
    }

    return (
        <Wrapper>
            <ol>
                {/*
                shift * 2 => search : Surround with Emmet => type: li*
                This is the quick way to wrap <li> around content
                  */}
                {
                    tags.map(tag =>
                        <li
                            key={tag}
                            // onClick里面传函数 要的是一个动作
                            // className 要的直接是一个结果
                            onClick={() => { onToggleTag(tag)}}
                            className={selected(tag)}>
                            {tag}
                        </li>)
                }
            </ol>
            <button onClick={onAddTag}>New Tag</button>
        </Wrapper>
    )
}
