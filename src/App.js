import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import MissionsPage from './components/missions/missionpage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/misions" element={<MissionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
