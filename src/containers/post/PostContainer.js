import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as postExports from '../../store/modules/post';
import PostItem from '../../components/post/PostItem';
import PostList from '../../components/post/PostList';
import PostLink from '../../components/post/PostLink';
class PostContainer extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        //TODO : Route 의 param( /:postId) 을 받아서 처리(이용하는 방법)
        //TODO : check if param(postId) is not null
        const {postId} = this.props.match? this.props.match.params: {postId : 1};
        return (
            <div >
                <PostItem {...this.props} postId={postId} />
                <PostList {...this.props} />
                <PostLink {...this.props} />

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
