
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

export default function Grid() {
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDef] = useState();
    const data = useSelector((state) => state.formDataReducer);
    const keys = Object.keys(data[0] || {});

    const columns = keys.map((key) => {return {"field": `${key}`}});

    useEffect(() => {
      setRowData(data)
    },[data]);

    useEffect(() => {
      return setColumnDef(columns);
    },[]);

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
