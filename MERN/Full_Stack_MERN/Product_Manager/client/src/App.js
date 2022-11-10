import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import DisplayProduct from './components/DisplayProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={<AllProducts/>} />
        <Route path='/product/add' element={<AddProduct/>} />
        <Route path='/product/:id' element={<DisplayProduct/>} />
        <Route path='/product/edit/:id' element={<EditProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
