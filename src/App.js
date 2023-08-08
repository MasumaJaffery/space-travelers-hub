import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
