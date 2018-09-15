import { combineReducers } from 'redux';
import home from './home';
import counter from './counter';
import names from './names';
import namesRFF from './namesRFF';
import namesYUP from './namesYUP';
import namesPHS from './namesPHS';
import post from './post';


export default combineReducers({
    home,
    counter,
    names,
    namesRFF,
    namesYUP,
    namesPHS,
    post,

})