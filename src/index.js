import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
//import counterReducer, * as counterExports from './store/modules/counter'; //TODO
import reducers from './store/modules';


/* //TODO To use redux-devtool extension
1) import {compose} from 'redux';

2) const enhancers = compose(

window.devToolsExtension? window.devToolsExtension() :f=>f

);

3) const store = createStore(reducer, defaultState, enhancers)
 */

const enhancers = compose(
    window.devToolsExtension? window.devToolsExtension() :f=>f
);
// initialState - schema
const initialState = {
    counter: {
        number: 0
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
