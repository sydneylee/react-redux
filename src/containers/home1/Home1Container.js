/**
 * Container Component
 * name        : Home1Container
 * description : Home1Container for testing FileTemplate
 * author      : lsj
 * created     : 15/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as home1Exports from '../../store/modules/home1';
import imgSrc from '../../assets/img/loading.gif';
import Home1Item      from '../../components/home1/Home1Item';
import Home1Items     from '../../components/home1/Home1Items';
import Home1ItemForm  from '../../components/home1/Home1ItemForm';


class Home1Container extends React.Component {

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
                    {this.props.item && this.props.item.id!=null ? <Home1Item item={this.props.item}/> : <img src={imgSrc} style={sty}/> }
                </div>
                <div>
                    {this.props.items && this.props.items.length!=0 ? <Home1Items {...this.props}/> : <img src={imgSrc} style={sty}/> }
                </div>
                <div>
                    {<Home1ItemForm {...this.props}/>}
                </div>
            </div>
        );

        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //     <div>
        //         <Home1Form
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <Home1List
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
    const {home1} = state;
    return {

        // names:         home1.names,
        // fullname:      home1.fullname,

        itemPending:   home1.itemPending,
        itemError:     home1.itemError,
        item :         home1.item,

        itemsPending:  home1.itemsPending,
        itemsError:    home1.itemsError,
        items :        home1.items,

        submitPending: home1.submitPending,
        submitError:   home1.submitError,

    };

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        onGetItem : (id)=>{
            dispatch(home1Exports.getItem(id))
        },
        onGetItems : ()=>{
            dispatch(home1Exports.getItems())
        },
        onSubmit:(payload)=>{
            dispatch(home1Exports.submit(payload));
        },
        // onChange:(payload)=>{
        //     dispatch(home1Exports.change(payload));
        // },

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home1Container);