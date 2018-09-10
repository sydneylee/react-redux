import React, {Component} from 'react';
import PropTypes from 'prop-types';


class PostItem extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    handleGetPost=()=>{
       this.props.getPost(1);
    };

    //TODO : Route의 match.params.postId가 주소창을 통해서 param으로 들어온 경우,
    //페이지가 로드될 때, 자동으로 getPost(param으로 들어온 postId)를 실행시키려면
    //componentDidMount()함수를 이용한다. //이 컴포넌트가 Dom에 mount된 순간 이 함수를 trigger할것
    //이 경우는 컴포넌트가 한번 mount되는 것이므로 한번만 불림.
    componentDidMount() {
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
        if(this.props.postId){
            this.props.getPost(this.props.postId);
        }
    }
    // componentDidUpdate() {
    //     // this.timerID = setInterval(
    //     //     () => this.tick(),
    //     //     1000
    //     // );
    //     if(this.props.postId){
    //         this.props.getPost(this.props.postId);
    //     }
    // }
    render() {
        const {loading, error, title, body, postId} = this.props;
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
