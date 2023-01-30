import React from 'react'

export default function Form() {
  return (
    <>
        <form className="p-4" action="#">
            <label>Dataset</label>
            <select name="ldata-set" id="dataset">
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}
