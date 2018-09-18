//=========================================================================================================
// async actionTypes for $actionType$, $module$
//       $actionType_camel$, $actionType_Cap$, $actionType_ALL_CAP$, $module_Cap$

// Tips :
// 1) If there is some intermediate compos... relay the props for states and actionDispatchers
// 2) Add handleOn$actionType_Cap$Fn in PresentCompo and apply it to element in render()
// 3) Add mapStateToProps and mapDispatchToProps in ContainerCompo
// 4) Add actiontype Async, actionCreatorFn, initialStates, reducer in module
// 5) remove not-needed for params or actionOption
// 6) server api
//======== Add handleOn$actionType_Cap$Fn in PresentCompo or ContainerCompo if any params passed ==========
// handleOn$actionType_Cap$ = (e, $idIfNeeded$) => {
//     e.stopPropagation();
//     this.props.on$actionType_Cap$($idIfNeeded$);
// };

//======== Add mapStateToProps and mapDispatchToProps in ContainerCompo ====================================
// // mapStateToProps for $actionType$
//
// $actionType_camel$Pending: $module$.$actionType_camel$Pending,
// $actionType_camel$Error :  $module$.$actionType_camel$Error,
// $newState$ :  $module$.$newState$,
//
// // mapDispatchToProps for $actionType$
// on$actionType_Cap$ : ($idIfNeeded$)=>{
//     dispatch($module$Exports.$actionType_camel$($idIfNeeded$))
// },

//======== Add actiontype Async, actionCreatorFn, initialStates, reducer in module ==========================
// // async actionTypes for $actionType$
// const ASYNC_STATUS_$actionType_ALL_CAP$_PENDING = '$module$/$actionType_ALL_CAP$_PENDING';
// const ASYNC_STATUS_$actionType_ALL_CAP$_ERROR = '$module$/$actionType_ALL_CAP$_ERROR';
// const ASYNC_STATUS_$actionType_ALL_CAP$_SUCCESS = '$module$/$actionType_ALL_CAP$_SUCCESS';
//
// // async actionCreatorFn for $actionType$
// export const $actionType_camel$ = ($idIfNeeded$) => async (dispatch) => {
//     dispatch({ type: ASYNC_STATUS_$actionType_ALL_CAP$_PENDING });
//     try{
//         const response = await $actionType_camel$API($idIfNeeded$);
//         dispatch({type: ASYNC_STATUS_$actionType_ALL_CAP$_SUCCESS, payload : response});
//     }
//     catch(e){
//         dispatch({type:ASYNC_STATUS_$actionType_ALL_CAP$_ERROR, payload: e});
//     }
// };
// // fetch fn for async actionCreatorFn for $actionType$
// function $actionType_camel$API($idIfNeeded$){
//     return fetch('/api/$endPoint$/'+$idIfNeeded$).then(function(response){return response.json()});
// }
//
//
// // initialState for async $actionType$
// $actionType_camel$Pending:   false,
// $actionType_camel$Error:     false,
// $newState$ :     $newStateInitalValue$, // if new initial state needed
//
//
// // reducer for async $actionType$
// case ASYNC_STATUS_$actionType_ALL_CAP$_PENDING:
//     return {
//         ...state,
//         $actionType_camel$Pending : true,
//         $actionType_camel$Error : false,
//     };
// case ASYNC_STATUS_$actionType_ALL_CAP$_ERROR:
//     return {
//         ...state,
//         $actionType_camel$Pending : false,
//         $actionType_camel$Error : true
//     };
// case ASYNC_STATUS_$actionType_ALL_CAP$_SUCCESS:
//     return{
//         ...state,
//         $actionType_camel$Pending :false,
//         $actionType_camel$Error : false,
//         $newState$ : action.payload
//     };
//========================================================================================================