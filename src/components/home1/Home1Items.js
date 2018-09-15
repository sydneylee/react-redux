/**
 * Presentational Component to view items(item list) with renderList()
 * name        : HomeItems
 * description : HomeItems to view all items
 * author      : lsj
 * created     : 15/9/18
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Home1Items extends Component {

    static propTypes = {};

    // lsj-TIP : null checking required - this.props.items || [];
    renderList = () => {
        // console.log(this.props);
        const items = this.props.items || [];
        return items.map((item, i) => {
            return (<li key={i}>{item.title + '  ' + item.content}</li>);
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

export default Home1Items;
