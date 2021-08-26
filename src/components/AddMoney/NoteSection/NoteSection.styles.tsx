import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 80%;

  > span {
    margin-right: 6px;
    white-space: nowrap;

    .icon {
      fill: #5678de;
    }
  }

  input {
    display: block;
    width: 100%;
    background: none;
    border: none;

    ::placeholder {
      color: #bebebe;
      font-family: "Arial Narrow",serif;
    }
  }
`