/**
 * ContainerComponent
 * name        : NamesYUPContainer
 * description : Names container using YUP form validation
 * author      : lsj
 * created     : 12/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as namesYUPExports from '../../store/modules/namesYUP';
import NameYUPForm from '../../components/namesYUP/NameYUPForm';
// import NameList from '../../components/namesYUP/NameList';


class NamesYUPContainer extends React.Component {

    render() {
        const {fullname, names, onSubmit, onChange} = this.props;
        return(
            <div>
                names YUP form validation
                <NameYUPForm
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
    const {namesYUP} = state;
    return {
        names:namesYUP.names,
        fullname: namesYUP.fullname
    }
    return namesYUP

};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit:(payload)=>{
            dispatch(namesYUPExports.submit(payload));
        },
        onChange:(payload)=>{
            dispatch(namesYUPExports.change(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NamesYUPContainer);