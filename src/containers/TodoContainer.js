import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connent} from 'react-redux';
import Counter from '../components/Counter';
import * as counterActionCreators from '../store/modules/counter';

class CounterContainer extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        const {number, onIncrement, onDecrement} = this.props;
        return (
            <Counter
                number = {number}
                onIncrement = {onIncrement}
            />
        );
    }
}

const mapStateToProps= (state)=>{
    return {number : state.number};
};
// Next TODO : define actioType and actionCreators for increment() used here in store/module
const mapActionDispatchersToProps= (dispatch)=>{
    return {
        onIncrement : ()=>{dispatch(counterActionCreators.increment())},

    };
};
export default connent(mapStateToProps, mapActionDispatchersToProps)(CounterContainer);




