//======== Add actiontype Async in module ==================================================
// // async actionTypes for $actionType$
// const ASYNC_STATUS_$actionType_Upper$_PENDING = '$module$/$actionType_Upper$_PENDING';
// const ASYNC_STATUS_$actionType_Upper$_ERROR = '$module$/$actionType_Upper$_ERROR';
// const ASYNC_STATUS_$actionType_Upper$_SUCCESS = '$module$/$actionType_Upper$_SUCCESS';
//
// // async actionCreatorFn for $actionType$ and $actionOption$
// export const $actionCreatorFn$ = () => async (dispatch) => {
//     dispatch({ type: ASYNC_STATUS_$actionType_Upper$_PENDING });
//     try{
//         const response = await $actionCreatorFn$API();
//         dispatch({type: ASYNC_STATUS_$actionType_Upper$_SUCCESS, $actionOption$ : response});
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_$actionType_Upper$_ERROR, $actionOption$: e});
//     }
// };
// // fetch fn for async actionCreatorFn for $actionType$
// function $actionCreatorFn$API(){
//     return fetch('/api/$endPoint$').then(function(response){return response.json()});
// }
//
//
// // initialState for async action of $actionType$
// $targetState$ :         [], // if initial state needed
// $targetState$Pending:   false,
// $targetState$Error:     false,
//
//
// // reducer for async action $actionType$
// case ASYNC_STATUS_$actionType_Upper$_PENDING:
//     return {
//         ...state,
//         $targetState$Pending : true,
//         $targetState$Error : false,
//     };
// case ASYNC_STATUS_$actionType_Upper$_ERROR:
//     return {
//         ...state,
//         $targetState$Pending : false,
//         $targetState$Error : true
//     };
// case ASYNC_STATUS_$actionType_Upper$_SUCCESS:
//     return{
//         ...state,
//         $targetState$sPending :false,
//         $targetState$Error : false,
//         $targetState$ : action.$actionOption$
//     };
//====================================================================