import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import ForgotPassword from './components/ForgotPassword';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;