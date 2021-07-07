import React from 'react';
// hashRouter no need to use the backend server
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Tags from 'pages/Tags';
import Money from 'pages/Money';
import Statistics from 'pages/Statistics';
import {NotMatch} from 'pages/NotMatch';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from='/' to="/money"/>
                <Route path="*">
                    <NotMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
