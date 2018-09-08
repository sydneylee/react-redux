// 1) actionTypes
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';


// 2) export functions actionCreators
// export const increment = ()=>{
//     return {type:INCREMENT}
// };
// export const decrement = ()=>{
//     return {type:DECREMENT}
// };

export function increment(){
    return {type:INCREMENT}
}

export function decrement(){
    return {type:DECREMENT}
}


// 3) initialState
const initialState = {
    number : 0
};

// 4) export default function Reducer with state and action
export default function counter(state=initialState, action){

    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            } ;
        default:
            return state
    }

}