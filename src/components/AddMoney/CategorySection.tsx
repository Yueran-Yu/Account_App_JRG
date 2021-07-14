import styled from 'styled-components';

export const CategorySection = styled.section`
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

      &.left {
        border-radius: 5px 0 0 5px;
      }

      &.right {
        border-radius: 0 5px 5px 0;
      }


      &.selected {
        background: #5678de;
        color: white;
      }
    }
  }
`

