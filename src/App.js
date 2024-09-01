import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';  // Ensure this path is correct
import InspirationPage from './Components/InspirationPage';  // Updated component for cards
import AgenciesPage from './Components/AgenciesPage';  // Ensure this path is correct
import GalleryPage from './Components/GalleryPage';  // Ensure this path is correct
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/agencies" element={<AgenciesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
