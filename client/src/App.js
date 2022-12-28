import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard'
import { Numbers } from './components/Numbers/Numbers'
import { Yay } from './components/Yay/Yay'
import { NextTime } from './components/NextTime/NextTime'

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
        <Route
          path="/numbers/yay"
          element={<Yay />}
        />
        <Route
          path="/numbers/next-time"
          element={<NextTime />}
        />
      </Routes>
      </header>
    </div>
  );
}

export default App;
