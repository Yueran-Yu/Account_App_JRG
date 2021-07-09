import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";

const TagsSection = styled.section`
  background: #ffffff;
  border: 4px solid red;
  padding: 12px 16px;

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
const NotesSection = styled.section`

`

const NewTagButton = styled.button`

`
const CategorySection = styled.section`

`

const NumberPadSection = styled.section`

`
// update the code

const AddMoney = () => (
    <Layout>
        <TagsSection className='tags'>
            <ol>
                {/*
                shift * 2 => search : Surround with Emmet => type: li*
                This is the quick way to wrap <li> around content
                  */}
                <li>Residence</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Transportation</li>
            </ol>
            <NewTagButton>New Tag</NewTagButton>
        </TagsSection>
        <NotesSection>
            <label>
                <span>Notes</span>
                <input type="text"/>
            </label>
        </NotesSection>
        <CategorySection>
            <ul>
                <li>Expense</li>
                <li>Income</li>
            </ul>
        </CategorySection>
        <NumberPadSection>
            <div>
                100
            </div>
            <div>
                {/* button{$}*16 */}
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>Delete</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>Clear</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
                <button>.</button>

            </div>
        </NumberPadSection>
    </Layout>)

export default AddMoney;