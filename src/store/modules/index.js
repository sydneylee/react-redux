import { combineReducers } from 'redux';
import counter from './counter';
import names from './names';
import namesRFF from './namesRFF';
import namesYUP from './namesYUP';
import namesPHS from './namesPHS';
import post from './post';

export default combineReducers({
    counter,
    names,
    namesRFF,
    namesYUP,
    namesPHS,
    post,

})