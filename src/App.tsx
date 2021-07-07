import React from 'react';
// hashRouter no need to use the backend server
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Tags from 'pages/Tags';
import AddMoney from 'pages/AddMoney';
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
                    <AddMoney/>
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


/*
1 确定页面 url
2 添加代码
3 Route 有两种模式： HISTORY 和 Hash， 没有后台服务器就用Hash
4 使用SVG Symbols
    自定义 webpack config
    1）yarn eject 拿到 webpack 配置 （注意git commit 一下）
    2）然后根据 svg-sprite-loader的文档进行CRM （也要git commit）
 */