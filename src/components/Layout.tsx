import React from 'react';
import Nav from "./Nav";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Layout = ({children}: any) => {
    return (
        <Wrapper>
            <Main>
                {children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}

export default Layout;