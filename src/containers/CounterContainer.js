import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import * as counterActionCreators from '../store/modules/counter';

// class CounterContainer extends Component {
//     static defaultProps = {};
//
//     static propTypes = {};
//
//     state = {};
//
//     render() {
//         const {number, onIncrement, onDecrement} = this.props;
//         return (
//             <Counter
//                 number = {number}
//                 onIncrement = {onIncrement}
//                 onDecrement = {onDecrement}
//             />
//         );
//     }
// }

class CounterContainer extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        //TODO : 좀 더 간단히 모든 props를 그대로 동일 이름으로 넘기는 것
        //const {number, onIncrement, onDecrement} = this.props;
        return (
            <Counter {...this.props}/>
        );
    }
}

//TODO : destructuring/ async status -loading and error
const mapStateToProps= (state)=>{
    const {counter} = state;
    return {number : counter.number, loading: counter.loading, error: counter.error};
    // const {number, loading, error} = counter;
};
// Next TODO : define actioType and actionCreators for increment() used here in store/module
const mapActionDispatchersToProps= (dispatch)=>{
    return {
        onIncrement : ()=>{dispatch(counterActionCreators.incrementSync())},
        onDecrement : ()=>{dispatch(counterActionCreators.decrementSync())},
    };
};
export default connect(mapStateToProps, mapActionDispatchersToProps)(CounterContainer);
//
// TODO : enzyme test에서 DOM event test에서는 connect 하지 말것
/*
Invariant Violation: Could not find "store" in either the context or props of "Connect(CounterContainer)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(CounterContainer)".

 */
//export default CounterContainer;
