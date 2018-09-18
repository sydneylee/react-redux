/**
 * Presentational Component to create/update item with form
 * name        : HomeItemForm
 * description : HomeItemForm
 * author      : lsj
 * created     : 15/9/18
 */

import React, {Component} from 'react';
import * as validator from 'validator';
import * as yup from 'yup';

// add "equalTo' method to yup - phs
// Tip: do not use the function to arrow fn as the "this" should refer to "yup"
// yup.addMethod(): yup.mixed- any method can apply to String, Number, object, array
// usage : to confirm password
// yup.addMethod(yup.mixed, 'equalTo', function(ref, message) {
//     const msg = message || '${path} should match ${ref.path}';
//     return this.test('equalTo', msg, function (value) {
//         let refValue = this.resolve(ref);
//         return !refValue || !value || value === refValue;
//     });
// });


class HomeItemForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    initialState = {
        id: '',
        title: '',
        content: '',
        touched: {},
        errors: {},
        pending: false,
        disabled: true,
    };

    state = {
        id: '',
        title: '',
        content: '',
        touched: {},
        errors: {},
        pending: false,
        disabled: true,
    };
    
    //schema - validation schema for yup - server checking (async validation)
    // schema = yup.object().shape({
    //     firstname: yup.string().required('first is required').min(3).max(5).test('isDuplicate', 'aaa is duplicate', (value)=>{
    //         return new Promise((resolve, reject)=>{
    //             setTimeout(()=>{
    //                 resolve(value!=='aaa');
    //             }, 3000)
    //         })
    //     }),
    //     lastname: yup.string().required('first is required').min(3).max(5),
    //     // password1: yup.string().required('password is required').min(5).max(8),
    //     // password2: yup.string().oneOf([yup.ref('password1')], 'should be same as password1' )
    //     password1: yup.string().required('password is required').min(5).max(8).equalTo(yup.ref('password2'), 'should be same as password2.'),
    //     password2: yup.string().required('password is required').min(5).max(8).equalTo(yup.ref('password1'), 'should be same as password1.'),
    // });

    schema = yup.object().shape({
        title: yup.string().required().min(3).max(5),
        content: yup.string().required().min(10).max(15),
    });

    newState;
    doValidate = (e)=>{
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const fieldNum = 2;

        //create new state
        this.newState = {
            ...this.state,
            [targetName]: targetValue
        };

        this.newState.touched[targetName] = true;
        this.newState.loading = true;
        this.newState.disabled = true;
        this.setState(this.newState);

        const path = targetName;

        //Tip : validateAt : validate only the path while validate validates all.
        this.schema.validateAt(path, this.newState).then(value=>{
            delete this.newState.errors[targetName];

            // if(targetName === 'password1' && targetValue === this.newState.password2){
            //     delete this.newState.errors.password2;
            // }else if(targetName === 'password2' && targetValue === this.newState.password1){
            //     delete this.newState.errors.password1;
            // }

            this.newState.loading = false;
            this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < fieldNum;
            this.setState(this.newState)
        }).catch(err=>{
            this.newState.errors[err.path] = err.errors;
            this.newState.loading = false;
            this.newState.disabled = true;
            this.setState(this.newState)
        });
    };

    handleOnBlur = (e)=>{
        //this.doValidate(e);
    };

    handleOnChange=(e)=>{
        this.doValidate(e);
    };

    // Tip : onSubmit에서 e를 이용해서 form전체의 값을 받기
    //nameRef = null;
    // handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     let data = new FormData(e.target);
    //
    //     let payload = {};
    //     for (var pair of data.entries()) {
    //         payload[pair[0]] = pair[1];
    //     }
    //     this.props.onSubmit(payload);
    //
    //     //reset form with the initialState
    //     this.setState({...this.initialState});
    //     //this.setState({id:'', title: '', content: ''});
    //
    //     this.props.onSetMode('view');
    // };

    handleOnSaveItem = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);

        let payload = {};
        for (var pair of data.entries()) {
            payload[pair[0]] = pair[1];
        }
        this.props.onSaveItem(payload);

        //reset form with the initialState
        this.setState({...this.initialState});

        this.props.onSetMode('view');
    };


    //========================================================================================
    // async actionTypes for saveItem, home
    //       saveItem, SaveItem, SAVE_ITEM, Home

    // Tips :
    // 1) If there is some intermediate compos... relay the props for states and actionDispatchers
    // 2) Add handleOnSaveItemFn in PresentCompo and apply it to element in render()
    // 3) Add mapStateToProps and mapDispatchToProps in ContainerCompo
    // 4) Add actiontype Async, actionCreatorFn, initialStates, reducer in module
    // 5) remove not-needed for params or actionOption
    // 6) server api
    //======== Add handleOnSaveItemFn in PresentCompo ==================================

    //======== Add mapStateToProps and mapDispatchToProps in ContainerCompo ====================
    // // mapStateToProps for saveItem
    //
    //

    //======== Add actiontype Async, actionCreatorFn, initialStates, reducer in module ==========
    //
    // // async actionCreatorFn for saveItem
    // export const saveItem = (id) => async (dispatch) => {
    //     dispatch({ type: ASYNC_STATUS_SAVE_ITEM_PENDING });
    //     try{
    //         const response = await saveItemAPI(id);
    //         dispatch({type: ASYNC_STATUS_SAVE_ITEM_SUCCESS, payload : response});
    //     }
    //     catch(e){
    //         dispatch({type:ASYNC_STATUS_SAVE_ITEM_ERROR, payload: e});
    //     }
    // };
    // // fetch fn for async actionCreatorFn for saveItem
    // function saveItemAPI(id){
    //     return fetch('/api/save/'+id).then(function(response){return response.json()});
    // }
    //
    //
    //========================================================================================


    render() {
        const styError = {fontSize: '10px', color: 'red'};

        // Tip : Use defaultValue instead of value : Warning: A component is changing a controlled input of type hidden to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components
        const {id, title, content, pending, errors, disabled} = this.state;
        return (
            <form onSubmit={this.handleOnSaveItem}>
                <div>
                    <span>
                        <input type="hidden"
                               name='id'
                               defaultValue={this.props.mode=='view'? id : this.props.item.id}
                        />
                        <input type="text"
                               name='title'
                               defaultValue={this.props.mode=='view'? title : this.props.item.title}
                               onChange={this.handleOnChange}
                               onBlur={this.handleOnBlur}
                               placeholder='title'
                               disabled={pending}
                        />
                        <div style={styError}>{errors.title}</div>
                    </span>
                    <span>
                        <input type="text"
                               name='content'
                               defaultValue={this.props.mode=='view'? content : this.props.item.content}
                               onChange={this.handleOnChange}
                               onBlur={this.handleOnBlur}
                               placeholder='content'
                        />
                        <div style={styError}>{errors.content}</div>
                    </span>
                </div>
                <div>
                    <button type="submit" disabled={disabled || pending}>submit</button>
                </div>
            </form>
        );
    }
}

export default HomeItemForm;
