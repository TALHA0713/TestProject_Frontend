import { useState } from 'react';
import { FaSearch, FaChevronDown, FaSyncAlt } from 'react-icons/fa';
// import ProjectModal from '../../Modal/ProjectModal';
import NewBugModal from '../../Modal/NewBugModal';


const AllProject = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white mt-4">
      <div className="container mx-auto flex justify-between items-center py-2 px-12">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="border-l-4 border-green-500 pl-2">
            <p className="text-lg font-bold text-black">Projects</p>
            <p className="text-sm text-gray-400">Hi DeVisnext, welcome to ManageBug</p>
          </div>
          <div className="flex items-center h-12 bg-gray-100 rounded-sm px-3 py-1">
            <FaSearch className="text-gray-500 mt-2 mr-2" />
            <input
              type="text"
              placeholder="Search for Projects here"
              className="bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpen}>
            + Add New Bug
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Sort by</span>
            <FaChevronDown className="text-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">My Project</span>
            <FaChevronDown className="text-gray-700" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full">
            <FaSyncAlt />
          </button>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-12">
        <div className="bg-white p-6 rounded-sm shadow-md">
          <img src="../../images/left.jpg" alt="Icon 1" className="mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Android UI System</h3>
          <p className="text-sm text-gray-400 mb-2">Redesign all the web pages with animation.</p>
          <p className="text-sm font-medium text-gray-500">Task Done: 02/56</p>
        </div>
      </div>

      <NewBugModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AllProject;
