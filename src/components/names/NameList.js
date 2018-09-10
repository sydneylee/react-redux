import React, {Component} from 'react';
import PropTypes from 'prop-types';


class NameList extends Component {
    // static defaultProps = {
    //     names :['aaa','bbb','ccc']
    // };

    static propTypes = {};

    renderList=()=>{
       const names = this.props.names;
       return names.map((fullname, i)=>{
           return (<li key={i} >{fullname.firstname + '  ' + fullname.lastname}</li>);
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
