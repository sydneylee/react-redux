/**
 * Router Component like App.js
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './${NAME}.css';

import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';//NavLink for active style

// lsj-TIP : working with devServer provided by create-react-app
// import CounterContainer    from './containers/CounterContainer';
// import PostContainer       from './containers/post/PostContainer';
// import NamesContainer      from './containers/names/NamesContainer';
// import NamesRFFContainer   from './containers/namesRFF/NamesRFFContainer';//apply react-final-form for validation
// import NamesYUPContainer   from './containers/namesYUP/NamesYUPContainer';//apply YUP for validation
// import NamesPHSContainer   from './containers/namesPHS/NamesPHSContainer';//apply PHS for validation

// lsj-TIP : working with NodeJS/Express server
// import HomeContainer       from './containers/home/HomeContainer';

// lsj-TIP : BrowserRouter(=Router) 와 Route 바로 아래에 있는 child 는 single이어야 한다 : wrap by <div></div>
// lsj-TIP : exact needed for NavLink and Route for exact matching, Switch is not properly working
class ${NAME} extends Component {
    render() {
        const activeStyle = {
            color: 'green',
            fontSize: '2rem'
        };
        return (
            <div className="${NAME}">
                <header className="${NAME}-header">
                    <img src={logo} className="${NAME}-logo" alt="logo" />
                    <h1 className="${NAME}-title">Welcome to React</h1>
                </header>

                <BrowserRouter>
                    <div>
                        <ul>
                            {/*<NavLink activeStyle={activeStyle} to={`/`} exact>HOME</NavLink><span> | </span>*/}
                            {/*<NavLink activeStyle={activeStyle} to={`/counter`}>COUNTER</NavLink><span> | </span>*/}
                            {/*<NavLink activeStyle={activeStyle} to={`/names`}>NAMES</NavLink><span> | </span>*/}
                            {/*<NavLink activeStyle={activeStyle} to={`/namesRFF`}>NamesRFF</NavLink><span> | </span>*/}
                            {/*<NavLink activeStyle={activeStyle} to={`/namesYUP`}>NamesYUP</NavLink><span> | </span>*/}
                            {/*<NavLink activeStyle={activeStyle} to={`/namesPHS`}>NamesPHS</NavLink><span> | </span>*/}
                            {/*<NavLink activeStyle={activeStyle} to={`/post`}>POST</NavLink><span> | </span>*/}
                        </ul>
                        <Switch>
                            {/*<Route exact path="/">*/}
                                {/*<HomeContainer/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/counter">*/}
                                {/*<CounterContainer/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/names">*/}
                                {/*<div>*/}
                                    {/*<NamesContainer/>*/}
                                {/*</div>*/}
                            {/*</Route>*/}
                            {/*<Route path="/namesRFF">*/}
                                {/*<div>*/}
                                    {/*<NamesRFFContainer/>*/}
                                {/*</div>*/}
                            {/*</Route>*/}
                            {/*<Route path="/namesYUP">*/}
                                {/*<div>*/}
                                    {/*<NamesYUPContainer/>*/}
                                {/*</div>*/}
                            {/*</Route>*/}
                            {/*<Route path="/namesPHS">*/}
                                {/*<div>*/}
                                    {/*<NamesPHSContainer/>*/}
                                {/*</div>*/}
                            {/*</Route>*/}
                            {/*<Route path="/post/:postId" component={PostContainer} />*/}
                            {/*<Route path="/post">*/}
                                {/*<div>*/}
                                    {/*blog post...*/}
                                    {/*<PostContainer/>*/}
                                {/*</div>*/}
                            {/*</Route>*/}
                            <Route path="*">
                                <div>* default page</div>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default ${NAME};
