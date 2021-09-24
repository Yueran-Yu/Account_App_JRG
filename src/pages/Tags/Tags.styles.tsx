import styled from "styled-components";

export const TagsList = styled.ol`
  font-size: 16px;
  background: white;
  font-weight: 150;

  h3 {
    text-align: center;
    width: 100%;
    padding: 15px 0 10px 0;
    background: #eeeeee;
		font-weight: 300;
  }

  > a > li {
    display: flex;
    border-bottom: 1px dashed #d5d5d9;
    line-height: 20px;
    padding: 8px 0;
    margin: 0 16px;
    justify-content: space-between;
    align-items: center;

    .icon {
      fill: grey;
      font-size: 12px;
    }
  }`