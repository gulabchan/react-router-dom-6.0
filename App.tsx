import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './component/Home.jsx';
import About from './component/About.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <h1>Hello React router dom!</h1>
        <p>Start editing to see some magic happen :)</p>
      </BrowserRouter>
    </div>
  );
}