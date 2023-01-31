import React from 'react';
import {Link} from "react-router-dom";

export default function Form() {
  const getValue = (e) => {
    const value = document.getElementById('dataset').value;
    console.log(value);
  }
  return (
    <>
        <form className="p-4" action="#">
            <label>Dataset: </label>
            <select name="ldata-set" id="dataset">
                <option value="Car">car-data</option>
                <option value="olympic">olympic-data</option>
            </select>
              <Link to="/grid"><input type="submit" value="Submit" onClick={getValue} /></Link>
        </form>
    </>
  )
}