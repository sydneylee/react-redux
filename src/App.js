import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import PostContainer from './containers/post/PostContainer';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import NamesContainer from './containers/names/NamesContainer';

//TODO : // BrowserRouter(=Router) 와 Route 바로 아래에 있는 child 는 single이어야 한다
// => 여러개일때는  <div></div>로 wrap할 것
class App extends Component {
  render() {
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
                    <Link to={`/counter`}>COUNTER</Link><span> | </span>
                    <Link to={`/names`}>NAMES</Link><span> | </span>
                    <Link to={`/post`}>POST</Link><span> | </span>
                </ul>
                <Switch>
                    <Route exact path="/counter">
                        <CounterContainer/>
                    </Route>
                    <Route exact path="/names">
                        <div>
                            <NamesContainer/>

                        </div>
                    </Route>
                    <Route exact path="/post">
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
