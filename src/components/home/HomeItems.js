import React, {Component} from 'react';
import PropTypes from 'prop-types';


class HomeItems extends Component {

    static propTypes = {};

    handleOnClick=(i)=>{
        //console.log('key=', e.target.key);
       this.props.getItem(i);
    };

    // lsj-TIP : null checking required - this.props.items || [];
    renderList = () => {
        //console.log(this.props);
        //const {items} = this.props;
        const items = this.props.items || [];
        return items.map((item, i)=>{
            return (<li key={i} onClick={()=>this.handleOnClick(i)}>{item.title + '  ' + item.content}</li>);
        })
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
