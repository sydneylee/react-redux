/**
 * Container Component
 * name        : HomeContainer
 * description : HomeContainer
 * author      : lsj
 * created     : 15/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as homeExports from '../../store/modules/home';
import imgSrc from '../../assets/img/loading.gif';
import HomeItem      from '../../components/home/HomeItem';
import HomeItems     from '../../components/home/HomeItems';
import HomeItemForm  from '../../components/home/HomeItemForm';


class HomeContainer extends React.Component {

    // lsj-TIP : dispatch action(async) to redux store
    componentDidMount(){
        this.props.onGetItem(1);
        this.props.onGetItems();
    }


    render() {

        const sty = {width: '32px', height: '32px'};
        //return (<div></div>);

        // lsj-TIP :For async : null checking and loading image
        return (
            <div>
                <div>
                    {this.props.item && this.props.item.id!=null ? <HomeItem item={this.props.item}/> : <img src={imgSrc} style={sty}/> }
                </div>
                <div>
                    {this.props.items && this.props.items.length!=0 ? <HomeItems {...this.props}/> : <img src={imgSrc} style={sty}/> }
                </div>
                <div>
                    {<HomeItemForm {...this.props}/>}
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

        // names:         home.names,
        // fullname:      home.fullname,

        itemPending:   home.itemPending,
        itemError:     home.itemError,
        item :         home.item,

        itemsPending:  home.itemsPending,
        itemsError:    home.itemsError,
        items :        home.items,

        submitPending: home.submitPending,
        submitError:   home.submitError,

    };

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        onGetItem : (id)=>{
            dispatch(homeExports.getItem(id))
        },
        onGetItems : ()=>{
            dispatch(homeExports.getItems())
        },
        onSubmit:(payload)=>{
            dispatch(homeExports.submit(payload));
        },
        // onChange:(payload)=>{
        //     dispatch(homeExports.change(payload));
        // },

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);