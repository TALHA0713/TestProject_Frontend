import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import AllProject from "../AllProject/AllProject";
import Pagination from "../Pagination/pagination";
import Main from "../BugList/Main";
import SignIn from "../SignIn";
import UserType from "../UserType";
import SignUp from "../SignUp";

const Routing = () => {
  const isLoggedIn = sessionStorage.getItem("loggedIn");
  const token = sessionStorage.getItem("token");

  return (
    <Router>
      {!isLoggedIn && !token ? (
        <Routes>
          <Route path="/" element={<UserType />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/signIn" />} />
        </Routes>
      ) : (
        // Protected Routes
        <div className="relative flex flex-col h-screen">
          <div className="fixed top-0 left-0 right-0 h-[10%] bg-gray-100 z-10">
            <Navbar />
          </div>

          <div className="flex-1 overflow-auto mt-[5%] bg-gray-100 mb-[4%]">
            <Routes>
              <Route path="/app" element={<AllProject />} />
              <Route path="/Task" element={<Main />} />
              <Route path="/login" element={<Navigate to="/app" />} />
              <Route path="/register" element={<Navigate to="/app" />} />
              <Route path="*" element={<Navigate to="/app" />} />
            </Routes>
          </div>

          <div className="fixed bottom-0 left-0 right-0 h-[7%] z-10">
            <Pagination />
          </div>
        </div>
      )}
    </Router>
  );
};

export default Routing;
