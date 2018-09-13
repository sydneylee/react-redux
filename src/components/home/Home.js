import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import imgSrc from '../assets/img/loading.gif';

class Home extends Component {

    static defaultProps = {
        //number : -1
    };

    static propTypes = {};

    state = {
        //number:0
    };

    // handleOnIncrement= ()=>{
    //     this.props.onIncrement();
    // };
    //
    // handleOnDecrement= ()=>{
    //     this.props.onDecrement();
    // };



    render() {

        // lsj-TIP : for asynchronous actionstatus, render properly according to the status(loading, success, error)
        // lsj-TIP : for loading image <img src={imgSrc}, imgSrc should be imported and used like a variable
        // lsj-TIP : style should be insert as obj : {width: '50px', height:'50px'}

        // const {number, loading, error} = this.props; //dprp
        const {response} = this.props;
        console.log(response);
        return (
            <div>
                {response}
                {/*<h1>{loading? <img src={imgSrc} style={{width: '50px', height:'50px'}} /> : number}</h1>*/}
                {/*<button id="incBtn" onClick={this.handleOnIncrement}>증가 (+)</button>*/}
                {/*<button id="decBtn" onClick={this.handleOnDecrement}>감소 (-)</button>*/}
                {/*{error && <div>error occurrs</div>}*/}


            </div>
        );
    }
}

export default Home;