import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import * as validator from 'validator';

class NameYUPForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        fullname: {
            firstname:'',
            lastname:''
        },
        pristine: {
            firstname: true,
            lastname: true,
        },
        err: {
            firstname: '',
            lastname: '',
        }
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

    // handleOnBlur = (e)=>{
      
    //     const targetName = e.target.name;
    //     const targetValue = e.target.value;
    //     // console.log(targetName)
    //     const newState = {
    //         ...this.state,
    //         fullname:{
    //             ...this.state.fullname,
    //             [targetName]: targetValue
    //         },
    //         pristine:{
    //             ...this.state.pristine,
    //             [targetName]: false
    //         },
    //         err: {
    //             'fullname.firstname': '',
    //             'fullname.lastname': '',
    //         }
    //     };
    // handleOnBlur = (e)=>{
      
    //     const targetName = e.target.name;
    //     const targetValue = e.target.value;
    //     // console.log(targetName)
    //     const newState = {
    //         ...this.state,
    //         fullname:{
    //             ...this.state.fullname,
    //             [targetName]: targetValue
    //         },
    //         pristine:{
    //             ...this.state.pristine,
    //             [targetName]: false
    //         },
    //         err: {
    //             'fullname.firstname': '',
    //             'fullname.lastname': '',
    //         }
    //     };

    //     //4) setState with newState(update) and render
    //     this.setState(newState);
    // }
    handleOnBlur = (e)=>{
      
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const error = this.validate(targetName, targetValue);
        // console.log(targetName)
        
        const newState = {
            ...this.state,
            fullname:{
                ...this.state.fullname,
                [targetName]: targetValue
            },
            pristine:{
                ...this.state.pristine,
                [targetName]: false
            },
            err: {
                ...this.state.err,
                [targetName]: error[targetName]
            }
        };



        //4) setState with newState(update) and render
        this.setState(newState);
    }
    // handleOnChange=(e)=>{
    //     console.log(e.target.value);
    //     let payload = {};
    //     payload[e.target.name]=e.target.value;
    //     this.props.onChange(payload);
    //     // if(e.target.name == 'firstname') {
    //     //     this.props.onChange(e.target.value);
    //     // }else{
    //     //
    //     // }
    // };
    // handleOnChange=(e)=>{
    //     //1) get payload
    //     // let payload = {};
    //     // payload[e.target.name]=e.target.value;
    //     //let that = this;
    //     // console.log('e.target.name=', e.target.name);
    //     const targetName = e.target.name;
    //     const targetValue = e.target.value;
    //     //2) create newState
    //     const newState = {
    //         ...this.state,
    //         fullname:{
    //             ...this.state.fullname,
    //             [targetName]: targetValue
    //         },
    //         pristine:{
    //             ...this.state.pristine,
    //             [targetName]: false
    //         },
    //         err: {
    //             'fullname.firstname': '',
    //             'fullname.lastname': '',
    //         }                      
    //     };
    //     //4) setState with newState(update) and render
    //     this.setState(newState);
    // };
    handleOnChange=(e)=>{
        //1) get payload
        // let payload = {};
        // payload[e.target.name]=e.target.value;
        //let that = this;
        // console.log('e.target.name=', e.target.name);
        const targetName = e.target.name;
        const targetValue = e.target.value;

        const error = this.validate(targetName, targetValue);

        //2) create newState
        const newState = {
            ...this.state,
            fullname:{
                ...this.state.fullname,
                [targetName]: targetValue
            },
            pristine:{
                ...this.state.pristine,
                [targetName]: false
            },
            err: {
                ...this.state.err,
                [targetName]: error[targetName]
            }                      
        };
        //4) setState with newState(update) and render
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
                    <div style={{fontSize:'10px', color: 'red'}}>{!this.state.pristine.firstname && this.state.err.firstname}</div>
                </div>
                <div>
                    <input type="text"
                        name='lastname'
                        value={fullname.lastname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='last name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{!this.state.pristine.lastname && this.state.err.lastname}</div>
                </div>
                <button type="submit">submit</button>
                
            </form>
        );
    }
}

export default NameYUPForm;
