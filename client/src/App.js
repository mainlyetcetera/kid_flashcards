import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard'
import { Numbers } from './components/Numbers/Numbers'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/numbers"
          element={<Numbers />}
        />
      </Routes>
      </header>
    </div>
  );
}

export default App;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
  // const [v, setV] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const rawr = await axios.get('http://localhost:5000');
      // console.log(rawr.statusText);
      // setV(rawr);
    // }
    // fetchData()
  // });
