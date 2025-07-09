import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import ApiPage from './components/pages/ApiPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;