// *** CounterContainer not connected with Redux : for Enzyme DOM event testing

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
// class Counter extends Component {
//     static defaultProps = {
//         number : -1
//     };
//
//     static propTypes = {};
//
//     state = {
//         number:0
//     };
//
//     handleOnIncrement= ()=>{
//         this.setState({
//             number: this.state.number +1,
//         });
//
//     };
//     handleOnDecrement= ()=>{
//         this.setState({
//             number: this.state.number -1,
//         });
//     };
//     render() {
//         //const {number, onIncrement, onDecrement} = this.props;
//         // return (
//         //     <div>
//         //         <h1>{number}</h1>
//         //         <button onClick={onIncrement}>증가 (+)</button>
//         //         <button onClick={onDecrement}>감소 (-)</button>
//         //     </div>
//         // );
//
//
//         const {number} = this.state;
//
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button id="incBtn" onClick={this.handleOnIncrement}>증가 (+)</button>
//                 <button id="decBtn" onClick={this.handleOnDecrement}>감소 (-)</button>
//             </div>
//         );
//     }
// }
//
// export default Counter;



import React, {Component} from 'react';
import PropTypes from 'prop-types';
import imgSrc from '../assets/img/loading.gif';

class Counter extends Component {
    static defaultProps = {
        number : -1
    };

    static propTypes = {};

    state = {
        number:0
    };

    handleOnIncrement= ()=>{
        this.props.onIncrement();
    };
    handleOnDecrement= ()=>{
        this.props.onDecrement();
    };
    render() {
        //TODO - async status를 받아서 status별로 적절히 사용
        //TODO : for style should be insert as obj : {width: '50px', height:'50px'}
        //TODO ;  <img src={imgSrc} should be imported and used
        const {number, loading, error} = this.props;
        return (
            <div>
                {/*<h1>{number}</h1>*/}
                <h1>{loading? <img src={imgSrc} style={{width: '50px', height:'50px'}} /> : number}</h1>
                <button id="incBtn" onClick={this.handleOnIncrement}>증가 (+)</button>
                <button id="decBtn" onClick={this.handleOnDecrement}>감소 (-)</button>
                {error && <div>error occurrs</div>}
            </div>
        );


        // const {number} = this.state;
        //
        // return (
        //     <div>
        //         <h1>{number}</h1>
        //         <button id="incBtn" onClick={this.handleOnIncrement}>증가 (+)</button>
        //         <button id="decBtn" onClick={this.handleOnDecrement}>감소 (-)</button>
        //     </div>
        // );
    }
}

export default Counter;