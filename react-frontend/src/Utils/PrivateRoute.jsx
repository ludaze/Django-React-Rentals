import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('access'); // Checking for access token or other authentication criteria

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirecting if not authenticated
  }

  return children; // Render children if authenticated
};

export default PrivateRoute;
