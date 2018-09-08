import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    static defaultProps = {
        number : -1
    };

    static propTypes = {};

    state = {
        number:0
    };

    handleOnIncrement= ()=>{
        this.setState({
            number: this.state.number +1,
        });

    };
    handleOnDecrement= ()=>{
        this.setState({
            number: this.state.number -1,
        });
    };
    render() {
        //const {number, onIncrement, onDecrement} = this.props;
        // return (
        //     <div>
        //         <h1>{number}</h1>
        //         <button onClick={onIncrement}>증가 (+)</button>
        //         <button onClick={onDecrement}>감소 (-)</button>
        //     </div>
        // );


        const {number} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <button id="incBtn" onClick={this.handleOnIncrement}>증가 (+)</button>
                <button id="decBtn" onClick={this.handleOnDecrement}>감소 (-)</button>
            </div>
        );
    }
}

export default Counter;
