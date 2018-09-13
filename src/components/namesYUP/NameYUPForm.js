// import React, {Component} from 'react';
// // import PropTypes from 'prop-types';
// // import * as yup from 'yup';
// import * as validator from 'validator';

// class NameYUPForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:''
//         },
//         touched:{},
//         error: {}
//     };


//     validate = (targetName, targetValue)=>{
//         const error = {targetName: ''};
//         if(targetName === 'firstname') {
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }else if(targetName === 'lastname'){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         return error;
//     }

//     getNewState = (e) => {
//         const targetName = e.target.name;
//         const targetValue = e.target.value;
//         const error = this.validate(targetName, targetValue);
//         const newState = {
//             ...this.state,
//             fullname:{
//                 ...this.state.fullname,
//                 [targetName]: targetValue
//             },
//         };

//         newState.touched[targetName] = true;

//         if (error[targetName]){
//             newState.error[targetName] = error[targetName]
//         } else {
//             delete newState.error[targetName];
//         }
//         this.setState(newState);
//     }
//     showError = (targetName)=>{
//         return this.state.touched[targetName] && this.state.error[targetName];
//     }
//     checkDisabled = () => {
//         return Object.keys(this.state.error).length > 0 || Object.keys(this.state.touched).length < 2;
//     }

//     handleOnBlur = (e)=>{
//         this.getNewState(e)
//     }

//     handleOnChange=(e)=>{
//         this.getNewState(e)
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);
//         // console.log('data');
//         // for(var pair of data.entries()) {
//         //     console.log(pair[0]+', '+pair[0]);
//         // }
//         let payload = {};
//         for(var pair of data.entries()) {
//             //console.log(pair[0]+', '+pair[0]);
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//         //this.props.onSubmit(this.nameRef.value);
//     };



//     render() {
//         // const {fullname} = this.props;
//         const {fullname} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                     <input type="text"
//                         name='firstname'
//                         value={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.showError('firstname')}</div>
//                 </div>
//                 <div>
//                     <input type="text"
//                         name='lastname'
//                         value={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.showError('lastname')}</div>
//                 </div>
//                 <button type="submit" disabled={this.checkDisabled()}>submit</button>
                
//             </form>
//         );
//     }
// }

// export default NameYUPForm;

import React, {Component} from 'react';
import * as validator from 'validator';

class NameYUPForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        fullname: {
            firstname:'',
            lastname:''
        },
        touched:{},
        errors: {},
        disabled: true,
    };


    validate = (targetName, targetValue)=>{
        const error = {targetName: ''};
        if(targetName === 'firstname') {
            if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
            else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
        }else if(targetName === 'lastname'){
            if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
            else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
        }
        return error;
    }

    getNewState = (targetName, targetValue, change, error, state, fieldNum) => {

        const newState = {
            ...state,
            ...change
        };

        newState.touched[targetName] = true;

        if (error[targetName]){
            newState.errors[targetName] = newState.touched[targetName] && error[targetName]
        } else {
            delete newState.errors[targetName];
        }
        newState.disabled = Object.keys(newState.errors).length > 0 || Object.keys(newState.touched).length < fieldNum;

        return newState;
    }

    handleOnBlur = (e)=>{
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const change = {
            fullname: {
                ...this.state.fullname,
                [targetName]: targetValue
            }
        }
        const error = this.validate(targetName, targetValue);
        const newState = this.getNewState(targetName, targetValue, change, error, this.state, 2)
        this.setState(newState);
    }

    handleOnChange=(e)=>{
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const change = {
            fullname: {
                ...this.state.fullname,
                [targetName]: targetValue
            }
        }
        const error = this.validate(targetName, targetValue);
        const newState = this.getNewState(targetName, targetValue, change, error, this.state, 2)
        this.setState(newState);
    };

    //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
    nameRef=null;
    handleOnSubmit=(e)=>{
        e.preventDefault();
        let data = new FormData(e.target);
        // console.log('data');
        // for(var pair of data.entries()) {
        //     console.log(pair[0]+', '+pair[0]);
        // }
        let payload = {};
        for(var pair of data.entries()) {
            //console.log(pair[0]+', '+pair[0]);
            payload[pair[0]]=pair[1];
        }
        this.props.onSubmit(payload);
        //this.props.onSubmit(this.nameRef.value);
    };



    render() {
        // const {fullname} = this.props;
        const {fullname} = this.state;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <input type="text"
                        name='firstname'
                        value={fullname.firstname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='first name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
                </div>
                <div>
                    <input type="text"
                        name='lastname'
                        value={fullname.lastname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='last name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
                </div>
                <button type="submit" disabled={this.state.disabled}>submit</button>
                
            </form>
        );
    }
}

export default NameYUPForm;
