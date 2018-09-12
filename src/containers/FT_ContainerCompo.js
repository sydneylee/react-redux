/**
 * ContainerComponent
 * name        : ${NAME}
 * description : ${description}
 * author      : lsj
 * created     : ${DATE}
 */

import React from 'react';
import {connect} from 'react-redux';
import * as ${store_modules_modulename}Exports from '../../store/modules/${store_modules_modulename}';
// import NameForm from '../../components/${store_modules_modulename}/NameForm';
// import NameList from '../../components/${store_modules_modulename}/NameList';


class ${NAME} extends React.Component{

    render(){

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
const mapStateToProps=(state)=>{
    // const {${store_modules_modulename}} = state;
    // return {
    //     names:${store_modules_modulename}.names,
    //     fullname: ${store_modules_modulename}.fullname
    // }
    //return ${store_modules_modulename}

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps=(dispatch)=>{
    return {
        // onSubmit:(payload)=>{
        //     dispatch(${store_modules_modulename}Exports.submit(payload));
        // },
        // onChange:(payload)=>{
        //     dispatch(${store_modules_modulename}Exports.change(payload));
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(${NAME});