/**
 * ContainerComponent
 * name        : HomeContainer
 * description : HomeContainer with post using NodeJS server
 * author      : lsj
 * created     : 13/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as homeExports from '../../store/modules/homeOrg';
//import * as postExports from "../../store/modules/post";
// import NameForm from '../../components/home/NameForm';
// import NameList from '../../components/home/NameList';
import Home from '../../components/home/Home';
import HomeItems from '../../components/home/HomeItemsOrg';
import imgSrc from '../../assets/img/loading.gif';

class HomeContainerOrg extends React.Component {

    //TODO : temp for testing for app-server connection
    state = {
        response : ''
    };


    //TODO : for api/hello - response : {express : ...}
    // componentDidMount(){
    //     this.callApi()
    //         .then(res=>this.setState({response:res}))
    //         .catch(err => console.log(err));
    // }
    //TODO : for api/homeContent - response : [{}, . ..]
    // componentDidMount(){
    //     this.callApi()
    //         .then(res=>this.setState({response:res}))
    //         .catch(err => console.log(err));
    // }
    // callApi = async ()=>{
    //     // const response = await fetch('/api/hello');
    //     const response = await fetch('/api/homeItems');
    //     // console.log('response=', response);
    //     const body = await response.json();
    //     // console.log('body=', body);
    //     if(response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    //TODO : dispatch action to redux store
    componentDidMount(){
        this.props.getItems();
    }

    render() {
        //const {} = this.props;
        //const {postId} = this.props.match? this.props.match.params: {postId : 1};
        // data 가 null 이 아닐때만 render 하도록 처리 this.state.response &&
        //const {items} = this.props;
        return (
            <div >
                {/*{this.props.items && <HomeItems items={items}/>}*/}
                {this.props.items ? <HomeItems {...this.props}/> : <img src={imgSrc} style={{width:'32px', height:'32px'}}/> }

                {/*{this.state.response && <HomeItems {...this.state}/>}*/}
                {/*<Home {...this.state} />*/}
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
    const {home} = state;
    return {
        loading: home.loading,
        error : home.error,
        // title : post.title,
        // body: post.body
        items : home.items
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
        getItems : ()=>{dispatch(homeExports.getItems())}
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainerOrg);