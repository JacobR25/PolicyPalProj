import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation/Nav.js";
import Gov from "./Pages/Gov.js";
import React from 'react';
//import Home from './Home'; // Assuming you have a Home component
import About from './Pages/About.js';
import Home from './Pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gov" element={<Gov />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;

