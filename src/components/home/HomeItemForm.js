/**
 * Presentational Component to create/update item with form
 * name        : HomeItemForm
 * description : HomeItemForm
 * author      : lsj
 * created     : 15/9/18
 */

import React, {Component} from 'react';
import * as validator from 'validator';

class HomeItemForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        id: '',
        title: '',
        content: '',
        touched: {},
        disabled: true,
        pending: false,
        errors: {},
    };

    validationRules = {
        title: {min: 3, max: 10},
        content: {min: 2, max: 30},
    };

    // validator library :
    validate = (targetName, targetValue) => {
        const error = {targetName: ''};
        if (targetName === 'title') {
            const min = this.validationRules.title.min;
            const max = this.validationRules.title.max;
            if (validator.isEmpty(targetValue)) {
                error[targetName] = 'should not empty'
            }
            else if (!validator.isLength(targetValue, {min: min, max: max})) {
                error[targetName] = 'should be ' + min + '~ ' + max;
            }
        }
        else if (targetName === 'content') {
            const min = this.validationRules.content.min;
            const max = this.validationRules.content.max;
            if (validator.isEmpty(targetValue)) {
                error[targetName] = 'should not empty'
            }
            else if (!validator.isLength(targetValue, {min: min, max: max})) {
                error[targetName] = 'should be ' + min + '~ ' + max;
            }
        }
        return error;
    };

    getNewState = (targetName, targetValue, change, error, state, fieldNum) => {

        const newState = {
            ...state,
            ...change
        };

        newState.touched[targetName] = true;

        if (error[targetName]) {
            newState.errors[targetName] = newState.touched[targetName] && error[targetName]
        } else {
            delete newState.errors[targetName];
        }
        newState.disabled = Object.keys(newState.errors).length > 0 || Object.keys(newState.touched).length < fieldNum;

        return newState;
    };

    handleOnBlur = async (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        const change = {
            [targetName]: targetValue
        };
        const error = this.validate(targetName, targetValue);
        const newState = this.getNewState(targetName, targetValue, change, error, this.state, 2);
        //async validation
        // if(targetName === 'title' && !newState.errors['title']){
        //     newState.loading = true;
        //     const result = await this.isDuplicate(targetValue);
        //     if (result) newState.errors[targetName] = newState.touched[targetName] && 'is duplicate.';
        //     newState.loading = false;
        //     this.setState(newState);
        //
        // } else if(targetName === 'content' && !newState.errors['content']){
        //     newState.loading = true;
        //     const result = await this.isDuplicate2(targetValue);
        //     if (result) newState.errors[targetName] = newState.touched[targetName] && 'is duplicate.';
        //     newState.loading = false;
        //     this.setState(newState);
        // }
        this.setState(newState);
    };
    handleOnChange = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        const change = {
            [targetName]: targetValue
        };
        const error = this.validate(targetName, targetValue);
        const newState = this.getNewState(targetName, targetValue, change, error, this.state, 2);

        this.setState(newState);
    };

    // lsj-TIP : onSubmit에서 e를 이용해서 form전체의 값을 받기
    nameRef = null;
    handleOnSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);

        let payload = {};
        for (var pair of data.entries()) {
            payload[pair[0]] = pair[1];
        }
        this.props.onSubmit(payload);

        //reset form
        this.setState({id:'', title: '', content: ''});


        this.props.onSetMode('view');
    };

    render() {
        const styError = {fontSize: '10px', color: 'red'};

        // const {id, title, content, pending, errors, disabled} = this.state;
        // return (
        //     <form onSubmit={this.handleOnSubmit}>
        //         <div>
        //         <span>
        //             <input type="text"
        //                    name='title'
        //                    value={title}
        //                    onChange={this.handleOnChange}
        //                    onBlur={this.handleOnBlur}
        //                    placeholder='title'
        //                    disabled={pending}
        //             />
        //             <div style={styError}>{errors.title}</div>
        //         </span>
        //             <span>
        //             <input type="text"
        //                    name='content'
        //                    value={content}
        //                    onChange={this.handleOnChange}
        //                    onBlur={this.handleOnBlur}
        //                    placeholder='content'
        //             />
        //             <div style={styError}>{errors.content}</div>
        //         </span>
        //         </div>
        //         <div>
        //             <button type="submit" disabled={disabled || pending}>submit</button>
        //         </div>
        //     </form>
        // );

        // Tip : Use defaultValue instead of value : Warning: A component is changing a controlled input of type hidden to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components
        const {id, title, content, pending, errors, disabled} = this.state;
        return (
            <form onSubmit={this.handleOnSubmit}>
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
