/**
 * Container Component
 * name        : HomeContainer
 * description : HomeContainer compo
 * author      : lsj
 * created     : 16/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as homeExports from '../../store/modules/home';
import imgSrc from '../../assets/img/loading.gif';
import HomeItem         from '../../components/home/HomeItem';
import HomeItems        from '../../components/home/HomeItems';
import HomeItemForm     from '../../components/home/HomeItemForm';


class HomeContainer extends React.Component {

    //-------------------------------------------------------------------------------------
    // TIP : handle functions for the props.on... functions need any params passed
    //-------------------------------------------------------------------------------------
    handleOnSetAddItemMode = (e) => {
        e.stopPropagation();
        this.props.onSetAddItemMode('edit');
    };

    //-------------------------------------------------------------------------------------
    // TIP : dispatch action(async) to redux store
    //-------------------------------------------------------------------------------------
    componentDidMount(){
        this.props.onGetItem(1);
        this.props.onGetItems();
    }

    //-------------------------------------------------------------------------------------
    // TIP : dispatch action(async) to redux store : dprp,
    //-------------------------------------------------------------------------------------
    render() {

        const styLoadingImg = {width: '32px', height: '32px'};

        // return (<div></div>);

        // TIP :For async : null checking and loading image
        return (
            <div>
                <div  style={{display:this.props.mode=='view'? 'block':'none'}}>
                    <div>
                        {this.props.item && this.props.item.id!=null ? <HomeItem item={this.props.item}/> : this.props.getItemPending ? <img src={imgSrc} style={styLoadingImg}/> : '' }
                    </div>
                    <div>
                        {this.props.items && this.props.items.length!=0 ? <HomeItems {...this.props}/> : this.props.itemsPending ? <img src={imgSrc} style={styLoadingImg}/> : '' }
                    </div>
                    <button onClick={this.handleOnSetAddItemMode}>add</button>
                </div>
                {/*<div>*/}
                {/*{<HomeItemForm {...this.props}/>}*/}
                {/*</div>*/}
                <div style={{display:this.props.mode=='edit'? 'block':'none'}}>
                    {<HomeItemForm {...this.props}/>}
                </div>
            </div>
        );

    }

}

//-------------------------------------------------------------------------------------
// TIP : destructure state into a specific variable(=module name)
//           which was combined by combineReducers() in index.js
//-------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    const {home} = state;
    return {

        mode             : home.mode,

        getItemPending   : home.getItemPending,
        getItemError     : home.getItemError,
        item             : home.item,

        getItemsPending  : home.getItemsPending,
        getItemsError    : home.getItemsError,
        items            : home.items,

        removeItemPending: home.removeItemPending,
        removeItemError  : home.removeItemError,

        saveItemPending  : home.saveItemPending,
        saveItemError    : home.saveItemError,

    };

};


//-------------------------------------------------------------------------------------
// TIP : pls check if any param is required
//-------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        onSetMode : (mode)=>{
            dispatch(homeExports.setMode(mode))
        },
        onGetItem : (id)=>{
            dispatch(homeExports.getItem(id))
        },
        onGetItems : ()=>{
            dispatch(homeExports.getItems())
        },
        onSetAddItemMode : (mode)=>{
            dispatch(homeExports.setAddItemMode(mode))
        },
        onRemoveItem : (id)=>{
            dispatch(homeExports.removeItem(id))
        },
        onSaveItem : (id)=>{
            dispatch(homeExports.saveItem(id))
        },
    }
};

//-------------------------------------------------------------------------------------
// TIP : export default the container component after connecting to redux/store
//-------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


