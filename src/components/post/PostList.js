import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostList extends Component {
    static defaultProps = {};

    static propTypes = {};

    // state = {
    //     posts :[{postId:1, title:'aaaaa'},{postId:2, title:'bbbbb'},{postId:3, title:'ccccc'}]
    // };
    handleGetPost=(postId)=>{
        console.log(postId);
        this.props.getPost(postId)
    };

    handleGetPostByEventTargetId=(e)=>{
        console.log(e.target);
        this.props.getPost(e.target.id)
    };

    //TODO -very important !!! : callback의 경우 실행코드를 넣지 않도록 주의할 것, 인자까지 있는 콜백함수경우는 함수로 싼다.
    //TODO - callback함수에 인자를 넣으면서, 실행은 안되게 하는 방법 1 : {()=>this.handleGetPost(el.postId)}
    //TODO - callback함수에 인자를 넣으면서, 실행은 안되게 하는 방법 2 : 해당 tr안에 있는 td 들에 handleGetPostByEventTargetId 적용
    renderList=()=>{
        // const arr = this.state.posts;
        const arr = this.props.posts;
        return arr.map((el, i)=>{
            return (<tr onClick={()=>this.handleGetPost(el.postId)}><td >{el.postId}</td><td >{el.title}</td></tr>);
            //return (<tr ><td id={el.postId}  onClick={this.handleGetPostByEventTargetId}>{el.postId}</td><td id={el.postId}  onClick={this.handleGetPostByEventTargetId}>{el.title}</td></tr>);

        });
    };

    render() {
        return (
            <table>
                {this.renderList()}
            </table>
        );
    }
}

export default PostList;
