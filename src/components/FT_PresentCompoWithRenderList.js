/**
 * Presentational Component with rendering list
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ${NAME} extends Component {

    static propTypes = {};

    // lsj-TIP : null checking required - this.props.${list_name}s || [];
    renderList=()=>{
        // console.log(this.props);
        // const ${list_name}s = this.props.${list_name}s || [];
        // return ${list_name}s.map((${list_name}, i)=>{
        //     return (<li key={i} >{${list_name}.title + '  ' + ${list_name}.content}</li>);
        // })
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

export default ${NAME};
