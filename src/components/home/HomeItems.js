/**
 * Presentational Component to view items(item list) with renderList()
 * name        : HomeItems
 * description : HomeItems to view item list
 * author      : lsj
 * created     : 16/9/18
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';


class HomeItems extends Component {

    static propTypes = {};

    // Tip : e는 기본으로 제공됨 by onClick={(e)=>{this.handleOnClick(id)}}
    handleOnClick = (e, id) => {
        //console.log('key=', e.target.key);
        this.props.onGetItem(id);
    };

    handleOnViewItem = (e, id) => {
        //this.props.onViewItem(id);
        e.stopPropagation();
        this.props.onGetItem(id);
    };

    // Tip : getItem(i)에 의해서 인자로 주어진 id에 해당하는 item이 this.props.state.item에 load된다.(home module에 처리코드 있슴)
    handleOnEditItem = (e, id) => {
        e.stopPropagation();
        this.props.onGetItem(id);
        this.props.onSetMode('edit');
    };

    handleOnRemoveItem = (e, id) => {
        e.stopPropagation();
        this.props.onRemoveItem(id);
    };



    // Tip : null checking required - this.props.items || [];
    // Tip : <button id={"viewItemBtn"+item.id} is for unit test
    renderList = () => {
        // console.log(this.props);
        const items = this.props.items || [];

        return items.map((item, i) => {
            return (
                <li key={i} onClick={(e) => this.handleOnClick(e, item.id)}>
                    {item.title + '  ' + item.content}
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        <button id={"viewItemBtn" + item.id}
                                onClick={(e) => this.handleOnViewItem(e, item.id)}>view</button>
                        &nbsp;
                        <button id={"editItemBtn" + item.id}
                                onClick={(e) => this.handleOnEditItem(e, item.id)}>edit</button>
                        &nbsp;
                        <button id={"removeItemBtn" + item.id}
                                onClick={(e) => this.handleOnRemoveItem(e, item.id)}>delete</button>
                    </span>
                </li>);
        });
    };

    state = {};

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default HomeItems;

