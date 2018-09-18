/**
 * module
 * name        : reactTable
 * description : reactTable using react-table module
 * author      : lsj
 * created     : 18/9/18
 */

//-------------------------------------------------------------------------------------
// 0) import modules if needed
//-------------------------------------------------------------------------------------
//import {handleActions} from 'redux-actions';


//-------------------------------------------------------------------------------------
// 1) define actionTypes:
//-------------------------------------------------------------------------------------
    // 1-1) defines async actionTypes required : lsjAddActionAsyncInModule
//-------------------------------------------------------------------------------------
// //async actionTypes for ITEM
const ASYNC_STATUS_ITEM_PENDING = 'reactTable/ITEM_PENDING';
const ASYNC_STATUS_ITEM_ERROR = 'reactTable/ITEM_ERROR';
const ASYNC_STATUS_ITEM_SUCCESS =   'reactTable/ITEM_SUCCESS';

//async actionTypes for ITEMS
const ASYNC_STATUS_ITEMS_PENDING = 'reactTable/ITEMS_PENDING';
const ASYNC_STATUS_ITEMS_ERROR = 'reactTable/ITEMS_ERROR';
const ASYNC_STATUS_ITEMS_SUCCESS =  'reactTable/ITEMS_SUCCESS';

//async actionTypes for SUBMIT
const ASYNC_STATUS_SUBMIT_PENDING = 'reactTable/SUBMIT_PENDING';
const ASYNC_STATUS_SUBMIT_ERROR = 'reactTable/SUBMIT_ERROR';
const ASYNC_STATUS_SUBMIT_SUCCESS = 'reactTable/SUBMIT_SUCCESS';


//-------------------------------------------------------------------------------------
// 1-2) defines sync actionTypes required  : lsjAddActionSyncInModule
//-------------------------------------------------------------------------------------
// const CHANGE = 'reactTable/CHANGE';
// const SET_MODE = 'reactTable/SET_MODE';
// const ADD_ITEM = 'reactTable/ADD_ITEM';


//-------------------------------------------------------------------------------------
// 2) define and exports actionCreator functions
//-------------------------------------------------------------------------------------
// 2-1) async actionCreatorFn and their fetchFns
//-------------------------------------------------------------------------------------
// Tip : for async Thunk HTTP request
// - axios.get()
// - fetch() needs  ".then(function(response){return response.json()})"
// - template string안에서 reactTableId를 $와 중괄호(curly bracket)안에 올바르게 넣으면, intellij의 FileTemplate parser가 자신의 변수로하게 인식해서
// file template을 이용하여 파일을 생성시 reactTableId의 기본값을 묻는다.. 따라서 아래에서는 그부분을 $}reactTableId{로 임시대체했슴


// async function : getItem(id)
export const getItem = (id) => async (dispatch) => {

    dispatch({ type: ASYNC_STATUS_ITEM_PENDING });
    try{
        const response = await getItemAPI(id);
        dispatch({type: ASYNC_STATUS_ITEM_SUCCESS, payload : response});
    }
    catch(e){
        dispatch({type:ASYNC_STATUS_ITEM_ERROR, payload: e});
    }
};
function getItemAPI(id){
    //return axios.get(`http://jsonplaceholder.typicode.com/Items/$}id{`);
    return fetch('/api/item/'+id).then(function(response){return response.json()});
}


// async function : getItems()
export const getItems = () => async (dispatch) => {

    dispatch({ type: ASYNC_STATUS_ITEMS_PENDING });
    try{
        const response = await getItemsAPI();
        dispatch({type: ASYNC_STATUS_ITEMS_SUCCESS, payload : response});
    }
    catch(e){
        dispatch({type:ASYNC_STATUS_ITEMS_ERROR, payload: e});
    }
};
function getItemsAPI(){
    return fetch('/api/items').then(function(response){return response.json()});
}


// // async function : submit(payload)
// export const submit = (payload) => async (dispatch) => {
//     dispatch({ type: ASYNC_STATUS_SUBMIT_PENDING });
//     try{
//         // Tip : promise (방법1): submitAPI(payload)에서 처리된 prom을 then()메서드로 받아서, 그 안에서 dispatch를 바로 처리.
//         // submitAPI(payload).then((response)=>{
//         //     dispatch({type:ASYNC_STATUS_SUBMIT_SUCCESS, payload:response});
//         // });
//         // Tip : promise (방법2) : await로 처리
//         const newItem = await submitAPI(payload);
//         dispatch({type:ASYNC_STATUS_SUBMIT_SUCCESS, payload:newItem});
//
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_SUBMIT_ERROR, payload: e});
//     }
// };
// function submitAPI(payload){
//     return fetch(`/api/item/save`, {
//         method:'POST',
//         headers:{
//             "Content-Type":"application/json;charset=utf-8",
//         },
//         body:JSON.stringify(payload)
//     }).then(function(response){return response.json()});
// }


//-------------------------------------------------------------------------------------
//2-2) sync actionCreatorFns
//-------------------------------------------------------------------------------------
// // Sync function : change(payload)
// export function change(payload){
//     return {type:CHANGE, payload: payload};
// }


// // Sync function : setMode(mode) : set mode to 'edit' or 'view'
// export function setMode(mode){
//     return {type:SET_MODE, mode: mode};
// }
//
// // Sync function : addItem() : add item in edit mode
// export function addItem(){
//     return {type : ADD_ITEM, mode:'edit'};
// }


//-------------------------------------------------------------------------------------
//3) define initialState for module
//-------------------------------------------------------------------------------------
export const initialState = {

        mode: 'view',

        item :          {},
        itemPending:    false,
        itemError:      false,

        items :         [],
        itemsPending:   false,
        itemsError:     false,

        submitPending:  false,
        submitError:    false,

    };


//-------------------------------------------------------------------------------------
//4) define reducer function for both of async and sync actionTypes
//-------------------------------------------------------------------------------------
export default function reactTable(state = initialState, action) {

    switch (action.type) {
        case ASYNC_STATUS_ITEM_PENDING:
            return {
                ...state,
                itemPending: true,
                itemError: false,
                item:{}
            };
        case ASYNC_STATUS_ITEM_ERROR:
            return {
                ...state,
                itemPending: false,
                itemError: true
            };
        case ASYNC_STATUS_ITEM_SUCCESS:
            return{
                ...state,
                itemPending:false,
                itemError : false,
                item: action.payload,
            };
        case ASYNC_STATUS_ITEMS_PENDING:
            return {
                ...state,
                itemsPending: true,
                itemsError: false,
            };
        case ASYNC_STATUS_ITEMS_ERROR:
            return {
                ...state,
                itemsPending: false,
                itemsError: true
            };
        case ASYNC_STATUS_ITEMS_SUCCESS:
            return{
                ...state,
                itemsPending:false,
                itemsError : false,
                items : action.payload
            };
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
        //     let newItems = Array.from(state.items);
        //     const idx = newItems.findIndex(el=>el.id == action.payload.id);
        //     if(idx == null){
        //         newItems.push(action.payload);
        //     }
        //     else{
        //         newItems[idx] = action.payload;
        //     }
        //     return {
        //         ...state,
        //         submitPending: false,
        //         submitError: false,
        //         items: newItems,
        //         item: action.payload,
        //     };
        // case SET_MODE:
        //     return {
        //         ...state,
        //         mode:action.mode
        //     };
        // case ADD_ITEM :
        //     return {
        //         ...state,
        //         mode:action.mode,
        //         item: {},
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


