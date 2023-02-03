import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Card from './views/Card';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Card/>} path='card'/>
      </Routes>
    </div>
  );
}

export default App;
