import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPages from './AuthPages';
import FellowBoard from './dashboard';

const Routing = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={<AuthPages />}
        />

        {/* Auth Pages (Login/Register) */}
        <Route path="/auth" element={<AuthPages />} />

        {/* Fellow Board (Dashboard) */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <FellowBoard /> : <Navigate to="/auth" replace />}
        />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default Routing;
