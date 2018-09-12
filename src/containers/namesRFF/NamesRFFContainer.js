import React from 'react';
import {connect} from 'react-redux';
import * as namesRFFExports from '../../store/modules/namesRFF';
// import NameForm from '../../components/namesRFF/NameForm';
// import NameList from '../../components/namesRFF/NameList';


class NamesRFFContainer extends React.Component {

    render() {
        return(
            <div>
                this is names using React-final-form
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
        //
    }

}

// lsj-TIP : destructure state into a specific variable(module name)
const mapStateToProps = (state) => {
    const {namesRFF} = state;
    return {
        names:namesRFF.names,
        fullname: namesRFF.fullname
    }
};

// lsj-TIP : pls check if any param is required
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit:(payload)=>{
            dispatch(namesRFFExports.submit(payload));
        },
        onChange:(payload)=>{
            dispatch(namesRFFExports.change(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NamesRFFContainer);
