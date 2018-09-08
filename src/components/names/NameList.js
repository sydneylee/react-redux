import React, {Component} from 'react';
import PropTypes from 'prop-types';


class NameList extends Component {
    static defaultProps = {
        names :['aaa','bbb','ccc']
    };

    static propTypes = {};

    renderList=()=>{
       const names = this.props.names;
       return names.map((name, i)=>{
           return (<li key={i} >{name}</li>);
       })

    };

    state = {};

    render() {
        //const {names} = this.props;
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default NameList;
