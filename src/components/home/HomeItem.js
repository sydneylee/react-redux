/**
 * Presentational Component to view an item
 * name        : HomeItem
 * description : HomeItem view item
 * author      : lsj
 * created     : 15/9/18
 */

import React, {Component} from 'react';

//import imgSrc from '../assets/img/loading.gif';

class homeItem extends Component {

    static defaultProps = {};

    static propTypes = {};

    state = {};

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
        return (
            <div>
                <h2>{this.props.item.title}</h2>
                <div>{this.props.item.content}</div>
            </div>
        );
    }
}

export default homeItem;