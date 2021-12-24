
import './App.css'
import React from 'react';
import {BrowserRouter, Route, Routes, Link } from'react-router-dom';
import DatosProducto from './DatosProducto';
import About from './About';
import Productos from './ProductCard';

function App(props) {


  return ( 
    <BrowserRouter>
      
      <Link to="/" className='Link'>home</Link>
      <Link to="/about" className='Link'   >about</Link>
      <Routes>
        <Route path="/" element={<Productos/>}></Route>
        <Route path="/:id" element={<DatosProducto/>}>  </Route>
        <Route path="/about" element={<About></About>}  ></Route>
      </Routes>

      

    </BrowserRouter>
  );
}

export default App;
