import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import Homepage from './views/Homepage';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';

function App() {
  return (
    <>
      <AuthProvider> {/* Wrap your app with AuthProvider if you're using authentication */}
        <Navbar /> {/* Navbar will be displayed on all pages */}
        <Routes>
          <Route exact path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/register" element={<Registerpage />} /> {/* Register route */}
          <Route path="/login" element={<Loginpage />} /> {/* Login route */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> {/* Private route for Dashboard */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
