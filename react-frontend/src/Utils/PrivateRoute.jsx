import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
const PrivateRoute = ({ children }) => {
  const {isAuthenticated} = useContext(AuthContext) // Checking for access token or other authentication criteria

  console.log("isAuthenticated", isAuthenticated)
  console.log("checking....i.....")
  if (!isAuthenticated) {
    console.log("inside")
    return <Navigate to="/login" replace />; // Redirecting if not authenticated
  }

  return children; // Render children if authenticated
};

export default PrivateRoute;
