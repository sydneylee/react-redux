/**
 * Router Component like App.js
 * name        : App
 * description : App - root/router component
 * author      : lsj
 * created     : 15/9/18
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';//NavLink for active style

// lsj-TIP : working with devServer provided by create-react-app
import CounterContainer    from './containers/CounterContainer';
import PostContainer       from './containers/post/PostContainer';
import NamesContainer      from './containers/names/NamesContainer';
import NamesRFFContainer   from './containers/namesRFF/NamesRFFContainer';//apply react-final-form for validation
import NamesYUPContainer   from './containers/namesYUP/NamesYUPContainer';//apply YUP for validation
import NamesPHSContainer   from './containers/namesPHS/NamesPHSContainer';//apply PHS for validation

// lsj-TIP : working with NodeJS/Express server
import HomeContainer from './containers/home/HomeContainer';
import Home1Container from './containers/home1/Home1Container';

// lsj-TIP : BrowserRouter(=Router) 와 Route 바로 아래에 있는 child 는 single이어야 한다 : wrap by <div></div>
// lsj-TIP : exact needed for NavLink and Route for exact matching, Switch is not properly working
class App extends Component {
    render() {
        const activeStyle = {
            color: 'green',
            fontSize: '2rem'
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <BrowserRouter>
                    <div>
                        <ul>
                            <NavLink activeStyle={activeStyle} to={`/`} exact>HOME</NavLink><span> | </span>
                            <NavLink activeStyle={activeStyle} to={`/home1`} exact>HOME1</NavLink><span> | </span>

                            <NavLink activeStyle={activeStyle} to={`/counter`}>COUNTER</NavLink><span> | </span>
                            <NavLink activeStyle={activeStyle} to={`/names`}>NAMES</NavLink><span> | </span>
                            <NavLink activeStyle={activeStyle} to={`/namesRFF`}>NamesRFF</NavLink><span> | </span>
                            <NavLink activeStyle={activeStyle} to={`/namesYUP`}>NamesYUP</NavLink><span> | </span>
                            <NavLink activeStyle={activeStyle} to={`/namesPHS`}>NamesPHS</NavLink><span> | </span>
                            <NavLink activeStyle={activeStyle} to={`/post`}>POST</NavLink><span> | </span>
                        </ul>
                        <Switch>
                            <Route exact path="/">
                            <HomeContainer/>
                            </Route>
                            <Route exact path="/home1">
                                <HomeContainer/>
                            </Route>

                            <Route path="/counter">
                            <CounterContainer/>
                            </Route>
                            <Route path="/names">
                            <div>
                            <NamesContainer/>
                            </div>
                            </Route>
                            <Route path="/namesRFF">
                            <div>
                            <NamesRFFContainer/>
                            </div>
                            </Route>
                            <Route path="/namesYUP">
                            <div>
                            <NamesYUPContainer/>
                            </div>
                            </Route>
                            <Route path="/namesPHS">
                            <div>
                            <NamesPHSContainer/>
                            </div>
                            </Route>
                            <Route path="/post/:postId" component={PostContainer} />
                            <Route path="/post">
                            <div>
                            blog post...
                            <PostContainer/>
                            </div>
                            </Route>
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

export default App;
