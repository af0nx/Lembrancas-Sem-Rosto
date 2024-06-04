// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Register from './components/login/registro';
import Confirm from './components/login/confirm';
import Products from './components/products/products';
import ProdutoDetalhe from './components/products/produtoDetalhe';
import Cart from './components/products/cart';
import Checkout from './components/checkout/Checkout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/confirm/:token' element={<Confirm />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:name' element={<ProdutoDetalhe />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default App;
