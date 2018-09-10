// 1) actionTypes

const ASYNC_STATUS_LOADING = 'names/LOADING';
const ASYNC_STATUS_ERROR = 'names/ERROR';

const CHANGE = 'names/CHANGE';
//const SUBMIT = 'names/SUBMIT';

const ASYNC_STATUS_SUCCESS_SUBMIT = 'names/SUCCESS_SUBMIT';

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
// export function change(name){
//     return {type:CHANGE, name:name};
// }
export function change(payload){
    return {type:CHANGE, payload: payload};
}

//TODO
// export function submitSync(payload){
//     return {type:ASYNC_STATUS_SUCCESS_SUBMIT, fullname:payload};
// }
//TODO :1) pass dispatch for param <- by redux-thunk when it is functype

// export function submit(payload){
//     return (dispatch)=>{
//         dispatch({type:ASYNC_STATUS_LOADING});
//         fetch('....', {method:'POST', payload:payload}).then(function(response){return response.json()});
//         di
//     };
// }

//TODO - thunk http async request : asios대신 fetch를 사용했는데, 주의할 점은 fetch에서는 .then(function(response){return response.json()})부분까지 처리해주어야 body와 title모두가 들어옴.
function submitAPI(payload){
    //return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
    //return fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`).then(function(response){return response.json()});
    //.then(function(myJson){console.log(JSON.stringify(myJson))});-이 부분은 사용하면 안됨
    //return fetch('....', {method:'POST', payload:payload}).then(function(response){return response.json()});
    //fail: TODO
    // setTimeout(()=>{
    //     //return JSON.stringify({firstname : 'newFirstname', lastname: 'newLastname'});
    //     return {firstname : 'newFirstname', lastname: 'newLastname'};
    // },3000);
    //return {firstname : 'newFirstname', lastname: 'newLastname'};
    //TODO - promise -step 1: promise 객체에, resove 경우와 reject 를 설정한 prom  객체를 return
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            //return JSON.stringify({firstname : 'newFirstname', lastname: 'newLastname'});
            resolve({firstname : 'newFirstname', lastname: 'newLastname'});
        },3000);
    });


}

export const submit = (payload) => async (dispatch) => {

    dispatch({ type: ASYNC_STATUS_LOADING });
    try{
        //TODO - promise -step 2(방법1): 1에서 처리된 prom을 await가 받아서 reponse(결과)를 변수에 assign
        //const response = await submitAPI(payload);
        //dispatch({type:ASYNC_STATUS_SUCCESS_SUBMIT, payload:response});
        ////return response;

        //TODO - promise -step 2(방법2): 1에서 처리된 prom을 then()메서드로 받아서, 그 안에서 dispatch를 바로 처리.
       submitAPI(payload).then((response)=>{
           dispatch({type:ASYNC_STATUS_SUCCESS_SUBMIT, payload:response});
        });


    }
    catch(e){
        dispatch({type:ASYNC_STATUS_ERROR, payload: e});
    }
};

// 3) initialState
//TODO : state of reducer is own one not whole one
export const initialState = {
    fullname: {firstname: '', lastname:''},
    names: [{firstname:'firstName', lastname:'lastname'}, {firstname:'firstName2', lastname:'lastname2'}, {firstname:'firstName3', lastname:'lastname3'}]
};

// 4) export default function Reducer with state and action
export default function names(state=initialState, action){

    switch(action.type){
        case ASYNC_STATUS_LOADING:
            return{
                ...state,
                loading:true,
                error : false
            };
        case ASYNC_STATUS_ERROR:
            return{
                ...state,
                loading:false,
                error : true
            };
            return{};
        case CHANGE:
            return {
                ...state,
                fullname:{
                    ...state.fullname,
                    ...action.payload
                }
            };
        case ASYNC_STATUS_SUCCESS_SUBMIT:
            return {
                ...state,
                names: state.names.concat(action.payload)
            } ;
        default:
            return state
    }

}