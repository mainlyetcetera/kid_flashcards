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
