import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import Homepage from './views/Homepage';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Dashboard from './views/Dashboard';
import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';
import ClothingCardDetail from './components/ClothingCardDetail.jsx';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <>
      <AuthProvider> 
        
        <NavigationBar /> 
        {/* <Container className='text-center full-page-container'>
          <div>Welcome to Rentals!</div>
        </Container>
         */}
        
        <Routes>
          <Route exact path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/register" element={<Registerpage />} /> {/* Register route */}
          <Route path="/login" element={<Loginpage />} /> {/* Login route */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> {/* Private route for Dashboard */}
          <Route path="/clothing/:id" element={<ClothingCardDetail />} /> {/* Private route for ClothingCardDetail */}
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
