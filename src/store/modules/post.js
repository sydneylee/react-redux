//post module
//handleActions : reducer 함수에 option obj를 인자로 넣어서 처리
import {handleActions} from 'redux-actions';

//TODO : Id ? is not needed to save in state
const initialState ={
    posts :[{postId:1, title:'aaaaa'},{postId:2, title:'bbbbb'},{postId:3, title:'ccccc'}],
   loading: false,
   error: false,
   title: 'initialStateTitle',
   body:'initialStateBody'

};

const ASYNC_STATUS_LOADING = 'post/LOADING';
const ASYNC_STATUS_ERROR = 'post/ERROR';

const ASYNC_STATUS_SUCCESS_POST = 'post/SUCCESS_POST';

//TODO - thunk http async request : asios대신 fetch를 사용했는데, 주의할 점은 fetch에서는 .then(function(response){return response.json()})부분까지 처리해주어야 body와 title모두가 들어옴.
function getPostAPI(postId){
    //return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
    return fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`).then(function(response){return response.json()});
        //.then(function(myJson){console.log(JSON.stringify(myJson))});-이 부분은 사용하면 안됨
}

export const getPost = (postId) => async (dispatch) => {

    dispatch({ type: ASYNC_STATUS_LOADING });
    try{
        const response = await getPostAPI(postId);
        dispatch({type: ASYNC_STATUS_SUCCESS_POST, payload : response});
        return response;
    }
    catch(e){
        dispatch({type:ASYNC_STATUS_ERROR, payload: e});
    }
};
//TODO : handleActions()는 switch case구문으로 작성했던 reduce를 아래방법으로 처리한
// export default handleActions({
//     [GET_POST_PENDING]: (state) => ({ ...state, fetching: true, error: false }),
//     [GET_POST_SUCCESS]: (state, { payload: { data } }) => ({ ...state, fetching: false, title: data.title, body: data.body }),
//     [GET_POST_FAILURE]: (state) => ({ ...state, fetching: false, error: true })
// }, initialState);


export default function post(state=initialState, action){

    switch(action.type){
        case ASYNC_STATUS_LOADING:
            return{
                ...state,
                loading:true,
                error : false
            };
        case ASYNC_STATUS_ERROR:
            return{
                ...state,
                loading:false,
                error : true
            };
            return{};
        case ASYNC_STATUS_SUCCESS_POST:
            return{
                ...state,
                loading:false,
                error : false,
                title : action.payload.title,
                body  : action.payload.body

            };
        default:
            return state;
    }


}