import { combineReducers } from 'redux';
import home from './home';
import home1 from './home1';
import reactTable from './reactTable';
import reactServerTable from './reactServerTable';
import counter from './counter';
import names from './names';
import namesRFF from './namesRFF';
import namesYUP from './namesYUP';
import namesPHS from './namesPHS';
import post from './post';


export default combineReducers({
    home,
    home1,
    reactTable,
    reactServerTable,
    counter,
    names,
    namesRFF,
    namesYUP,
    namesPHS,
    post,

})