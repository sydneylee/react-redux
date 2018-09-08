import React from 'react';
import {connect} from 'react-redux';
import * as namesExports from '../../store/modules/names';
import NameForm from '../../components/names/NameForm';
import NameList from '../../components/names/NameList';


class NameContainer extends React.Component{

    render(){
        const {name, names, onSubmit, onChange} = this.props;
        return(

            <div>
                <NameForm
                    name={name}
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
        name: names.name
    }
};
//TODO name should be passed for onSubmit and onChange
const mapDispatchToProps=(dispatch)=>{
    return {
        onSubmit:(name)=>{
            dispatch(namesExports.submit(name));
        },
        onChange:(name)=>{
            dispatch(namesExports.change(name));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);