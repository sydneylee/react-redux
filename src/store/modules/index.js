import { combineReducers } from 'redux';
import counter from './counter';
import names from './names';


export default combineReducers({
    counter,
    names
})