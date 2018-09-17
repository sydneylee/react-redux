/**
 * Container Component
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React from 'react';
import {connect} from 'react-redux';
import * as ${module_name_lower}Exports   from '../../store/modules/${module_name_lower}';
import imgSrc                             from '../../assets/img/loading.gif';
// import ${module_name_capital}Item         from '../../components/${module_name_lower}/${module_name_capital}Item';
// import ${module_name_capital}Items        from '../../components/${module_name_lower}/${module_name_capital}Items';
// import ${module_name_capital}ItemForm     from '../../components/${module_name_lower}/${module_name_capital}ItemForm';


class ${NAME} extends React.Component {

    //-------------------------------------------------------------------------------------
    // Tip : dispatch action(async) to redux store
    //-------------------------------------------------------------------------------------
    // componentDidMount(){
    //     this.props.onGetItem(1);
    //     this.props.onGetItems();
    // }

    //-------------------------------------------------------------------------------------
    // Tip : dispatch action(async) to redux store : dprp,
    //-------------------------------------------------------------------------------------
    render() {

        const styLoadingImg = {width: '32px', height: '32px'};

        return (<div></div>);

        // // Tip :For async : null checking and loading image
        // return (
        //     <div>
        //         <div  style={{display:this.props.mode=='view'? 'block':'none'}}>
        //             <div>
        //                 {this.props.item && this.props.item.id!=null ? <${module_name_capital}Item item={this.props.item}/> : <img src={imgSrc} style={styLoadingImg}/> }
        //             </div>
        //             <div>
        //                 {this.props.items && this.props.items.length!=0 ? <${module_name_capital}Items {...this.props}/> : <img src={imgSrc} style={styLoadingImg}/> }
        //             </div>
        //             <button onClick={this.props.onAddItem}>add</button>
        //         </div>
        //         {/*<div>*/}
        //         {/*{<${module_name_capital}ItemForm {...this.props}/>}*/}
        //         {/*</div>*/}
        //         <div style={{display:this.props.mode=='edit'? 'block':'none'}}>
        //             {<${module_name_capital}ItemForm {...this.props}/>}
        //         </div>
        //     </div>
        // );

        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //     <div>
        //         <${module_name_capital}Form
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <${module_name_capital}List
        //             names={names}
        //         />
        //     </div>
        //
        // );

    }

}

//-------------------------------------------------------------------------------------
// Tip : destructure state into a specific variable(=module name)
//           which was combined by combineReducers() in index.js
//-------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    const {${module_name_lower}} = state;
    return {

        // mode :         ${module_name_lower}.mode,

        // item :         ${module_name_lower}.item,
        // itemPending:   ${module_name_lower}.itemPending,
        // itemError:     ${module_name_lower}.itemError,

        // items :        ${module_name_lower}.items,
        // itemsPending:  ${module_name_lower}.itemsPending,
        // itemsError:    ${module_name_lower}.itemsError,
        
        // submitPending: ${module_name_lower}.submitPending,
        // submitError:   ${module_name_lower}.submitError,

    };

};

//-------------------------------------------------------------------------------------
// Tip : pls check if any param is required
//-------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        // onGetItem : (id)=>{
        //     dispatch(${module_name_lower}Exports.getItem(id))
        // },
        // onGetItems : ()=>{
        //     dispatch(${module_name_lower}Exports.getItems())
        // },
        // onSubmit:(payload)=>{
        //     dispatch(${module_name_lower}Exports.submit(payload));
        // },
        // onSetMode:(mode)=>{
        //     dispatch(${module_name_lower}Exports.setMode(mode));
        // },
        // onAddItem : ()=>{
        //     dispatch(${module_name_lower}Exports.addItem());
        // },
        // onChange:(payload)=>{
        //     dispatch(${module_name_lower}Exports.change(payload));
        // },

    }
};

//-------------------------------------------------------------------------------------
// Tip : export default the container component after connecting to redux/store
//-------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(${NAME});


