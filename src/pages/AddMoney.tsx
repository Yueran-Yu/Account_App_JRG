import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {Icon} from "../components/Icon";

const TagsSection = styled.section`
  background: #ffffff;
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
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`

const NewTagButton = styled.button`

`

const CategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: ' ';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 30px;
    color: #5a5a5a;
    line-height: 56px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25)

  }

  > .pad {
    display: flex;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 56px;
      outline: none;
      border-bottom: 0.5px solid #e2e2e2;
      border-top: none;
      border-right: 0.5px solid #e2e2e2;
      border-left: none;

      font-size: 1.5rem;
      color: #888888;

      .icon {
        font-size: 1.2rem;
        fill: #888888;
      }

      &.ok {
        background-color: dodgerblue;
        color: white;
        border: none;
      }
    }
  }
`
const AddMoney = () => (
    <Layout>
        <CategorySection>
            <ul>
                <li className='selected'>Expense</li>
                <li>Income</li>
            </ul>
        </CategorySection>
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
                <input type="text" placeholder='Add notes here'/>
            </label>
            <div>Date</div>
        </NotesSection>
        <NumberPadSection>
            <div className='output'>
                100
            </div>
            <div className='pad clearfix'>
                {/* button{$}*16 */}
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>
                    <Icon name='delete'/>
                </button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <button>C</button>
                <button>0</button>
                <button>.</button>
                <button className='ok'>OK</button>
            </div>
        </NumberPadSection>
    </Layout>)

export default AddMoney;