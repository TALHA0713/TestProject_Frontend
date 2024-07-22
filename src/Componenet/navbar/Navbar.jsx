// import Modal from "@material-ui/core/Modal";
import { FaProjectDiagram, FaTasks, FaCogs, FaUsers, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {


  return (
    <div className="bg-white ">
      <div className="container mx-auto flex justify-between items-center py-4 px-12">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="L" className="h-8" />
          <span className="text-xl font-semibold text-gray-700">ManageBug</span>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex space-x-16">
          <a href="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <FaProjectDiagram />
            <span>Projects</span>
          </a>
          <a href="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <FaTasks />
            <span>Tasks</span>
          </a>
          <a href="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <FaCogs />
            <span>Manage</span>
          </a>
          <a href="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <FaUsers />
            <span>Users</span>
          </a>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-6">
          <FaBell className="text-gray-600 hover:text-blue-600" />
          <FaEnvelope className="text-gray-600 hover:text-blue-600" />
          <div className="flex items-center space-x-2">
            <img src="/path/to/user-avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
            <span className="text-gray-600">Dev.</span>
            <FaUserCircle className="text-gray-600 hover:text-blue-600" />
          </div>
        </div>
      </div>

      
    </div>

    
  );
};

export default Navbar;
