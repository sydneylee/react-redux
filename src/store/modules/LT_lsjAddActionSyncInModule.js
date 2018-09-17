//=========================================================================================
// sync actionTypes for $actionType$, $module$
//       $actionType_camel$, $actionType_Cap$, $actionType_ALL_CAP$, $module_Cap$

// Tips :
// 1) If there is some intermediate compos... relay the props for states and actionDispatchers
// 2) Add handleOn$actionType_Cap$Fn in PresentCompo and apply it to element in render()
// 3) Add mapStateToProps and mapDispatchToProps in ContainerCompo
// 4) Add actiontype sync, actionCreatorFn, initialStates, reducer in module

// 5) server api
//======== Add handleOn$actionType_Cap$Fn in PresentCompo ==================================
// handleOn$actionType_Cap$ = (e, $paramIfNeeded$) => {
//     e.stopPropagation();
//     this.props.on$actionType_Cap$($paramIfNeeded$);
// };

//======== Add mapStateToProps and mapDispatchToProps in ContainerCompo ====================
// // mapStateToProps for $actionType$
//
// $newState$ :  $module$.$newState$,
//
// // mapDispatchToProps for $actionType$
// on$actionType_Cap$ : ($paramIfNeeded$)=>{
//     dispatch($module$Exports.$actionType_camel$($paramIfNeeded$))
// },

//============ add actionType sync in module ===============================================
// actionType for $actionType$
//const $actionType_ALL_CAP$ = '$module$/$actionType_ALL_CAP$';

// actionCreatorFn : set action's type and addition infos
//export function $actionType_camel$($actionOption$){
//    return {type : $actionType_ALL_CAP$, $actionOption$};
//}
// // initialState for $actionType$
//    $newState$ :     $newStateInitalValue$, // if new initial state needed

// reducer
//case $actionType_ALL_CAP$ :
//    return {
//        ...state,
//        $actionOption$:action.$actionOption$, // if action info needed
//        [more implementation needed]
//    };
//=========================================================================================