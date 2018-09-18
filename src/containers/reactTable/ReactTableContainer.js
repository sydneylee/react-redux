/**
 * Container Component
 * name        : ReactTableContainer
 * description : ReactTableContainer
 * author      : lsj
 * created     : 18/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as reactTableExports from '../../store/modules/reactTable';
import imgSrc from '../../assets/img/loading.gif';
// import ReactTableItem         from '../../components/ReactTable/ReactTableItem';
// import ReactTableItems        from '../../components/ReactTable/ReactTableItems';
// import ReactTableItemForm     from '../../components/ReactTable/ReactTableItemForm';

import  { makeData, Logo, Tips} from "./Utils";
import ReactTable from 'react-table';
import 'react-table/react-table.css';




class ReactTableContainer extends React.Component {

    //-------------------------------------------------------------------------------------
    // Tip : dispatch action(async) to redux store
    //-------------------------------------------------------------------------------------
    // componentDidMount(){
    //     //this.props.onGetItem(1);
    //     this.props.onGetItems();
    // }
    state = {
        data : makeData(),
    }
    //-------------------------------------------------------------------------------------
    // Tip : dispatch action(async) to redux store : dprp,
    //-------------------------------------------------------------------------------------
    render() {

        const styLoadingImg = {width: '32px', height: '32px'};
        const {data} = this.state;
        return (<div>
            <ReactTable
                data={data}
                columns={[
                    {
                        Header: "Name",
                        columns: [
                            {
                                Header: "First Name",
                                accessor: "firstName"
                            },
                            {
                                Header: "Last Name",
                                id: "lastName",
                                accessor: d => d.lastName
                            }
                        ]
                    },
                    {
                        Header: "Info",
                        columns: [
                            {
                                Header: "Age",
                                accessor: "age"
                            },
                            {
                                Header: "Status",
                                accessor: "status"
                            }
                        ]
                    },
                    {
                        Header: 'Stats',
                        columns: [
                            {
                                Header: "Visits",
                                accessor: "visits"
                            }
                        ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />

        </div>);

        // // Tip :For async : null checking and loading image
        // return (
        //     <div>
        //         <div  style={{display:this.props.mode=='view'? 'block':'none'}}>
        //             <div>
        //                 {this.props.item && this.props.item.id!=null ? <ReactTableItem item={this.props.item}/> : <img src={imgSrc} style={styLoadingImg}/> }
        //             </div>
        //             <div>
        //                 {this.props.items && this.props.items.length!=0 ? <ReactTableItems {...this.props}/> : <img src={imgSrc} style={styLoadingImg}/> }
        //             </div>
        //             <button onClick={this.props.onAddItem}>add</button>
        //         </div>
        //         {/*<div>*/}
        //         {/*{<ReactTableItemForm {...this.props}/>}*/}
        //         {/*</div>*/}
        //         <div style={{display:this.props.mode=='edit'? 'block':'none'}}>
        //             {<ReactTableItemForm {...this.props}/>}
        //         </div>
        //     </div>
        // );

        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //     <div>
        //         <ReactTableForm
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <ReactTableList
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
    const {reactTable} = state;
    return {

        mode :         reactTable.mode,

        item :         reactTable.item,
        itemPending:   reactTable.itemPending,
        itemError:     reactTable.itemError,

        items :        reactTable.items,
        itemsPending:  reactTable.itemsPending,
        itemsError:    reactTable.itemsError,

        // submitPending: reactTable.submitPending,
        // submitError:   reactTable.submitError,

    };

};

//-------------------------------------------------------------------------------------
// Tip : pls check if any param is required
//-------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        onGetItem : (id)=>{
            dispatch(reactTableExports.getItem(id))
        },
        onGetItems : ()=>{
            dispatch(reactTableExports.getItems())
        },
        // onSubmit:(payload)=>{
        //     dispatch(reactTableExports.submit(payload));
        // },
        // onSetMode:(mode)=>{
        //     dispatch(reactTableExports.setMode(mode));
        // },
        // onAddItem : ()=>{
        //     dispatch(reactTableExports.addItem());
        // },
        // onChange:(payload)=>{
        //     dispatch(reactTableExports.change(payload));
        // },

    }
};

//-------------------------------------------------------------------------------------
// Tip : export default the container component after connecting to redux/store
//-------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(ReactTableContainer);


