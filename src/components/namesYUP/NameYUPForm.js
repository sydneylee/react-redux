import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';

class NameYUPForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        fullname: {
            firstname:'aaa',
            lastname:'bbb'
        },
        error: false,
        errorMsg: null
    };

    schema = yup.object().shape(
        {
            fullname: yup.object({
                firstname:yup.string().required(),
                lastname:yup.string().required(),//yup.number().required().positive().integer()
            }),
            error: false,
            errorMsg: null
        }
    );

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
    handleOnChange=(e)=>{
        //1) get payload
        let payload = {};
        payload[e.target.name]=e.target.value;
        //let that = this;

        //2) create newState
        const newState = {
            ...this.state,
            fullname:{
                ...this.state.fullname,
                ...payload
            },
            error:false,
            erroMsg:'error'
        };

        //3) validate the newState
        this.schema.validate(newState)
            .then(function(value){
            console.log("success");
            //that.setState(newState);
        }).catch(function(err){
            console.error(err);
            //that.setState(newState);
        });

        //4) setState with newState(update) and render
        this.setState(newState);

        // // this.props.onChange(payload);
        // this.setState({
        //     ...this.state,
        //     fullname:{
        //         ...this.state.fullname,
        //         ...payload
        //     },
        //     error:false,
        //     errorMsg:null
        // })

        // if(!validator.isString(e.target.value)){
        //     this.setState({error:true, errorMsg:'Name should be string'})
        // }
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
                <input type="text"
                       name='firstname'
                       value={fullname.firstname}
                       onChange={this.handleOnChange}
                       placeholder='first name'
                />
                <input type="text"
                       name='lastname'
                       value={fullname.lastname}
                       onChange={this.handleOnChange}
                       placeholder='last name'

                />
                <button type="submit">submit</button>
                <div style={{fontSize: '10px'}}>{this.state.error && this.state.errorMsg}</div>
            </form>
        );
    }
}

export default NameYUPForm;
