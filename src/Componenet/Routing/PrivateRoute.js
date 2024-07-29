import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ element, requiredRole, userType }) => {
  return userType === requiredRole ? element : <Navigate to="/app" />;
};
