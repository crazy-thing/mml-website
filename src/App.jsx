import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/exports';
import './App.scss';
import Downloads from './pages/Downloads';

const App = () => {

  const handleDownload = () => {
      window.location.href = "/downloads";
  };
  
  return (
    <Router>
      <div className='app'>
        <div className='app-bg-container'></div>
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Home handleDownload={handleDownload} />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;