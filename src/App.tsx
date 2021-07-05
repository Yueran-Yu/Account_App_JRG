import Nav from 'components/Nav';
import React from 'react';
import {
    // hashRouter no need to use the backend server
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
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


function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Statistics/>
                        <Redirect exact from='/' to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
                <Nav/>
            </Wrapper>
        </Router>
    );
}

function Tags() {
    return <h2>Home</h2>;
}

function Money() {
    return <h2>Money</h2>;
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function NoMatch() {
    return (
        <div>Page Not Found.</div>
    )
}

export default App;
