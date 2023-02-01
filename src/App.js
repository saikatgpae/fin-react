import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className="App">
      <h1>Select a DataSet</h1>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
