/**
 * module
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

// 0) import modules if needed
//handleActions : reducer 함수에 option obj를 인자로 넣어서 처리
//import {handleActions} from 'redux-actions';


// 1) define the async 3 actionTypes:
// LOADING, ERROR : commonly used for any async actions
// SUCCESS : needed for each specific async action
const ASYNC_STATUS_LOADING = '${NAME}/LOADING';
const ASYNC_STATUS_ERROR =   '${NAME}/ERROR';

// 1-1) defines any async actionTypes required
// const ASYNC_STATUS_SUCCESS_POST =   '${NAME}/SUCCESS_POST';
// const ASYNC_STATUS_SUCCESS_SUBMIT = '${NAME}/SUCCESS_SUBMIT';

// 1-2) defines any sync actionTypes required
//const CHANGE = '${NAME}/CHANGE';


// 2-1) define and exports async actionCreator functions required
// lsj-TIP : for async Thunk HTTP request
// - axios.get()
// - fetch() needs  ".then(function(response){return response.json()})"
// - template string안에서 postId를 $와 중괄호(curly bracket)안에 올바르게 넣으면, intellij의 FileTemplate parser가 자신의 변수로하게 인식해서
// file template을 이용하여 파일을 생성시 postId의 기본값을 묻는다.. 따라서 아래에서는 그부분을 $}postId{로 임시대체했슴
// function getPostAPI(postId){
//     //return axios.get(`http://jsonplaceholder.typicode.com/posts/$}postId{`);
//     //return fetch(`http://jsonplaceholder.typicode.com/posts/$}postId{`).then(function(response){return response.json()});
//
// }

// export const getPost = (postId) => async (dispatch) => {
//
//     dispatch({ type: ASYNC_STATUS_LOADING });
//     try{
//         const response = await getPostAPI(postId);
//         dispatch({type: ASYNC_STATUS_SUCCESS_POST, payload : response});
//         //return response;
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ERROR, payload: e});
//     }
// };

// //TODO - thunk http async request : asios대신 fetch를 사용했는데, 주의할 점은 fetch에서는 .then(function(response){return response.json()})부분까지 처리해주어야 body와 title모두가 들어옴.
// function submitAPI(payload){
//     //return axios.get(`http://jsonplaceholder.typicode.com/posts/$}postId{`);
//     //return fetch(`http://jsonplaceholder.typicode.com/posts/$}postId{`).then(function(response){return response.json()});
//     //.then(function(myJson){console.log(JSON.stringify(myJson))});-이 부분은 사용하면 안됨
//     //return fetch('....', {method:'POST', payload:payload}).then(function(response){return response.json()});
//     //fail: TODO
//     // setTimeout(()=>{
//     //     //return JSON.stringify({firstname : 'newFirstname', lastname: 'newLastname'});
//     //     return {firstname : 'newFirstname', lastname: 'newLastname'};
//     // },3000);
//     //return {firstname : 'newFirstname', lastname: 'newLastname'};
//     //TODO - promise -step 1: promise 객체에, resove 경우와 reject 를 설정한 prom  객체를 return
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             //return JSON.stringify({firstname : 'newFirstname', lastname: 'newLastname'});
//             resolve({firstname : 'newFirstname', lastname: 'newLastname'});
//         },3000);
//     });
// }
//
// export const submit = (payload) => async (dispatch) => {
//
//     dispatch({ type: ASYNC_STATUS_LOADING });
//     try{
//         //TODO - promise -step 2(방법1): 1에서 처리된 prom을 await가 받아서 reponse(결과)를 변수에 assign
//         //const response = await submitAPI(payload);
//         //dispatch({type:ASYNC_STATUS_SUCCESS_SUBMIT, payload:response});
//         ////return response;
//
//         //TODO - promise -step 2(방법2): 1에서 처리된 prom을 then()메서드로 받아서, 그 안에서 dispatch를 바로 처리.
//         submitAPI(payload).then((response)=>{
//             dispatch({type:ASYNC_STATUS_SUCCESS_SUBMIT, payload:response});
//         });
//
//
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ERROR, payload: e});
//     }
// };



//2-2) define and exports sync actionCreator functions required
// export function change(payload){
//     return {type:CHANGE, payload: payload};
// }


//3) define the initialState for a specific module
export const initialState ={
    // loading: false,
    // error: false,
    // fullname: {firstname:'firstName', lastname:'lastname'},
    // names: [{firstname:'firstName', lastname:'lastname'}, {firstname:'firstName2', lastname:'lastname2'}, {firstname:'firstName3', lastname:'lastname3'}],
    // posts :[{postId:1, title:'aaaaa'},{postId:2, title:'bbbbb'},{postId:3, title:'ccccc'}],
    // title: 'initialStateTitle',
    // body:'initialStateBody',

};

//4) define reducer function for async and sync actionTypes defined above
// export default handleActions({
//     [GET_POST_PENDING]: (state) => ({ ...state, fetching: true, error: false }),
//     [GET_POST_SUCCESS]: (state, { payload: { data } }) => ({ ...state, fetching: false, title: data.title, body: data.body }),
//     [GET_POST_FAILURE]: (state) => ({ ...state, fetching: false, error: true })
// }, initialState);


export default function ${NAME}(state=initialState, action){

    // switch(action.type){
    //     case ASYNC_STATUS_LOADING:
    //         return{
    //             ...state,
    //             loading:true,
    //             error : false
    //         };
    //     case ASYNC_STATUS_ERROR:
    //         return{
    //             ...state,
    //             loading:false,
    //             error : true
    //         };
    //     case ASYNC_STATUS_SUCCESS_POST:
    //         return{
    //             ...state,
    //             loading:false,
    //             error : false,
    //             title : action.payload.title,
    //             body  : action.payload.body
    //
    //         };
    //     case ASYNC_STATUS_SUCCESS_SUBMIT:
    //          return {
    //             ...state,
    //             names: state.names.concat(action.payload)
    //     };
    //     case CHANGE:
    //         return {
    //             ...state,
    //             fullname:{
    //                 ...state.fullname,
    //                 ...action.payload
    //             }
    //         };
    //     default:
    //         return state;
    // }

}