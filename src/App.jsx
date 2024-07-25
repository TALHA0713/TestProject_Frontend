import SignIn from "./Componenet/SignIn";
import UserType from "./Componenet/UserType";
import SignUp from "./Componenet/SignUp";
// import Navbar from "./Componenet/navbar/Navbar";
// import Routing from "./Componenet/Routing/Routing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/" element={<UserType/>} />
        {/* <Route path="/" element={<Routing/>} /> */}
        <Route path="/signIn" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
