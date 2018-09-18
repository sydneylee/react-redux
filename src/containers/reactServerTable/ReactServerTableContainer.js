/**
 * Container Component
 * name        : ReactServerTableContainer
 * description : ReactServerTableContainer
 * author      : lsj
 * created     : 18/9/18
 */

import React from 'react';
import {connect} from 'react-redux';
import * as reactServerTableExports from '../../store/modules/reactServerTable';
import imgSrc from '../../assets/img/loading.gif';
// import ReactServerTableItem         from '../../components/reactServerTable/ReactServerTableItem';
// import ReactServerTableItems        from '../../components/reactServerTable/ReactServerTableItems';
// import ReactServerTableItemForm     from '../../components/reactServerTable/ReactServerTableItemForm';
import _ from "lodash";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const rawData = makeData();

const requestData = (pageSize, page, sorted, filtered) => {
    return new Promise((resolve, reject) => {
        // You can retrieve your data however you want, in this case, we will just use some local data.
        let filteredData = rawData;

        // You can use the filters in your request, but you are responsible for applying them.
        if (filtered.length) {
            filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
                return filteredSoFar.filter(row => {
                    return (row[nextFilter.id] + "").includes(nextFilter.value);
                });
            }, filteredData);
        }
        // You can also use the sorting in your request, but again, you are responsible for applying it.
        const sortedData = _.orderBy(
            filteredData,
            sorted.map(sort => {
                return row => {
                    if (row[sort.id] === null || row[sort.id] === undefined) {
                        return -Infinity;
                    }
                    return typeof row[sort.id] === "string"
                        ? row[sort.id].toLowerCase()
                        : row[sort.id];
                };
            }),
            sorted.map(d => (d.desc ? "desc" : "asc"))
        );

        // You must return an object containing the rows of the current page, and optionally the total pages number.
        const res = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
        };

        // Here we'll simulate a server response with 500ms of delay.
        setTimeout(() => resolve(res), 500);
    });
};

class ReactServerTableContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            pages: null,
            loading: true
        };
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData(state, instance) {
        // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
        // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
        this.setState({ loading: true });
        // Request the data however you want.  Here, we'll use our mocked service we created earlier
        requestData(
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered
        ).then(res => {
            // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
            this.setState({
                data: res.rows,
                pages: res.pages,
                loading: false
            });
        });
    }
    //-------------------------------------------------------------------------------------
    // Tip : dispatch action(async) to redux store
    //-------------------------------------------------------------------------------------
    // componentDidMount(){
    //     this.props.onGetItem(1);
    //     this.props.onGetItems();
    // }

    //-------------------------------------------------------------------------------------
    // Tip : dispatch action(async) to redux store : dprp,
    //-------------------------------------------------------------------------------------
    render() {

       //const styLoadingImg = {width: '32px', height: '32px'};
        const { data, pages, loading } = this.state;
        return (<div>
            <ReactTable
                columns={[
                    {
                        Header: "First Name",
                        accessor: "firstName"
                    },
                    {
                        Header: "Last Name",
                        id: "lastName",
                        accessor: d => d.lastName
                    },
                    {
                        Header: "Age",
                        accessor: "age"
                    }
                ]}
                manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                data={data}
                pages={pages} // Display the total number of pages
                loading={loading} // Display the loading overlay when we need it
                onFetchData={this.fetchData} // Request new data when things change
                filterable
                defaultPageSize={10}
                className="-striped -highlight"
            />
            <br />
            <Tips />
            <Logo />
        </div>);

        // // Tip :For async : null checking and loading image
        // return (
        //     <div>
        //         <div  style={{display:this.props.mode=='view'? 'block':'none'}}>
        //             <div>
        //                 {this.props.item && this.props.item.id!=null ? <ReactServerTableItem item={this.props.item}/> : <img src={imgSrc} style={styLoadingImg}/> }
        //             </div>
        //             <div>
        //                 {this.props.items && this.props.items.length!=0 ? <ReactServerTableItems {...this.props}/> : <img src={imgSrc} style={styLoadingImg}/> }
        //             </div>
        //             <button onClick={this.props.onAddItem}>add</button>
        //         </div>
        //         {/*<div>*/}
        //         {/*{<ReactServerTableItemForm {...this.props}/>}*/}
        //         {/*</div>*/}
        //         <div style={{display:this.props.mode=='edit'? 'block':'none'}}>
        //             {<ReactServerTableItemForm {...this.props}/>}
        //         </div>
        //     </div>
        // );

        // const {fullname, names, onSubmit, onChange} = this.props;
        // return(
        //     <div>
        //         <ReactServerTableForm
        //             fullname={fullname}
        //             onSubmit={onSubmit}
        //             onChange={onChange}
        //         />
        //         <ReactServerTableList
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
    const {reactServerTable} = state;
    return {

        // mode :         reactServerTable.mode,

        // item :         reactServerTable.item,
        // itemPending:   reactServerTable.itemPending,
        // itemError:     reactServerTable.itemError,

        // items :        reactServerTable.items,
        // itemsPending:  reactServerTable.itemsPending,
        // itemsError:    reactServerTable.itemsError,

        // submitPending: reactServerTable.submitPending,
        // submitError:   reactServerTable.submitError,

    };

};

//-------------------------------------------------------------------------------------
// Tip : pls check if any param is required
//-------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        // onGetItem : (id)=>{
        //     dispatch(reactServerTableExports.getItem(id))
        // },
        // onGetItems : ()=>{
        //     dispatch(reactServerTableExports.getItems())
        // },
        // onSubmit:(payload)=>{
        //     dispatch(reactServerTableExports.submit(payload));
        // },
        // onSetMode:(mode)=>{
        //     dispatch(reactServerTableExports.setMode(mode));
        // },
        // onAddItem : ()=>{
        //     dispatch(reactServerTableExports.addItem());
        // },
        // onChange:(payload)=>{
        //     dispatch(reactServerTableExports.change(payload));
        // },

    }
};

//-------------------------------------------------------------------------------------
// Tip : export default the container component after connecting to redux/store
//-------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(ReactServerTableContainer);


