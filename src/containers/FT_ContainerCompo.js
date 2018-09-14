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
//import ${module_name_in_upper}Form  from '../../components/${module_name_in_lower}/${module_name_in_upper}Form';
//import ${module_name_in_upper}List  from '../../components/${module_name_in_lower}/${module_name_in_upper}List';
//import ${module_name_in_upper}Items from '../../components/${module_name_in_lower}/${module_name_in_upper}Items';



class ${NAME} extends React.Component{

    // lsj-TIP : dispatch action(async) to redux store
    // componentDidMount(){
    //     this.props.getItems();
    // }


    render(){

        return(<div></div>);

        // lsj-TIP :For async : null checking and loading image
        // return (
        //     <div>
        //         {this.props.items && this.props.items.length!=0 ? <${module_name_in_upper}Items {...this.props}/> : <img src={imgSrc} style={{width:'32px',height:'32px'}}/> }
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
        loading:   ${module_name_in_lower}.loading,
        error:    ${module_name_in_lower}.error,
       //  names:     ${module_name_in_lower}.names,
       //  fullname:  ${module_name_in_lower}.fullname
       //  items :    ${module_name_in_lower}.items
    };

    //return ${module_name_in_lower}

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps=(dispatch)=>{
    return {
        // onSubmit:(payload)=>{
        //     dispatch(${module_name_in_lower}Exports.submit(payload));
        // },
        // onChange:(payload)=>{
        //     dispatch(${module_name_in_lower}Exports.change(payload));
        // },
        // getPost : (${module_name_in_lower}Id)=>{
        //     dispatch(${module_name_in_lower}Exports.getPost(${module_name_in_lower}Id))
        // },
        // getItems : ()=>{
        //     dispatch(${module_name_in_lower}Exports.getItems())
        // },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(${NAME});