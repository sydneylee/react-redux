import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//import counterReducer, * as counterExports from './store/modules/counter'; //TODO
import reducers from './store/modules';
import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


/* //TODO To use redux-devtool extension
1) import {compose} from 'redux';

2) const enhancers = compose(

window.devToolsExtension? window.devToolsExtension() :f=>f

);

3) const store = createStore(reducer, defaultState, enhancers)
 */

const logger = createLogger(); //install redux-logger
//TODO - redux-thunk: redux-thunk를 compose()안에 applyMiddleware()함수의 인자로 넣은 후에, 첫번째 인자로 추가하기=>change the increment actionCreator as async in counter module
//TODO - redux-thunk: DevTools.instrument() = window.devToolsExtension? window.devToolsExtension() :f=>f
const enhancers = compose(
    applyMiddleware(logger, ReduxThunk),
    window.devToolsExtension? window.devToolsExtension() :f=>f
);
// initialState - schema
const initialState = {
    counter: {
        number: -100000
    },
    names:{
        name: 'initailName',
        names: ['initialAAA', 'initialBBB', 'initialCCC']
    }
};

//TODO next - App으로 가서 <Counter />을 <CounterContainer...>로 대체
const store = createStore(reducers, initialState, enhancers);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
