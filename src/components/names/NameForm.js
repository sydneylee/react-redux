import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NameForm extends Component {
    // static defaultProps = {
    //     name : 'default name',
    //     onChange : ()=>console.warn('TODO : onChange'),
    //     onSubmit : ()=>console.warn('TODO : onSubmit'),
    // };

    static propTypes = {};

    //state = {};

    handleOnChange=(e)=>{
        console.log(e.target.value);
        let payload = {};
        payload[e.target.name]=e.target.value;
        this.props.onChange(payload);
        // if(e.target.name == 'firstname') {
        //     this.props.onChange(e.target.value);
        // }else{
        //
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
        const {fullname} = this.props;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text"
                       name='firstname'
                       value={fullname.firstname}
                       onChange={this.handleOnChange}

                />
                <input type="text"
                       name='lastname'
                       value={fullname.lastname}
                       onChange={this.handleOnChange}

                />
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default NameForm;
