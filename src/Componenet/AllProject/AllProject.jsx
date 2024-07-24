import { useState } from 'react';
import { FaSearch, FaChevronDown} from 'react-icons/fa';
import ProjectModal from '../../Modal/ProjectModal';
import Group from '../../assets/Group.png'
import Card from '../Card/Card'

// eslint-disable-next-line react/prop-types
const AllProject = ({propHandleClose,propOpen}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleBugDetailClose = propHandleClose || handleClose;
  const isDetailOpen = propOpen || isOpen;

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="container mx-auto flex justify-between items-center py-4  border-gray-300 border-t border-b">    
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

        {/* Add New Bug Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded" onClick={handleOpen}>
          + Add New Bug
        </button>

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

      {/* Card Grid Section */}
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 " >
       
        <Card />
        <Card />
        <Card />
      </div>

      {/* BugDetail Component */}
      <ProjectModal open={isDetailOpen} handleClose={handleBugDetailClose} />


    </div>
  );
};


export default AllProject;
