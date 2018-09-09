// 1) actionTypes
//TODO -redux-thunk: status - success경우는 기존대로 그대로 사용하고, loading과 error만 공통으로 쓰게 하면서 추가함
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

//TODO -redux-thunk /async 관련해서는 각 async action 별로는 항상 3가지 status존재(pending, success, error)
// const INCREMENT_SUCCESS = 'counter/INCREMENT_SUCCESS';//요청이 성공함을 알림
// const DECREMENT_SUCCESS = 'counter/DECREMENT_SUCCESS';//요청이 성공함을 알림

const ASYNC_STATUS_LOADING = 'counter/INCREMENT_PENDING';//요청이 시작됨을 알림 - common for increment and decrement
const ASYNC_STATUS_ERROR = 'counter/INCREMENT_ERROR';//요청이 실패함을 알림- common for increment and decrement

// const DECREMENT_PENDING = 'counter/DECREMENT_PENDING';//요청이 시작됨을 알림
// const DECREMENT_SUCCESS = 'counter/DECREMENT_SUCCESS';//요청이 성공함을 알림
// const DECREMENT_ERROR = 'counter/DECREMENT_ERROR';//요청이 실패함을 알림

// export const incrementAction = {type:INCREMENT};
// export const decrementAction = {type:DECREMENT};

// 2) export functions actionCreators
// export const increment = ()=>{
//     return {type:INCREMENT}
// };
// export const decrement = ()=>{
//     return {type:DECREMENT}
// };

// before applying redux-thunk
// export function increment(){
//     return {type:INCREMENT};
// }
//
// export function decrement(){
//     return {type:DECREMENT};
// }


//TODO : To use redux-thunk for async : 1) change existing actionCreators by suffixing 'sync'
export function incrementSync(){
    return {type:INCREMENT};
}

export function decrementSync(){
    return {type:DECREMENT};
}

export function statusLoadingSync(){
    return {type: ASYNC_STATUS_LOADING}
}
export function statusErrorSync(){
    return {type: ASYNC_STATUS_ERROR}
}

//TODO - redux-thunk: To use redux-thunk for async : 2) add new actionCreators with same function name but the asyn implement which call the ...Sync function above
// export function increment(){
//     return (dispatch)=>{
//         setTimeout(()=>{
//             dispatch(incrementSync())
//         }, 3000);
//     };
// }
//TODO -redux-thunk: To use redux-thunk for async : 2-1) convert to arrow function
// dispatch is passed to the param for the second function returned by the first funciton by redux-thunk
export const increment = ()=> dispatch=>{
        // no return but only execute
        //TODO -redux-thunk : 3 status
        dispatch(statusLoadingSync());
        setTimeout(()=>{
            dispatch(incrementSync())
            //dispatch(statusErrorSync()); //TODO : error test
        }, 3000);
    };

// export function decrement(){
//     //return {type:DECREMENT};
//     // TODO : 이 두번째 함수의 인자로 redux-thunk가 actionCreator에서 return된 것이 function type이면,
//     // 이때 dispatch를 인자로 넣어서 실행시킨다.
//     return (dispatch)=>{
//         setTimeout(()=>{
//             dispatch(decrementSync());
//         }, 3000);
//     }
// }

// export const decrement= ()=>{
//       return (dispatch)=>{
//           setTimeout(()=>{
//               dispatch(decrementSync());
//           }, 3000);
//       }
// };
// export const decrement= ()=> (dispatch)=>{
//         setTimeout(()=>{
//             dispatch(decrementSync());
//         }, 3000);
//     };
export const decrement= ()=> dispatch=>{
    dispatch(statusLoadingSync());
    setTimeout(()=>{
        dispatch(decrementSync());
    }, 3000);
};

// 3) initialState
export const initialState = {
    number: 0
};

// 4) export default function Reducer with state and action
export default function counter(state=initialState, action){

    switch(action.type){
        case ASYNC_STATUS_LOADING://TODO -redux-thunk: status : loading
            return{
                ...state,
                loading: true,
                error:false
            };
        case ASYNC_STATUS_ERROR://TODO -redux-thunk: status : error
            return{
                ...state,
                loading:false,
                error:true
            };
        case INCREMENT:           //TODO -redux-thunk: status : success - loading and error 추가
            return {
                ...state,
                loading:false,
                error:false,
                number: state.number + 1
            };
        case DECREMENT:          //TODO -redux-thunk: status : success - loading and error 추가
            return {
                ...state,
                loading:false,
                error:false,
                number: state.number - 1
            } ;
        default:
            return state
    }

}