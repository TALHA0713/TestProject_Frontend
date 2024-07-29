import  { useState, useRef, useEffect } from 'react';
import { FaBell, FaEnvelope, FaAngleDown } from 'react-icons/fa';
import { TbBrandDatabricks, TbChartCircles } from 'react-icons/tb';
import { BsCardChecklist } from 'react-icons/bs';
import { LuUsers } from 'react-icons/lu';
import Group from '../../assets/Group.png';
import VisnextLogo from '../../assets/Ellipse.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem('loggedIn');
    window.location.href = '/signIn';
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-2 w-1/4">
          <Link to="app/" className="flex items-center">
            <img src={Group} alt="Logo" className="h-7 pr-2" />
            <h1 className="text-xl text-gray-700">
              <span className="font-bold">Manage</span>Bug
            </h1>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex space-x-16 text-2xl">
          <Link to="/app" className="flex items-center space-x-2 text-gray-600">
            <TbBrandDatabricks className="gap-3 hover:text-blue-600" />
            <span className="text-custom-sm">Projects</span>
          </Link>
          <Link to="/Task" className="flex items-center space-x-2 text-gray-600">
            <BsCardChecklist className="hover:text-blue-600" />
            <span className="text-custom-sm">Tasks</span>
          </Link>
          <Link to="/app" className="flex items-center space-x-2 text-gray-600">
            <TbChartCircles className="hover:text-blue-600" />
            <span className="text-custom-sm">Manage</span>
          </Link>
          <Link to="/app" className="flex items-center space-x-2 text-gray-600">
            <LuUsers className="hover:text-blue-600" />
            <span className="text-custom-sm">Users</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-2xl">
          <FaBell className="text-gray-600 hover:text-blue-600" />
          <FaEnvelope className="text-gray-600 hover:text-blue-600" />

          <div className="relative flex items-center space-x-5 bg-gray-200 rounded px-5 py-2" ref={buttonRef}>
            <button
              className="flex items-center justify-center space-x-3"
              onClick={toggleDropdown}
            >
              <img src={VisnextLogo} alt="visnextLogo" />
              <span className="text-gray-600 text-custom-md">Dev.</span>
              <FaAngleDown className="text-gray-600 hover:text-blue-600" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-28 w-full bg-white border-2 border-blue-400 rounded"
                ref={dropdownRef}
              >
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-400 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
