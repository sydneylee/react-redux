/**
 * Presentational Component to view an item
 * name        : HomeItem
 * description : HomeItem to view item
 * author      : lsj
 * created     : 16/9/18
 */

import React, {Component} from 'react';

//import imgSrc from '../assets/img/loading.gif';

class HomeItem extends Component {

    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {

        // Tip : for asynchronous actionstatus, render properly according to the status(loading, success, error)
        // Tip : for loading image <img src={imgSrc}, imgSrc should be imported and used like a variable
        // Tip : style should be insert as obj : {width: '50px', height:'50px'}
        // Tip : dprp

        // const {number, loading, error} = this.props;
        return (
            <div>
                <h2>{this.props.item.title}</h2>
                <div>{this.props.item.content}</div>
            </div>
        );
    }
}

export default HomeItem;