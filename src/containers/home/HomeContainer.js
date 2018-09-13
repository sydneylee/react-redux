/**
 * ContainerComponent
 * name        : HomeContainer
 * description : HomeContainer with post using NodeJS server
 * author      : lsj
 * created     : 13/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as homeExports from '../../store/modules/home';
//import * as postExports from "../../store/modules/post";
// import NameForm from '../../components/home/NameForm';
// import NameList from '../../components/home/NameList';
import Home from '../../components/home/Home';


class HomeContainer extends React.Component {

    //TODO : temp for testing for app-server connection
    state = {
        response : ''
    };

    //TODO :
    componentDidMount(){
        this.callApi()
            .then(res=>this.setState({response:res.express}))
            .catch(err => console.log(err));
    }

    callApi = async ()=>{
        const response = await fetch('/api/hello');
        console.log(response);
        const body = await response.json();
        if(response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        //const {} = this.props;
        //const {postId} = this.props.match? this.props.match.params: {postId : 1};
        return (
            <div >
                <Home {...this.state} />
                {/*<PostItem {...this.props} postId={postId} />*/}
                {/*<PostList {...this.props} />*/}
                {/*<PostLink {...this.props} />*/}

            </div>
        );


        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //
        //     <div>
        //         <NameForm
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <NameList
        //             names={names}
        //         />
        //     </div>
        //
        // );

    }

}

// lsj-TIP : destructure state into a specific variable(module name)
// which was combined by combineReducers() in index.js
const mapStateToProps = (state) => {
    const {post} = state;
    return {
        posts: post.posts,
        loading: post.loading,
        error : post.error,
        title : post.title,
        body: post.body
    };

    // const {home} = state;
    // return {
    //     names:home.names,
    //     fullname: home.fullname
    // }
    //return home

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        //getPost : (postId)=>{dispatch(postExports.getPost(postId))}

    }

    // return {
    //     // onSubmit:(payload)=>{
    //     //     dispatch(homeExports.submit(payload));
    //     // },
    //     // onChange:(payload)=>{
    //     //     dispatch(homeExports.change(payload));
    //     // }
    //
    // }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);