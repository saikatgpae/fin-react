import './App.css';
import { Routes, Route } from 'react-router-dom';
// import {Link} from "react-router-dom";
import Form from './components/Form';
import Grid from './components/Grid';


function App() {
  return (
    <div className="App">
      {/* <Link to="/">Home</Link> */}
      <h1>Select a DataSet</h1>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/grid" element={<Grid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
