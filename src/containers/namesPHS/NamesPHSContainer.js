/**
 * ContainerComponent
 * name        : NamesPHSContainer
 * description : NamesContainer using PHS form validator + validator library
 * author      : lsj
 * created     : 13/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as namesPHSExports from '../../store/modules/namesPHS';
import NamePHSForm from '../../components/namesPHS/NamePHSForm';
//import NameList from '../../components/namesPHS/NameList';


class NamesPHSContainer extends React.Component {

    render() {
        // return(
        //     <div>
        //         this is names using React-final-form
        //     </div>
        // );
        const {fullname, names, onSubmit, onChange} = this.props;
        return(
            <div>
                names PHS form validation
                <NamePHSForm
                    fullname={fullname}
                    onSubmit={onSubmit}
                    onChange={onChange}
                />
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
    const {namesPHS} = state;
    return {
        names:namesPHS.names,
        fullname: namesPHS.fullname
    };
    return namesPHS

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit:(payload)=>{
            dispatch(namesPHSExports.submit(payload));
        },
        onChange:(payload)=>{
            dispatch(namesPHSExports.change(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NamesPHSContainer);