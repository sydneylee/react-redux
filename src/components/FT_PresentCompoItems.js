/**
 * Presentational Component to view items(item list) with renderList()
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ${module_name_capital}Items extends Component {

    static propTypes = {};

    // Tip : e는 이미 제공됨 by onClick={(e)=>{this.handleOnClick(id)}}
    handleOnClick=(id)=>{
        //console.log('key=', e.target.key);
        this.props.onGetItem(id);
    };

    handleOnGetItem=(id)=>{
        //this.props.onViewItem(id);
        this.props.onGetItem(id);
    };

    // Tip : getItem(i)에 의해서 인자로 주어진 id에 해당하는 item이 this.props.state.item에 load된다.(home module에 처리코드 있슴)
    handleOnEditItem=(id)=>{
        this.props.onGetItem(id);
        this.props.onSetMode('edit');
    };

    // Tip : null checking required - this.props.items || [];
    // Tip : <button id={"viewItemBtn"+item.id} is for unit test
    renderList = () => {
        // console.log(this.props);
        const items = this.props.items || [];

        return items.map((item, i) => {
            return (
                <li key={i} onClick={()=>this.handleOnClick(item.id)}>
                    {item.title + '  ' + item.content}
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        <button id={"viewItemBtn"+item.id}  onClick={()=>this.handleOnGetItem(item.id)}>view</button>&nbsp;
                        <button id={"editItemBtn"+item.id}  onClick={()=>this.handleOnEditItem(item.id)}>edit</button>
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

export default ${module_name_capital}Items;

