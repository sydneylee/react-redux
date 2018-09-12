import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import * as validator from 'validator';

class NameYUPForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    // state = {
    //     fullname: {
    //         firstname:'',
    //         lastname:''
    //     },
    //     pristine: {
    //         firstname: true,
    //         lastname: true,
    //     },
    //     err: {
    //         firstname: '',
    //         lastname: '',
    //     }
    // };
    state = {
        fullname: {
            firstname:'',
            lastname:''
        },
        pristine: {},
        err: {}
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
    validateAndSetNewState = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const error = this.validate(targetName, targetValue);
        const newState = {
            ...this.state,
            fullname:{
                ...this.state.fullname,
                [targetName]: targetValue
            },
            pristine:{
                ...this.state.pristine,
            },
            err: {
                ...this.state.err,
            }
        };

        newState.pristine[targetName] = false;

        if (error[targetName]){
            newState.err[targetName] = error[targetName]
        } else {
            delete newState.err[targetName];
        }
        console.log(newState)
        this.setState(newState);
    }
    handleOnBlur = (e)=>{
        this.validateAndSetNewState(e)
    }

    handleOnChange=(e)=>{
        this.validateAndSetNewState(e)
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
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.pristine && !this.state.pristine.firstname && this.state.err.firstname}</div>
                </div>
                <div>
                    <input type="text"
                        name='lastname'
                        value={fullname.lastname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='last name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.pristine && !this.state.pristine.lastname && this.state.err.lastname}</div>
                </div>
                <button type="submit" disabled={Object.keys(this.state.pristine).length < 2 || Object.keys(this.state.err).length > 0 }>submit</button>
                <button type="submit" disabled={true}>submit</button>
                
            </form>
        );
    }
}

export default NameYUPForm;
