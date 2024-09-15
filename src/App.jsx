import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Demo from './pages/Demo';
import "./App.css";

function App() {

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
