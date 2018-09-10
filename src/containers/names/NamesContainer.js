import React from 'react';
import {connect} from 'react-redux';
import * as namesExports from '../../store/modules/names';
import NameForm from '../../components/names/NameForm';
import NameList from '../../components/names/NameList';


class NameContainer extends React.Component{

    render(){
        const {fullname, names, onSubmit, onChange} = this.props;
        return(

            <div>
                <NameForm
                    fullname={fullname}
                    onSubmit={onSubmit}
                    onChange={onChange}
                />
                <NameList
                    names={names}
                />
            </div>

        );

    }

}
//TODO : destructuring
const mapStateToProps=(state)=>{
    const {names} = state;
    return {
        names:names.names,
        fullname: names.fullname
    }
};
//TODO name should be passed for onSubmit and onChange
const mapDispatchToProps=(dispatch)=>{
    return {
        onSubmit:(payload)=>{
            dispatch(namesExports.submit(payload));
        },
        onChange:(payload)=>{
            dispatch(namesExports.change(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);