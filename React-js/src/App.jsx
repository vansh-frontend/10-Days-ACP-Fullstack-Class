import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './Pages/Counter';
import API from './Pages/API';
import Form from './Pages/Form';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </main>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
