import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './store/modules/counter';

//TODO next - App으로 가서 <Counter />을 <CounterContainer...>로 대체
const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
