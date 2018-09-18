/**
 * module
 * name        : home
 * description : home module
 * author      : lsj
 * created     : 16/9/18
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
//async actionTypes for ITEM
const ASYNC_STATUS_GET_ITEM_PENDING = 'home/GET_ITEM_PENDING';
const ASYNC_STATUS_GET_ITEM_ERROR   = 'home/GET_ITEM_ERROR';
const ASYNC_STATUS_GET_ITEM_SUCCESS = 'home/GET_ITEM_SUCCESS';

// async actionTypes for getItems
const ASYNC_STATUS_GET_ITEMS_PENDING = 'home/GET_ITEMS_PENDING';
const ASYNC_STATUS_GET_ITEMS_ERROR   = 'home/GET_ITEMS_ERROR';
const ASYNC_STATUS_GET_ITEMS_SUCCESS = 'home/GET_ITEMS_SUCCESS';

// async actionTypes for saveItem
const ASYNC_STATUS_SAVE_ITEM_PENDING = 'home/SAVE_ITEM_PENDING';
const ASYNC_STATUS_SAVE_ITEM_ERROR = 'home/SAVE_ITEM_ERROR';
const ASYNC_STATUS_SAVE_ITEM_SUCCESS = 'home/SAVE_ITEM_SUCCESS';

// async actionTypes for removeItem
const ASYNC_STATUS_REMOVE_ITEM_PENDING = 'home/REMOVE_ITEM_PENDING';
const ASYNC_STATUS_REMOVE_ITEM_ERROR = 'home/REMOVE_ITEM_ERROR';
const ASYNC_STATUS_REMOVE_ITEM_SUCCESS = 'home/REMOVE_ITEM_SUCCESS';

//-------------------------------------------------------------------------------------
// 1-2) defines sync actionTypes required  : lsjAddActionSyncInModule
//-------------------------------------------------------------------------------------
// const CHANGE = 'home/CHANGE';
const SET_MODE = 'home/SET_MODE';
const SET_ADD_ITEM_MODE = 'home/SET_ADD_ITEM_MODE';


//-------------------------------------------------------------------------------------
// 2) define and exports actionCreator functions
//-------------------------------------------------------------------------------------
// 2-1) async actionCreatorFn and their fetchFns
//-------------------------------------------------------------------------------------
// lsj-TIP : for async Thunk HTTP request
// - axios.get()
// - fetch() needs  ".then(function(response){return response.json()})"
// - template string안에서 homeId를 $와 중괄호(curly bracket)안에 올바르게 넣으면, intellij의 FileTemplate parser가 자신의 변수로하게 인식해서
// file template을 이용하여 파일을 생성시 homeId의 기본값을 묻는다.. 따라서 아래에서는 그부분을 $}homeId{로 임시대체했슴


// async actionCreatorFn for getItem
export const getItem = (id) => async (dispatch) => {
    dispatch({ type: ASYNC_STATUS_GET_ITEM_PENDING });
    try{
        const response = await getItemAPI(id);
        dispatch({type: ASYNC_STATUS_GET_ITEM_SUCCESS, payload : response});
    }
    catch(e){
        dispatch({type:ASYNC_STATUS_GET_ITEM_ERROR, payload: e});
    }
};
// fetch fn for async actionCreatorFn for getItem
function getItemAPI(id){
    return fetch('/api/item/'+id).then(function(response){return response.json()});
}

// async actionCreatorFn for getItems
export const getItems = () => async (dispatch) => {
    dispatch({ type: ASYNC_STATUS_GET_ITEMS_PENDING });
    try{
        const response = await getItemsAPI();
        dispatch({type: ASYNC_STATUS_GET_ITEMS_SUCCESS, payload : response});
    }
    catch(e){
        dispatch({type:ASYNC_STATUS_GET_ITEMS_ERROR, payload: e});
    }
};
// fetch fn for async actionCreatorFn for getItems
function getItemsAPI(){
    return fetch('/api/items').then(function(response){return response.json()});
}

// async actionCreatorFn for removeItem
export const removeItem = (id) => async (dispatch) => {
    dispatch({ type: ASYNC_STATUS_REMOVE_ITEM_PENDING });
    try{
        const response = await removeItemAPI(id);
        dispatch({type: ASYNC_STATUS_REMOVE_ITEM_SUCCESS, payload : response});
    }
    catch(e){
        dispatch({type:ASYNC_STATUS_REMOVE_ITEM_ERROR, payload: e});
    }
};
// fetch fn for async actionCreatorFn for removeItem
function removeItemAPI(id){
    return fetch('/api/item/remove/'+id).then(function(response){return response.json()});
}

// async function : saveItem(payload)
export const saveItem = (payload) => async (dispatch) => {
    dispatch({ type: ASYNC_STATUS_SAVE_ITEM_PENDING });
    try{
        // lsj-TIP : promise (방법1): submitAPI(payload)에서 처리된 prom을 then()메서드로 받아서, 그 안에서 dispatch를 바로 처리.
        // submitAPI(payload).then((response)=>{
        //     dispatch({type:ASYNC_STATUS_SUBMIT_SUCCESS, payload:response});
        // });
        // lsj-TIP : promise (방법2) : await로 처리
        const newItem = await saveItemAPI(payload);
        dispatch({type:ASYNC_STATUS_SAVE_ITEM_SUCCESS, payload:newItem});

    }
    catch(e){
        dispatch({type:ASYNC_STATUS_SAVE_ITEM_ERROR, payload: e});
    }
};
function saveItemAPI(payload){
    return fetch(`/api/item/save`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json;charset=utf-8",
        },
        body:JSON.stringify(payload)
    }).then(function(response){return response.json()});
}


//-------------------------------------------------------------------------------------
//2-2) sync actionCreatorFns
//-------------------------------------------------------------------------------------
// // Sync function : change(payload)
// export function change(payload){
//     return {type:CHANGE, payload: payload};
// }

// Sync function : setMode(mode) : set state mode to 'edit' or 'view'
export function setMode(mode){
   return {type : SET_MODE, mode:mode};
}

// Sync actionCreatorFn : setAddItemMode passing params of action's type and opts
export function setAddItemMode(mode){
   return {type : SET_ADD_ITEM_MODE, mode:mode};
}


//-------------------------------------------------------------------------------------
//3) define initialState for module
//-------------------------------------------------------------------------------------
export const initialState = {

        mode: 'view',

        // initialState for async getItem
        getItemPending  :   false,
        getItemError    :   false,
        item            :   {},

        // initialState for async getItems
        getItemsPending :   false,
        getItemsError   :   false,
        items           :   [],

        // initialState for async removeItem
        removeItemPending:   false,
        removeItemError:     false,

        // initialState for async saveItem
        saveItemPending:   false,
        saveItemError:     false,

    };


//-------------------------------------------------------------------------------------
//4) define reducer function for both of async and sync actionTypes
//-------------------------------------------------------------------------------------
export default function home(state = initialState, action) {
    let newItems = null;
    let idx = -1;
    switch (action.type) {
        // reducer for async getItem
        case ASYNC_STATUS_GET_ITEM_PENDING:
            return {
                ...state,
                getItemPending : true,
                getItemError : false,
            };
        case ASYNC_STATUS_GET_ITEM_ERROR:
            return {
                ...state,
                getItemPending : false,
                getItemError : true
            };
        case ASYNC_STATUS_GET_ITEM_SUCCESS:
            return{
                ...state,
                getItemPending :false,
                getItemError : false,
                item : action.payload
            };

        // reducer for async getItems
        case ASYNC_STATUS_GET_ITEMS_PENDING:
            return {
                ...state,
                getItemsPending : true,
                getItemsError : false,
            };
        case ASYNC_STATUS_GET_ITEMS_ERROR:
            return {
                ...state,
                getItemsPending : false,
                getItemsError : true
            };
        case ASYNC_STATUS_GET_ITEMS_SUCCESS:
            return{
                ...state,
                getItemsPending :false,
                getItemsError : false,
                items : action.payload
            };

        // reducer for async removeItem
        case ASYNC_STATUS_REMOVE_ITEM_PENDING:
            return {
                ...state,
                removeItemPending : true,
                removeItemError : false,
            };
        case ASYNC_STATUS_REMOVE_ITEM_ERROR:
            return {
                ...state,
                removeItemPending : false,
                removeItemError : true
            };
        case ASYNC_STATUS_REMOVE_ITEM_SUCCESS:
            newItems = state.items.filter(item=>item.id != action.payload);
            let item = (state.item.id == action.payload)? {} : state.item;
            return{
                ...state,
                removeItemsPending :false,
                removeItemError : false,
                items : newItems,
                item : item,
            };

        // reducer for async saveItem
        case ASYNC_STATUS_SAVE_ITEM_PENDING:
            return {
                ...state,
                saveItemPending : true,
                saveItemError : false,
            };
        case ASYNC_STATUS_SAVE_ITEM_ERROR:
            return {
                ...state,
                saveItemPending : false,
                saveItemError : true
            };
        case ASYNC_STATUS_SAVE_ITEM_SUCCESS:
            newItems = [...state.items];
            idx = newItems.findIndex(el=>el.id == action.payload.id);
            if(idx < 0){
                newItems.push(action.payload);
                console.log(newItems);
            }
            else{
                newItems[idx] = action.payload;
            }
            return {
                ...state,
                saveItemPending: false,
                saveItemError: false,
                items: newItems,
                item: action.payload,
            };

        case SET_MODE:
            return {
                ...state,
                mode:action.mode
            };
        case SET_ADD_ITEM_MODE :
           return {
               ...state,
               mode:action.mode,
               item:{},
           };
        default:
            return state;
    }

}


