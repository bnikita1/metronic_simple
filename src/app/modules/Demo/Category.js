import React, { useEffect,useState } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { useDispatch,useSelector } from 'react-redux';
import { deleteCategories, getCategories } from '../../../reduxs/actions';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import AddEditCategoryModal from './CategoryAddEditModal';

const Category = (props) => {
  const emptyDataMessage = () => { return 'No Data to Display'; }
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.auth.categorylst);
  
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState(false);
  const [selectedCat, setselectedCat] = useState({});

    useEffect(() => {
        dispatch(getCategories());
    }, [])
  
  const rankFormatter = (cell, row, rowIndex, formatExtraData) => {
    // console.log("INDEX", rowIndex);
    return (
      < div
        style={{
          textAlign: "center",
          cursor: "pointer",
          lineHeight: "normal"
        }}>
        <button style={{ border: 'none',backgroundColor:'transparent'}} onClick={() => { cellEdtit(cell, row, rowIndex, formatExtraData) }} >
        <i class="navi-icon flaticon2-edit" ></i>
        </button>
        
        <button style={{ border: 'none',backgroundColor:'transparent'}} onClick={() => { cellDelete(cell, row, rowIndex, formatExtraData) }} >
        <i class="navi-icon flaticon2-trash text-danger" ></i>
        </button>
      </div>
    );
  }

  const cellDelete = (cell, row, rowIndex, formatExtraData) => {
    dispatch(deleteCategories(row));
  }

  const indexNumber = (cell, row,  rowIndex,formatExtraData) =>{ return (<div>{rowIndex + 1}</div>) }


    useEffect(() => {
        // dispatch(getCategories());
        // console.log("object", categories)
    }, [categories]);

  const columns = [{
      dataField: 'No.',
      text: 'No.',
      isDummyField: true,
      csvExport: false,
      formatter:indexNumber
    }, {
        dataField: 'category',
        text: 'category Name'
      }, {
        dataField: 'description',
        text: 'description'
      },
      {
        dataField: 'actions',
        text: 'Actions',
        isDummyField: true,
        csvExport: false,
        formatter:rankFormatter
      },
    ];

  const cellEdtit = (cell, row, rowIndex, formatExtraData) => {
    // console.log("cell, row, rowIndex, formatExtraData", { cell, row, rowIndex, formatExtraData });
    setmodal(true); setedit(true); setselectedCat(row);
  }
          
  return (
    <Card>
      <CardHeader title="Category List">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            //   onClick={productsUIProps.newProductButtonClick}
            onClick={() => { setmodal(true); setedit(false); setselectedCat({category:'',description:''}) }}
          >
            New Category
            </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {console.log("object 000", categories)}
        {categories ? <BootstrapTable
          data={categories}
          // selectRow={selectRowProp}
          striped
          hover
          condensed
          // pagination
          insertRow
          deleteRow
          search
          columns={columns}
          keyField='id'
          pagination={paginationFactory()}
          noDataIndication={emptyDataMessage}
          cellEdit={cellEdtit}
            
        >
        </BootstrapTable> : null}
        {modal ? (
          <AddEditCategoryModal
            show={modal}
            setModal={(v) => { setmodal(v) }}
            onHide={() => { setmodal(false) }}
            catgory={selectedCat}
            isEdit={edit}
          />
        ) : null}
      </CardBody>
    </Card>);

}

export default Category;