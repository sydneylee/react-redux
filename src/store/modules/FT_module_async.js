//module
//handleActions : reducer 함수에 option obj를 인자로 넣어서 처리
//import {handleActions} from 'redux-actions';


// 1) define the async 3 actionTypes:
// LOADING, ERROR : commonly used for any async actions
// SUCCESS : needed for each specific async action
const ASYNC_STATUS_LOADING = 'post/LOADING';
const ASYNC_STATUS_ERROR = 'post/ERROR';

//const ASYNC_STATUS_SUCCESS_POST = 'post/SUCCESS_POST';


// 2) define actionCreator functions
// lsj-TIP : for async Thunk HTTP request
// - axios.get()
// - fetch() needs  ".then(function(response){return response.json()})"
// function getPostAPI(postId){
//     //return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
//     //return fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`).then(function(response){return response.json()});
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


//3) define the initialState for a specific module
const initialState ={
    // posts :[{postId:1, title:'aaaaa'},{postId:2, title:'bbbbb'},{postId:3, title:'ccccc'}],
    // loading: false,
    // error: false,
    // title: 'initialStateTitle',
    // body:'initialStateBody'

};

//4) define reducer funciton
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
    //         return{};
    //     case ASYNC_STATUS_SUCCESS_POST:
    //         return{
    //             ...state,
    //             loading:false,
    //             error : false,
    //             title : action.payload.title,
    //             body  : action.payload.body
    //
    //         };
    //     default:
    //         return state;
    // }


}