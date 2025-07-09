import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoachingLetter from './CoachingLetter/CoachingLetter';
import LoginPage from './CoachingLetter/LoginPage';
import SignupPage from './CoachingLetter/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoachingLetter />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
