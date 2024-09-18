import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Donate from './components/Donate';
import './index.css';
import CheckoutForm from './components/CheckoutForm';
import BrandRecognition from './components/BrandRecognition';
function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
      </div>
    </Router>
    <BrandRecognition/>
    
    </>
  );
}

export default App;
