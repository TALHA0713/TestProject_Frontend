import Navbar from "../navbar/Navbar";
import AllProject from "../AllProject/AllProject";
import Pagination from "../Pagination/pagination";
import Main from "../BugList/Main";
// import Menu from '../BugList/Menu';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Routing= () => {
    return (
      <Router>
         <div className="relative flex flex-col h-screen">
        <div className="fixed top-0 left-0 right-0 h-[10%] bg-gray-100 z-10">
          <Navbar/>
        </div>
      
        <div className="flex-1 overflow-auto mt-[5%] bg-gray-100 mb-[4%]">
        <Routes>
          <Route path="/" element={<AllProject />} />
          <Route path="/Task" element={<Main />} />
        </Routes>
      </div>

        <div className="fixed bottom-0 left-0 right-0 h-[7%] z-10">
          <Pagination/>
        </div>

        
      </div>
      </Router>
      
    );
  };
  
  export default Routing;
  