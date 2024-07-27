import { Navigate, Outlet } from 'react-router-dom';

function ProtectingRouting() {
  const isLoggedIn = sessionStorage.getItem("loggedIn");
  
  return isLoggedIn === "true" ? <Outlet /> : <Navigate to="/signIn" />;
}

export default ProtectingRouting;
