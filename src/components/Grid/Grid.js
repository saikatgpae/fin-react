
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

export default function Grid() {

  const data = useSelector((state) => state.formDataReducer);
  console.log(data)
      const [rowData, setRowData] = useState([
        // {make: "Toyota", model: "Celica", price: 35000},
        // {make: "Ford", model: "Mondeo", price: 32000},
        // {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [columnDefs, setColumnDef] = useState([
        { field: 'make'},
        { field: 'model'},
        { field: 'price'}
    ]);

  //   const columnDefs = useMemo(() => [
  //     { field: 'athlete' },
  //     { field: 'age'},
  //     { field: 'country' },
  //     { field: 'year' },
  //     { field: 'date' },
  //     { field: 'sport' },
  //     { field: 'gold' },
  //     { field: 'silver' },
  //     { field: 'bronze' },
  //     { field: 'total' }
  // ], []);

    const defaultColDef = useMemo(() => {
      return {
        width: 150,
        editable: true,
        filter: 'agTextColumnFilter',
        sortable: true,
        floatingFilter: true,
        resizable: true,
      };
    }, []);

    useEffect(() => {
      fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
   }, []);
   
//    useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//         .then(resp => resp.json())
//         .then(data => setRowData(data));
// }, []);
    
  return (
    <div className='p-4 text-center'>
      <Link to="/">Home</Link>
      <h4>Hello Grid</h4>
      <div className="ag-theme-alpine" style={{height: 400}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={defaultColDef} />
       </div>
    </div>
  )
}
