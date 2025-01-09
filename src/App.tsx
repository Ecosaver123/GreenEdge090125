import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProfileBuilder } from './pages/ProfileBuilder';
import { Dashboard } from './pages/Dashboard';
import { ProfileProvider } from './store/ProfileContext';

export default function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/*" element={<ProfileBuilder />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}