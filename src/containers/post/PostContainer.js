import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as postExports from '../../store/modules/post';
import PostItem from '../../components/post/PostItem';
import PostList from '../../components/post/PostList';

class PostContainer extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div >
                <PostItem {...this.props} />
                <PostList {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    const {post} = state;
    return {
        posts: post.posts,
        loading: post.loading,
        error : post.error,
        title : post.title,
        body: post.body
    };
};

const mapDispatchToProps = (dispatch) =>{
  return {
      getPost : (postId)=>{dispatch(postExports.getPost(postId))}

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(PostContainer);
