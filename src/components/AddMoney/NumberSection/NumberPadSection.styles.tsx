import styled from 'styled-components';

export const Wrapper = styled.section`
  .outputWrapper {
    display: flex;
    flex-direction: column;
    background: white;
    color: #8d8d8d;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);

    .output {
      font-size: 36px;
      line-height: 35px;
      height: 35px;
      padding: 4px 0;
    }

    .total {
      line-height: 15px;
      padding-bottom: 6px;
    }
  }
  .pad {
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
      cursor: pointer;

      .icon {
        font-size: 1.2rem;
        fill: #888888;
      }

      &.ok {
        background-color: #5678de;
        color: white;
        border: none;
      }
    }
  }
`