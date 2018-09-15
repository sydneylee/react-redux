/**
 * Presentational Component to view items(item list) with renderList()
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ${module_name_in_upper}Items extends Component {

    static propTypes = {};

    // lsj-TIP : null checking required - this.props.items || [];
    renderList=()=>{
        // console.log(this.props);
        const items = this.props.items || [];
        return items.map((item, i)=>{
            return (<li key={i} >{item.title + '  ' + item.content}</li>);
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

export default ${module_name_in_upper}Items;
