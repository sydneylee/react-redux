// 1) actionTypes
const CHANGE = 'names/CHANGE';
const SUBMIT = 'names/SUBMIT';

//export const changeAction = {type:CHANGE, name:};
//export const submitAction = {type:SUBMIT};

// 2) export functions actionCreators
// export const increment = ()=>{
//     return {type:INCREMENT}
// };
// export const decrement = ()=>{
//     return {type:DECREMENT}
// };
// 2) export functions actionCreators
export function change(name){
    return {type:CHANGE, name:name};
}
//TODO
export function submit(name){
    return {type:SUBMIT, name:name};
}


// 3) initialState
//TODO : state of reducer is own one not whole one
export const initialState = {
    name: 'initailName',
    names: ['initialAAA', 'initialBBB', 'initialCCC']
};

// 4) export default function Reducer with state and action
export default function counter(state=initialState, action){

    switch(action.type){
        case CHANGE:
            return {
                ...state,
                name: action.name
            };
        case SUBMIT:
            return {
                ...state,
                names: state.names.concat(action.name)
            } ;
        default:
            return state
    }

}