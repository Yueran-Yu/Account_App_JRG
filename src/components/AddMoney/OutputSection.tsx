import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  .output {
    background: white;
    font-size: 42px;
    color: #8d8d8d;
    line-height: 56px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);
  }
`
export const OutputSection = () => {
    return (
        <Wrapper>
            <div className='output'>
                100
            </div>
        </Wrapper>
    )
}
