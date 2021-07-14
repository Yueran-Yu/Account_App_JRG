import styled from 'styled-components';

export const NotesSection = styled.section`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  label {
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
        font-family: fantasy;
      }
    }
  }

  .date {
    text-align: center;
    float: right;
    width: 90%;
    color: #5678de;
    border: 0.5px solid #5678de;
    padding: 3px 0;
    margin-right: 5px;
    border-radius: 5px 5px 5px 5px;
  }
`
