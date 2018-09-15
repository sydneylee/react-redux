/**
 * Container Component
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React from 'react';
import {connect} from 'react-redux';
import * as ${module_name_in_lower}Exports from '../../store/modules/${module_name_in_lower}';
import imgSrc from '../../assets/img/loading.gif';
//import ${module_name_in_upper}Item      from '../../components/${module_name_in_lower}/${module_name_in_upper}Item';
//import ${module_name_in_upper}Items     from '../../components/${module_name_in_lower}/${module_name_in_upper}Items';
//import ${module_name_in_upper}ItemForm  from '../../components/${module_name_in_lower}/${module_name_in_upper}ItemForm';



class ${NAME} extends React.Component{

    // lsj-TIP : dispatch action(async) to redux store
    // componentDidMount(){
    //     this.props.onGetItem(1);
    //     this.props.onGetItems();
    // }


    render(){

        const sty = {width:'32px',height:'32px'};
        return(<div></div>);

        // lsj-TIP :For async : null checking and loading image
        // return (
        //     <div>
        //         <div>
        //             {this.props.item && this.props.item.id!=null ? <${module_name_in_upper}Item item={this.props.item}/> : <img src={imgSrc} style={sty}/> }
        //         </div>
        //         <div>
        //             {this.props.items && this.props.items.length!=0 ? <${module_name_in_upper}Items {...this.props}/> : <img src={imgSrc} style={sty}/> }
        //         </div>
        //         <div>
        //             {<${module_name_in_upper}ItemForm {...this.props}/>}
        //         </div>
        //     </div>
        // );

        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //     <div>
        //         <${module_name_in_upper}Form
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <${module_name_in_upper}List
        //             names={names}
        //         />
        //     </div>
        //
        // );

    }

}
// lsj-TIP : destructure state into a specific variable(module name)
// which was combined by combineReducers() in index.js
const mapStateToProps=(state)=>{
    const {${module_name_in_lower}} = state;
    return {

        // names:         ${module_name_in_lower}.names,
        // fullname:      ${module_name_in_lower}.fullname,

        // itemPending:   ${module_name_in_lower}.itemPending,
        // itemError:     ${module_name_in_lower}.itemError,
        // item :         ${module_name_in_lower}.item,

        // itemsPending:  ${module_name_in_lower}.itemsPending,
        // itemsError:    ${module_name_in_lower}.itemsError,
        // items :        ${module_name_in_lower}.items,

        // submitPending: ${module_name_in_lower}.submitPending,
        // submitError:   ${module_name_in_lower}.submitError,

    };

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps=(dispatch)=>{
    return {
        // onGetItem : (id)=>{
        //     dispatch(${module_name_in_lower}Exports.getItem(id))
        // },
        // onGetItems : ()=>{
        //     dispatch(${module_name_in_lower}Exports.getItems())
        // },
        // onSubmit:(payload)=>{
        //     dispatch(${module_name_in_lower}Exports.submit(payload));
        // },
        // onChange:(payload)=>{
        //     dispatch(${module_name_in_lower}Exports.change(payload));
        // },

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(${NAME});