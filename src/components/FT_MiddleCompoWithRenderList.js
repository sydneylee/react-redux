import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ${NAME} extends Component {

    static propTypes = {};

    renderList=()=>{
        // const names = this.props.names;
        // return names.map((fullname, i)=>{
        //     return (<li key={i} >{fullname.firstname + '  ' + fullname.lastname}</li>);
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
