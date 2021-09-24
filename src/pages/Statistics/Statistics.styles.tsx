import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  background: white;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

export const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
