import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PostLink extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        const {match} = this.props;

        return (
            <div>
                {/*<Link to={`${match.url}/3`}>counter</Link>*/}
                {/*<Link to={`${match.url}/2`}>names</Link>*/}

            </div>
        );
    }
}

export default PostLink;
