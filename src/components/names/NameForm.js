// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import validator from '../../utils/validator';

// class NameForm extends Component {
//     // static defaultProps = {
//     //     name : 'default name',
//     //     onChange : ()=>console.warn('TODO : onChange'),
//     //     onSubmit : ()=>console.warn('TODO : onSubmit'),
//     // };

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:''
//         },
//         error: false,
//         errorMsg: null
//     };

//     // handleOnChange=(e)=>{
//     //     console.log(e.target.value);
//     //     let payload = {};
//     //     payload[e.target.name]=e.target.value;
//     //     this.props.onChange(payload);
//     //     // if(e.target.name == 'firstname') {
//     //     //     this.props.onChange(e.target.value);
//     //     // }else{
//     //     //
//     //     // }
//     // };
//     handleOnChange=(e)=>{
        
//         let payload = {};
//         payload[e.target.name]=e.target.value;
//         // this.props.onChange(payload);
//         this.setState({
//             ...this.state,
//             fullname:{
//                 ...this.state.fullname,
//                 ...payload
//             },
//             error:false,
//             errorMsg:null
//         })

//         if(!validator.isString(e.target.value)){
//             this.setState({error:true, errorMsg:'Name should be string'})
//         }
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
//                 <input type="text"
//                        name='firstname'
//                        value={fullname.firstname}
//                        onChange={this.handleOnChange}
//                         placeholder='first name'
//                 />
//                 <input type="text"
//                        name='lastname'
//                        value={fullname.lastname}
//                        onChange={this.handleOnChange}
//                        placeholder='last name'

//                 />
//                 <button type="submit">submit</button>
//                 <div style={{fontSize: '10px'}}>{this.state.error && this.state.errorMsg}</div>
//             </form>
//         );
//     }
// }

// export default NameForm;


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import validator from '../../utils/validator';
import FormValidator from '../../utils/FormValidator';

const formValidator = new FormValidator([
    { 
      field: 'firstname', 
      method: 'isString', 
      validWhen: true, 
      message: 'first name should be string.' 
    },
    { 
      field: 'lastname',
      method: 'isString', 
      validWhen: true, 
      message: 'last name should be string.' 
    }
  ]);

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
        errorMsg: null
    };

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
        
    //     let payload = {};
    //     payload[e.target.name]=e.target.value;
    //     // this.props.onChange(payload);
    //     this.setState({
    //         ...this.state,
    //         fullname:{
    //             ...this.state.fullname,
    //             ...payload
    //         },
    //         error:false,
    //         errorMsg:null
    //     })

    //     // if(!validator.isString(e.target.value)){
    //     //     this.setState({error:true, errorMsg:'Name should be string'})
    //     // }
    //     const validation = formValidator.validate(this.state);
    //     this.setState({ validation });
    // };

    handleInputChange = event => {
        event.preventDefault();
    
        this.setState({
          [event.target.name]: event.target.value,
        });
    }

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
                <span className="help-block">{validation.email.message}</span>
                <input type="text"
                       name='lastname'
                       value={fullname.lastname}
                       onChange={this.handleOnChange}
                       placeholder='last name'

                />
                <span className="help-block">{validation.email.message}</span>
                <button type="submit">submit</button>
                <div style={{fontSize: '10px'}}>{this.state.error && this.state.errorMsg}</div>
            </form>
        );
    }
}

export default NameForm;
