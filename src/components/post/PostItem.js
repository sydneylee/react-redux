import React, {Component} from 'react';
import PropTypes from 'prop-types';


class PostItem extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    handleGetPost=()=>{
       this.props.getPost(1);
    };

    render() {
        const {loading, error, title, body} = this.props;
        return (
            <div>
                <h1> {title}</h1>

                <div>{body}</div>
                <button onClick={this.handleGetPost}>get post</button>
            </div>
        );
    }
}

export default PostItem;
