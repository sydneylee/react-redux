import React, {Component} from 'react';
import PropTypes from 'prop-types';


class HomeItemsOrg extends Component {

    static propTypes = {};

    //TODO : render시에는 data 가 없을 경우도 처리하는 코드를 넣어야 에러가 나서 시스템이 중지되지 않게 된다.(async or synd 모두.. ) homeContainer에서 null checking 해도 된다.-

    renderList = () => {
        console.log(this.props);
        const items = this.props.items || [];
        return items.map((item, i)=>{
            return (<li key={i} >{item.title + '  ' + item.content}</li>);
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

export default HomeItemsOrg;
