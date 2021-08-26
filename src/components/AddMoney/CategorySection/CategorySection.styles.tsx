import styled from 'styled-components';

export const Wrapper = styled.section`
  font-size: 14px;
  margin: 10px auto;
  display: inline-flex;

  > .roundCorner {
    border-radius: 5px;
    border: 0.5px solid #5678de;
    display: flex;
    justify-content: center;

    > div {
      text-align: center;
      padding: 6px 10px;
      color: #5678de;
      border-radius: 3px;
			
      &.selected {
        background: #5678de;
        color: white;
      }
    }
  }
`