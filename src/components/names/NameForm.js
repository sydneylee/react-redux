import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NameForm extends Component {
    static defaultProps = {
        name : 'default name',
        onChange : ()=>console.warn('TODO : onChange'),
        onSubmit : ()=>console.warn('TODO : onSubmit'),
    };

    static propTypes = {};

    //state = {};

    handleOnChange=(e)=>{
        console.log(e.target.value);
      this.props.onChange(e.target.value);
    };

    //TODO
    nameRef=null;
    handleOnSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.nameRef.value);
    };



    render() {
        const {name} = this.props;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text"
                       value={name}
                       onChange={this.handleOnChange}
                       ref={(ref)=>{this.nameRef=ref}}
                />
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default NameForm;
