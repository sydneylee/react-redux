import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import PostContainer from './containers/post/PostContainer';
//import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';//TODO : NavLink for active or hover...Style
import NamesContainer from './containers/names/NamesContainer';
import NamesRFFContainer from './containers/namesRFF/NamesRFFContainer';
import NamesYUPContainer from './containers/namesYUP/NamesYUPContainer';

//TODO : // BrowserRouter(=Router) 와 Route 바로 아래에 있는 child 는 single이어야 한다
// => 여러개일때는  <div></div>로 wrap할 것
class App extends Component {
  render() {
      const activeStyle = {
          color: 'green',
          fontSize: '2rem'
      };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}


        <BrowserRouter>
            <div>
                <ul>
                    <NavLink activeStyle={activeStyle} to={`/counter`}>COUNTER</NavLink><span> | </span>
                    <NavLink activeStyle={activeStyle} to={`/names`}>NAMES</NavLink><span> | </span>
                    <NavLink activeStyle={activeStyle} to={`/namesRFF`}>NamesRFF</NavLink><span> | </span>
                    <NavLink activeStyle={activeStyle} to={`/namesYUP`}>NamesYUP</NavLink><span> | </span>
                    <NavLink activeStyle={activeStyle} to={`/post`}>POST</NavLink><span> | </span>
                </ul>
                <Switch>
                    <Route path="/counter">
                        <CounterContainer/>
                    </Route>
                    <Route path="/names">
                        <div>
                            <NamesContainer/>

                        </div>
                    </Route>
                    <Route path="/post/:postId" component={PostContainer} />
                    {/* // TODO : 이 방법으로 하면, location, history, match 등이 component의 props로 전달되지 않는다.
                    <Route path="/post/:postId" >*/}
                        {/*<PostContainer/>*/}
                    {/*</Route>*/}
                    <Route path="/post">
                        <div>
                            blog post...
                            <PostContainer/>
                        </div>
                    </Route>
                    {/*apply react-final-form for validation*/}
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
