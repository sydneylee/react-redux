import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';

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
            'fullname.firstname': '',
            'fullname.lastname': '',
        }
    };

    schema = yup.object().shape(
        {
            fullname: yup.object().shape({
                firstname: yup.string().required(),
                lastname: yup.string().required()
            }),
            pristine: yup.object().shape({
                firstname: yup.boolean(),
                lastname: yup.boolean()            
            }),
            err: yup.object().shape({
                'fullname.firstname': yup.mixed(),
                'fullname.lastname': yup.mixed()
            })
        }
    );

    handleOnBlur = (e)=>{
      
        const targetName = e.target.name;
        const targetValue = e.target.value;
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
                'fullname.firstname': '',
                'fullname.lastname': '',
            }
        };

        //3) validate the newState
        this.schema.validate(newState)
            .then((value)=>{
            console.log("success");
            this.setState(newState);
        }).catch((err)=>{

            const errState = {
                ...newState,
                err:{
                    ...newState.err,
                    [err.path]: err.errors
                }
            };
            console.error(errState);
            this.setState(errState);
        });

        //4) setState with newState(update) and render
        // this.setState(newState);
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
    handleOnChange=(e)=>{
        //1) get payload
        // let payload = {};
        // payload[e.target.name]=e.target.value;
        //let that = this;
        // console.log('e.target.name=', e.target.name);
        const targetName = e.target.name;
        const targetValue = e.target.value;
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
                'fullname.firstname': '',
                'fullname.lastname': '',
            }                      
        };

        //3) validate the newState
        this.schema.validate(newState)
            .then((value)=>{
            console.log("success");
            this.setState(newState);
        }).catch((err)=>{
            const errState = {
                ...newState,
                err:{
                    ...newState.err,
                    [err.path]: err.errors
                }
            };
            console.error(errState);
            this.setState(errState);
        });

        //4) setState with newState(update) and render
        // this.setState(newState);

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
                <div>
                    <input type="text"
                        name='firstname'
                        value={fullname.firstname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='first name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{!this.state.pristine.firstname && this.state.err['fullname.firstname']}</div>
                </div>
                <div>
                    <input type="text"
                        name='lastname'
                        value={fullname.lastname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='last name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{!this.state.pristine.lastname && this.state.err['fullname.lastname']}</div>
                </div>
                <button type="submit">submit</button>
                
            </form>
        );
    }
}

export default NameYUPForm;
