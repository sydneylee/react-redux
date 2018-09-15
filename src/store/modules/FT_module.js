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
// const ASYNC_STATUS_ITEM_PENDING = '${NAME}/ITEM_PENDING';
// const ASYNC_STATUS_ITEM_ERROR = '${NAME}/ITEM_ERROR';
// const ASYNC_STATUS_ITEM_SUCCESS =   '${NAME}/ITEM_SUCCESS';
//
// const ASYNC_STATUS_ITEMS_PENDING = '${NAME}/ITEMS_PENDING';
// const ASYNC_STATUS_ITEMS_ERROR = '${NAME}/ITEMS_ERROR';
// const ASYNC_STATUS_ITEMS_SUCCESS =  '${NAME}/ITEMS_SUCCESS';
//
// const ASYNC_STATUS_SUBMIT_PENDING = '${NAME}/SUBMIT_PENDING';
// const ASYNC_STATUS_SUBMIT_ERROR = '${NAME}/SUBMIT_ERROR';
// const ASYNC_STATUS_SUBMIT_SUCCESS = '${NAME}/SUBMIT_SUCCESS';


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
//     dispatch({ type: ASYNC_STATUS_ITEM_PENDING });
//     try{
//         const response = await getItemAPI(id);
//         dispatch({type: ASYNC_STATUS_ITEM_SUCCESS, payload : response});
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ITEM_ERROR, payload: e});
//     }
// };


// // async function : getItems()
// function getItemsAPI(){
//     return fetch('/api/items').then(function(response){return response.json()});
// }
//
// export const getItems = () => async (dispatch) => {
//
//     dispatch({ type: ASYNC_STATUS_ITEMS_PENDING });
//     try{
//         const response = await getItemsAPI();
//         dispatch({type: ASYNC_STATUS_ITEMS_SUCCESS, payload : response});
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_ITEMS_ERROR, payload: e});
//     }
// };

// //async function : submit(payload)
// function submitAPI(payload){
//     return fetch(`/api/item/create`, {
//         method:'POST',
//         headers:{
//             "Content-Type":"application/json;charset=utf-8",
//         },
//         body:JSON.stringify(payload)
//     }).then(function(response){return response.json()});
// }
//
// export const submit = (payload) => async (dispatch) => {
//     dispatch({ type: ASYNC_STATUS_SUBMIT_PENDING });
//     try{
//         // lsj-TIP : promise (방법1): submitAPI(payload)에서 처리된 prom을 then()메서드로 받아서, 그 안에서 dispatch를 바로 처리.
//         // submitAPI(payload).then((response)=>{
//         //     dispatch({type:ASYNC_STATUS_SUBMIT_SUCCESS, payload:response});
//         // });
//         // lsj-TIP : promise (방법2) : await로 처리
//         const newItem = await submitAPI(payload);
//         dispatch({type:ASYNC_STATUS_SUBMIT_SUCCESS, payload:newItem});
//
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_SUBMIT_ERROR, payload: e});
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
        // case ASYNC_STATUS_ITEM_PENDING:
        //     return {
        //         ...state,
        //         itemPending: true,
        //         itemError: false,
        //         item:{}
        //     };
        // case ASYNC_STATUS_ITEM_ERROR:
        //     return {
        //         ...state,
        //         itemPending: false,
        //         itemError: true
        //     };
        // case ASYNC_STATUS_ITEM_SUCCESS:
        //     return{
        //         ...state,
        //         itemPending:false,
        //         itemError : false,
        //         item: action.payload,
        //     };
        // case ASYNC_STATUS_ITEMS_PENDING:
        //     return {
        //         ...state,
        //         itemsPending: true,
        //         itemsError: false,
        //     };
        // case ASYNC_STATUS_ITEMS_ERROR:
        //     return {
        //         ...state,
        //         itemsPending: false,
        //         itemsError: true
        //     };
        // case ASYNC_STATUS_ITEMS_SUCCESS:
        //     return{
        //         ...state,
        //         itemsPending:false,
        //         itemsError : false,
        //         items : action.payload
        //     };
        // case ASYNC_STATUS_SUBMIT_PENDING:
        //     return {
        //         ...state,
        //         submitPending: true,
        //         submitError: false,
        //     };
        // case ASYNC_STATUS_SUBMIT_ERROR:
        //     return {
        //         ...state,
        //         submitPending: false,
        //         submitError: true
        //     };
        // case ASYNC_STATUS_SUBMIT_SUCCESS:
        //     return {
        //         ...state,
        //         submitPending: false,
        //         submitError: false,
        //         items: [...state.items, action.payload]
        //     };
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