//=========================================================================================================
// sync actionTypes for $actionType$, $module$
//       $actionType_camel$, $actionType_Cap$, $actionType_ALL_CAP$, $module_Cap$

// Tips :
// 1) If there is some intermediate compos... relay the props for states and actionDispatchers
// 2) Add handleOn$actionType_Cap$Fn in PresentCompo and apply it to element in render()
// 3) Add mapStateToProps and mapDispatchToProps in ContainerCompo
// 4) Add actiontype sync, actionCreatorFn, initialStates, reducer in module
// 5) remove not-needed for params or actionOption
//======== Add handleOn$actionType_Cap$Fn in PresentCompo or ContainerCompo if any params passed ==========
// handleOn$actionType_Cap$ = (e, $paramIfNeeded$) => {
//     e.stopPropagation();
//     this.props.on$actionType_Cap$($paramIfNeeded$);
// };

//======== Add mapStateToProps and mapDispatchToProps in ContainerCompo ===================================
// // mapStateToProps for $actionType$
//
// $newState$ :  $module$.$newState$,
//
// // mapDispatchToProps for $actionType$
// on$actionType_Cap$ : ($paramIfNeeded$)=>{
//     dispatch($module$Exports.$actionType_camel$($paramIfNeeded$))
// },

//============ add actionType sync in module =============================================================
// //Sync actionType for $actionType$
//const $actionType_ALL_CAP$ = '$module$/$actionType_ALL_CAP$';

// //Sync actionCreatorFn : $actionType_camel$() passing params of action's type and opts
//export function $actionType_camel$($actionOptKey$){
//    return {type : $actionType_ALL_CAP$, $actionOptKey$:$actionOptVal$};
//}
//
// // initialState for $actionType$
//    $newState$ :     $newStateInitalValue$, // if new initial state needed

// reducer
//case $actionType_ALL_CAP$ :
//    return {
//        ...state,
//        $actionOptKey$:action.$actionOptKey$,
//        $needMoreWork$
//    };
//=========================================================================================================