import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Login from './components/login/login.js';
import Dashboard from './components/dashboard/dashboard.js';
import Register from './components/login/registro.js';
import Confirm from './components/login/confirm.js';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/confirm/:token' element={<Confirm />} />
    </Routes>
  );
}

export default App;
