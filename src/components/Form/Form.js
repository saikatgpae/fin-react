import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import fetchCarData from '../../redux/FormDataRedux';
import { fetchOlymicData } from '../../redux/FormDataRedux';
import Store from '../../redux/ConfigureStore';

export default function Form() {
  const previousValue = Store.getState();

  const [value, setValue] = useState();
  const GetValue = (e) => {
    e.preventDefault();
    var slelct_value = document.getElementById('dataset').value;
    setValue(slelct_value);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 'car') {
      dispatch(fetchCarData());

      Store.subscribe(() => {
        const newState = Store.getState();
        if(newState !== previousValue){
          navigate("/grid");
        }
      },[]);
    }
    
    if (value === 'olympic') {
      dispatch(fetchOlymicData());
      Store.subscribe(() => {
        const newState = Store.getState();
        if(newState !== previousValue){
          navigate("/grid");
        }
      },[]);
    }
  }, [dispatch, value, navigate, previousValue]);

  
  return (
    <>
        <form className="p-4" action="#">
            <label>Dataset: </label>
            <select name="ldata-set" id="dataset">
                <option value="car">car-data</option>
                <option value="olympic">olympic-data</option>
            </select>
            <input type="submit" value="Submit" onClick={GetValue} />
        </form>
    </>
  )
}
