/**
 * ContainerComponent
 * name        : HomeContainer
 * description : HomeContainer compo - getItems in async
 * author      : lsj
 * created     : 14/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as homeExports from '../../store/modules/homeOrg';
import imgSrc from '../../assets/img/loading.gif';
//import HomeForm  from '../../components/home/HomeForm';
//import HomeList  from '../../components/home/HomeList';
import HomeItems from '../../components/home/HomeItemsOrg';


class HomeContainer extends React.Component {

    // lsj-TIP : dispatch action(async) to redux store
    componentDidMount(){
        this.props.getItems();
    }


    render() {

        //return (<div></div>);
        const sty = {width:'32px',height:'32px'};

        // lsj-TIP :For async : null checking and loading image
        return (
            <div>
            {/*<div>*/}
                {/*{this.props.item && this.props.item.id!=null ? <HomeItem item={this.props.item}/> : <img src={imgSrc} style={sty}/> }*/}
            {/*</div>*/}
            <div>
                {this.props.items && this.props.items.length!=0 ? <HomeItems items={this.props.items}/> : <img src={imgSrc} style={sty}/> }
            </div>
            </div>
        );


        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //     <div>
        //         <HomeForm
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <HomeList
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
        error: home.error,
        //  names:     home.names,
        //  fullname:  home.fullname
        items :    home.items,
        item:      home.item,
    };

    //return home

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        // onSubmit:(payload)=>{
        //     dispatch(homeExports.submit(payload));
        // },
        // onChange:(payload)=>{
        //     dispatch(homeExports.change(payload));
        // },
        // getPost : (homeId)=>{
        //     dispatch(homeExports.getPost(homeId))
        // },
        getItems : ()=>{
            dispatch(homeExports.getItems())
        },
        getItem :  (id)=>{
            dispatch(homeExports.getItem(id))
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);