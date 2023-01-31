import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import fetchCarData from '../../redux/FormDataRedux';
import { fetchOlymicData } from '../../redux/FormDataRedux';

export default function Form() {
  
  const [value, setValue] = useState();
  const GetValue = (e) => {
    e.preventDefault();
    var slelct_value = document.getElementById('dataset').value;
    setValue(slelct_value);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (value === 'car') {
      dispatch(fetchCarData());
    }
    if (value === 'olympic') {
      dispatch(fetchOlymicData());
    }
  }, [dispatch, value]);

  const data = useSelector((state) => state.formDataReducer);
  console.log(data)
  return (
    <>
        <h1>{value}</h1>
        <form className="p-4" action="#">
            <label>Dataset: </label>
            <select name="ldata-set" id="dataset">
                <option value="car">car-data</option>
                <option value="olympic">olympic-data</option>
            </select>
            <input type="submit" value="Submit" onClick={GetValue} />
            {/* <Link to="/grid"><input type="submit" value="Submit" onClick={GetValue} /></Link> */}
        </form>
    </>
  )
}
