import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Missions from './components/missions/missionpage';
import Rockets from './components/Rockets';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/misions" element={<Missions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
