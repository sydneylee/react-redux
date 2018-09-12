import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import validator from '../../utils/validator';
import * as yup from 'yup';

class NameForm extends Component {
    // static defaultProps = {
    //     name : 'default name',
    //     onChange : ()=>console.warn('TODO : onChange'),
    //     onSubmit : ()=>console.warn('TODO : onSubmit'),
    // };

    static propTypes = {};

    state = {
        fullname: {
            firstname:'',
            lastname:''
        },
        error: false,
        errorMsg:'error'
    };
    schema = yup.object().shape({
        fullname: yup.object().shape({
            firstname: yup.string().required(),
            lastname: yup.string().required()
        }),
        error: yup.boolean(),
        errorMsg: yup.string()
    });

    // schema = yup.object().shape({
    //     name: yup.string().required(),
    //     age: yup
    //       .number()
    //       .required()
    //       .positive()
    //       .integer(),
    //     email: yup.string().email(),
    //     website: yup.string().url(),
    //     createdOn: yup.date().default(function() {
    //       return new Date();
    //     }),
    //   });
      

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
    handleOnBlur=(e)=>{
        console.log((e.target.name))

        this.setState({
            pristine: {
                ...this.state.pristine,
                [e.target.name]: true
            }
        })
    }
    handleOnChange=(e)=>{
        
        let payload = {};
        payload[e.target.name]=e.target.value;
        // this.props.onChange(payload);
        const newState = {
            ...this.state,
            fullname:{
                ...this.state.fullname,
                payload
            },
            error:false,
            errorMsg:'error'
        }
        this.schema
            .validate(newState)
            .then(function(value){
                console.log(value);
            })
            .catch(function(err) {
                // console.log(err.errors); // => true
                console.log(err);
                //console.log(err.params.path)
            });

        this.setState(newState)




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
                       onBlur={this.handleOnBlur}
                        placeholder='first name'
                />
                <input type="text"
                       name='lastname'
                       value={fullname.lastname}
                       onChange={this.handleOnChange}
                       onBlur={this.handleOnBlur}
                       placeholder='last name'

                />
                <button type="submit">submit</button>
                <div style={{fontSize: '10px'}}>{this.state.error && this.state.errorMsg}</div>
            </form>
        );
    }
}

export default NameForm;
