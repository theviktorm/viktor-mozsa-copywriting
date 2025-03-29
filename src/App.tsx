import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Masterclasses from './pages/Masterclasses';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masterclasses" element={<Masterclasses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;