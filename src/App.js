import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <h1>Select a DataSet</h1>
      <Routes>
        <Route path="/" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
