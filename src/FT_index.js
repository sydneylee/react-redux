/**
 * index.js rendering a root/router component like App
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from './store/modules';


/* // lsj-TIP : To use redux-devtool extension
1) import {compose} from 'redux';
2) const enhancers = compose(
        window.devToolsExtension? window.devToolsExtension() :f=>f
   );
3) const store = createStore(reducer, defaultState, enhancers)
 */

const logger = createLogger(); //install redux-logger
// lsj-TIP : redux-thunk: redux-thunk를 compose()안에 applyMiddleware()함수의 인자로 넣은 후에, 첫번째 인자로 추가하기=>change the increment actionCreator as async in counter module
// lsj-TIP : redux-thunk: DevTools.instrument() = window.devToolsExtension? window.devToolsExtension() :f=>f
const enhancers = compose(
    applyMiddleware(logger, ReduxThunk),
    window.devToolsExtension? window.devToolsExtension() :f=>f
);
// lsj-TIP : initialStatus는 각 module안에서 해당하는 states들을 관리
// const initialState = {
// };

// lsj-TIP : Redux/store를 이용하게 되면서, App에서 <Counter /> => <CounterContainer...>로 대체
const store = createStore(reducers, undefined, enhancers);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
