// import { useEffect } from 'react';
import './App.css';

import Home from './Components/Home';
import Orders from './Components/Orders';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
      </Routes>
    </Router>
    </div>
  );
}
   

export default App;
