import React from 'react';
import {connect} from 'react-redux';
// import * as namesExports from '../../store/modules/names';
// import NameForm from '../../components/names/NameForm';
// import NameList from '../../components/names/NameList';


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
const mapStateToProps=(state)=>{
    // const {names} = state;
    // return {
    //     names:names.names,
    //     fullname: names.fullname
    // }
};
// lsj-TIP : pls check if any param is required
const mapDispatchToProps=(dispatch)=>{
    return {
        // onSubmit:(payload)=>{
        //     dispatch(namesExports.submit(payload));
        // },
        // onChange:(payload)=>{
        //     dispatch(namesExports.change(payload));
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(${NAME});