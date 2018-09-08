import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
                onDecrement = {onDecrement}
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
        onDecrement : ()=>{dispatch(counterActionCreators.decrement())},
    };
};
export default connect(mapStateToProps, mapActionDispatchersToProps)(CounterContainer);
//
// TODO : enzyme test에서 DOM event test에서는 connect 하지 말것
/*
Invariant Violation: Could not find "store" in either the context or props of "Connect(CounterContainer)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(CounterContainer)".

 */
//export default CounterContainer;
