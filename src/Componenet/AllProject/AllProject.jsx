import { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import ProjectModal from '../../Modal/ProjectModal';
import Group from '../../assets/Group.png';
import Card from '../Card/Card';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import DisableButton from './DisableButton';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllProject = ({ propHandleClose, propOpen }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token1 = sessionStorage.getItem("token");
      if (token1) {
        try {
          const decodedToken = JSON.parse(token1);
          const token = decodedToken.token;
          const arrayToken = token.split(".");
          const tokenPayload = JSON.parse(atob(arrayToken[1]));
          const userId = tokenPayload.id.toString();
          const response = await axios.get(`http://localhost:4444/api/getProjectsForUser/${userId}`);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error decoding token:', error);
          setLoading(false);
        }
        return;
      }
      window.location.href = "/signIn"; 
    };
    fetchData();  
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Update handleDivClick to accept id as a parameter
  const handleDivClick = (id) => () => {
    navigate(`/showTasks?role=${encodeURIComponent(id)}`);
  };

  const handleBugDetailClose = propHandleClose || handleClose;
  const isDetailOpen = propOpen || isOpen;

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="container mx-auto flex justify-between items-center py-4 border-gray-300 border-t border-b">    
        <div className="border-l-4 border-green-500 pl-2">
          <p className="text-custom-lg font-bold text-black my-2">Projects</p>
          <p className="text-custom-md text-gray-400 mb-2">Hi DeVisnext, welcome to ManageBug</p>
        </div>

        {/* Search Bar Section */}
        <div className="flex items-center mt-2 pr-4 h-12 bg-gray-200 rounded-sm px-6 w-[30%]">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for Projects here"
            className="bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Add New Project Button */}
        <DisableButton handleOpen={handleOpen} />

        {/* Sort and Project Dropdowns */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Sort by</span>
          <FaChevronDown className="text-gray-700" />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">My Project</span>
          <FaChevronDown className="text-gray-700" />
        </div>

        {/* Logo Button */}
        <button className="p-2 rounded-full pr-4">
          <img src={Group} alt="logo" />
        </button>
      </div>

      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {data.map((item, index) => (
            <div 
              key={index}
              className="cursor-pointer"
              onClick={handleDivClick(item.id)}
            >
              <Card
                title={item.name}
                description={item.detail}
                taskDone={item.completedBugCount}
                totalTask={item.totalBugCount}
              />
            </div>
          ))}
        </div>
      )}

      {/* ProjectModal Component */}
      <ProjectModal open={isDetailOpen} handleClose={handleBugDetailClose} />
    </div>
  );
};

export default AllProject;
