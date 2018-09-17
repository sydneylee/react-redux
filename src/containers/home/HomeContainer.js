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
    // lsj-TIP : dispatch action(async) to redux store
    //-------------------------------------------------------------------------------------
    componentDidMount(){
        this.props.onGetItem(1);
        this.props.onGetItems();
    }

    //-------------------------------------------------------------------------------------
    // lsj-TIP : dispatch action(async) to redux store : dprp,
    //-------------------------------------------------------------------------------------
    render() {

        const styLoadingImg = {width: '32px', height: '32px'};

        // return (<div></div>);

        // lsj-TIP :For async : null checking and loading image
        return (
            <div>
                <div  style={{display:this.props.mode=='view'? 'block':'none'}}>
                    <div>
                        {this.props.item && this.props.item.id!=null ? <HomeItem item={this.props.item}/> : this.props.itemPending ? <img src={imgSrc} style={styLoadingImg}/> : '' }
                    </div>
                    <div>
                        {this.props.items && this.props.items.length!=0 ? <HomeItems {...this.props}/> : this.props.itemsPending ? <img src={imgSrc} style={styLoadingImg}/> : '' }
                    </div>
                    <button onClick={this.props.onAddItem}>add</button>
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
// lsj-TIP : destructure state into a specific variable(=module name)
//           which was combined by combineReducers() in index.js
//-------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    const {home} = state;
    return {

        mode :         home.mode,

        item :         home.item,
        itemPending:   home.itemPending,
        itemError:     home.itemError,

        items :        home.items,
        itemsPending:  home.itemsPending,
        itemsError:    home.itemsError,

        removeItemPending: home.submitPending,
        removeItemError:   home.submitError,

        submitPending: home.submitPending,
        submitError:   home.submitError,

    };

};

//-------------------------------------------------------------------------------------
// lsj-TIP : pls check if any param is required
//-------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        onGetItem : (id)=>{
            dispatch(homeExports.getItem(id))
        },
        onGetItems : ()=>{
            dispatch(homeExports.getItems())
        },
        onRemoveItem : (id)=>{
            dispatch(homeExports.removeItem(id))
        },
        onSubmit:(payload)=>{
            dispatch(homeExports.submit(payload));
        },
        onSetMode:(mode)=>{
            dispatch(homeExports.setMode(mode));
        },
        onAddItem : ()=>{
            dispatch(homeExports.addItem());
        },
        // onChange:(payload)=>{
        //     dispatch(homeExports.change(payload));
        // },

    }
};

//-------------------------------------------------------------------------------------
// lsj-TIP : export default the container component after connecting to redux/store
//-------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


