import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from 'react-router';

import Home from './components/Home';
import NumWord from './components/NumberWord';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:element" element={<NumWord />} />
        <Route path="/:element/:color1/:color2" element={<NumWord />} />
      </Routes>
    </div>
  );
}

export default App;
