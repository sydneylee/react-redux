/**
 * module
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

// 0) import modules if needed
//import {handleActions} from 'redux-actions';


// 1) define actionTypes:

// 1-1) defines async actionTypes required
// const ASYNC_STATUS_PENDING_ITEM = '${NAME}/PENDING_ITEM';
// const ASYNC_STATUS_ERROR_ITEM = '${NAME}/ERROR_ITEM';
// const ASYNC_STATUS_SUCCESS_ITEM =   '${NAME}/SUCCESS_ITEM';
//
// const ASYNC_STATUS_PENDING_ITEMS = '${NAME}/PENDING_ITEMS';
// const ASYNC_STATUS_ERROR_ITEMS = '${NAME}/ERROR_ITEMS';
// const ASYNC_STATUS_SUCCESS_ITEMS =  '${NAME}/SUCCESS_ITEMS';
//
// const ASYNC_STATUS_PENDING_SUBMIT = '${NAME}/PENDING_SUBMIT';
// const ASYNC_STATUS_ERROR_SUBMIT = '${NAME}/ERROR_SUBMIT';
// const ASYNC_STATUS_SUCCESS_SUBMIT = '${NAME}/SUCCESS_SUBMIT';


// 1-2) defines sync actionTypes required
//const CHANGE = '${NAME}/CHANGE';


// 2) define and exports actionCreator functions

// 2-1) async actionCreator functions
// lsj-TIP : for async Thunk HTTP request
// - axios.get()
// - fetch() needs  ".then(function(response){return response.json()})"
// - template string안에서 ${NAME}Id를 $와 중괄호(curly bracket)안에 올바르게 넣으면, intellij의 FileTemplate parser가 자신의 변수로하게 인식해서
// file template을 이용하여 파일을 생성시 ${NAME}Id의 기본값을 묻는다.. 따라서 아래에서는 그부분을 $}${NAME}Id{로 임시대체했슴


// // async function : getItem(id)
// function getItemAPI(id){
//     //return axios.get(`http://jsonplaceholder.typicode.com/Items/$}id{`);
//     //return fetch(`http://jsonplaceholder.typicode.com/Items/$}id{`).then(function(response){return response.json()});
//     return fetch('/api/item/'+id).then(function(response){return response.json()});
// }
// export const getItem = (id) => async (dispatch) => {
//
//     dispatch({ type: ASYNC_STATUS_PENDING_ITEM });
//     try{
//         const response = await getItemAPI(id);
//         dispatch({type: ASYNC_STATUS_SUCCESS_ITEM, payload : response});
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ERROR_ITEM, payload: e});
//     }
// };


// // async function : getItems()
// function getItemsAPI(){
//     return fetch('/api/items').then(function(response){return response.json()});
// }
//
// export const getItems = () => async (dispatch) => {
//
//     dispatch({ type: ASYNC_STATUS_PENDING_ITEMS });
//     try{
//         const response = await getItemsAPI();
//         dispatch({type: ASYNC_STATUS_SUCCESS_ITEMS, payload : response});
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ERROR_ITEMS, payload: e});
//     }
// };

//     // async function : submit(payload)
//     // function submitAPI(payload){
//     //return axios.get(`http://jsonplaceholder.typicode.com/${NAME}s/id`);
//     //return fetch(`http://jsonplaceholder.typicode.com/${NAME}s/id`).then(function(response){return response.json()});
//     //.then(function(myJson){console.log(JSON.stringify(myJson))});-이 부분은 사용하면 안됨
//     //return fetch('....', {method:'POST', payload:payload}).then(function(response){return response.json()});
//     //fail: TODO
//     // setTimeout(()=>{
//     //     //return JSON.stringify({firstname : 'newFirstname', lastname: 'newLastname'});
//     //     return {firstname : 'newFirstname', lastname: 'newLastname'};
//     // },3000);
//     //return {firstname : 'newFirstname', lastname: 'newLastname'};
//     // lsj-TIP : promise -step 1: promise 객체에, resove 경우와 reject 를 설정한 prom  객체를 return
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
//     dispatch({ type: ASYNC_STATUS_PENDING_SUBMIT });
//     try{
//         // lsj-TIP : promise -step 2(방법1): 1에서 처리된 prom을 await가 받아서 reponse(결과)를 변수에 assign
//         //const response = await submitAPI(payload);
//         //dispatch({type:ASYNC_STATUS_SUCCESS_SUBMIT, payload:response});
//         ////return response;
//
//         // lsj-TIP : promise -step 2(방법2): 1에서 처리된 prom을 then()메서드로 받아서, 그 안에서 dispatch를 바로 처리.
//         submitAPI(payload).then((response)=>{
//             dispatch({type:ASYNC_STATUS_SUCCESS_SUBMIT, payload:response});
//         });
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ERROR_SUBMIT, payload: e});
//     }
// };


//2-2) sync actionCreator functions

// // Sync function : change(payload)
// export function change(payload){
//     return {type:CHANGE, payload: payload};
// }


//3) define initialState for module
export const initialState ={
    // fullname: {firstname:'firstName', lastname:'lastname'},
    // names: [{firstname:'firstName', lastname:'lastname'}, {firstname:'firstName2', lastname:'lastname2'}, {firstname:'firstName3', lastname:'lastname3'}],
    // ${NAME}s :[{id:1, title:'aaaaa'},{id:2, title:'bbbbb'},{id:3, title:'ccccc'}],
    // title: 'initialStateTitle',
    // body:'initialStateBody',

    // itemPending:    false,
    // itemError:      false,
    // item :          {},

    // itemsPending:   false,
    // itemsError:     false,
    // items :         [],

    // submitPending:  false,
    // submitError:    false,

};

//4) define reducer function for async and sync actionTypes defined above
// export default handleActions({
//     [GET_${module_name_in_all_upper}_PENDING]: (state) => ({ ...state, fetching: true, error: false }),
//     [GET_${module_name_in_all_upper}_SUCCESS]: (state, { payload: { data } }) => ({ ...state, fetching: false, title: data.title, body: data.body }),
//     [GET_${module_name_in_all_upper}_FAILURE]: (state) => ({ ...state, fetching: false, error: true })
// }, initialState);


export default function ${NAME}(state=initialState, action){

    switch(action.type){
        // case ASYNC_STATUS_PENDING_ITEM:
        //     return {
        //         ...state,
        //         itemPending: true,
        //         itemError: false,
        //         item:{}
        //     };
        // case ASYNC_STATUS_ERROR_ITEM:
        //     return {
        //         ...state,
        //         itemPending: false,
        //         itemError: true
        //     };
        // case ASYNC_STATUS_SUCCESS_ITEM:
        //     return{
        //         ...state,
        //         itemPending:false,
        //         itemError : false,
        //         item: action.payload,
        //     };
        // case ASYNC_STATUS_PENDING_ITEMS:
        //     return {
        //         ...state,
        //         itemsPending: true,
        //         itemsError: false,
        //         items:[]
        //     };
        // case ASYNC_STATUS_ERROR_ITEMS:
        //     return {
        //         ...state,
        //         itemsPending: false,
        //         itemsError: true
        //     };
        // case ASYNC_STATUS_SUCCESS_ITEMS:
        //     return{
        //         ...state,
        //         itemsPending:false,
        //         itemsError : false,
        //         items : action.payload
        //     };
        // case ASYNC_STATUS_PENDING_SUBMIT:
        //     return {
        //         ...state,
        //         submitPending: true,
        //         submitError: false,
        //     };
        // case ASYNC_STATUS_ERROR_SUBMIT:
        //     return {
        //         ...state,
        //         submitPending: false,
        //         submitError: true
        //     };
        // case ASYNC_STATUS_SUCCESS_SUBMIT:
        //      return {
        //         ...state,
        //         submitPending: false,
        //         submitError: false,
        //         names: state.names.concat(action.payload)
        // };
        // case CHANGE:
        //     return {
        //         ...state,
        //         fullname:{
        //             ...state.fullname,
        //             ...action.payload
        //         }
        //     };
        default:
            return state;
    }

}