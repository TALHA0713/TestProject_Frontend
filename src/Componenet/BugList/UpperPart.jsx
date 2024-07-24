import NewBugModal from "../../Modal/NewBugModal";
import Breadcrumb from "./Breadcum";
import {  FaEllipsisH, FaPlus,  FaCog  } from "react-icons/fa";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function UpperPart({propHandleClose,propOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBugDetailClose = propHandleClose || handleClose;
  const isDetailOpen = propOpen || isOpen;


    const breadcrumbItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'Library', href: '/Android UI System' },
        
      ];

  return (
    <div className='border-y-2 border-gray-100 flex items-center justify-between border-t border-b border-gray-300 py-5'>
        
    <div className=''>
      <Breadcrumb  items={breadcrumbItems} />

      <div className='flex space-x-4 items-end'>
        <h1 className='text-custom-lg font-bold text-gray-900'>All bugs listing</h1>
        <span className='bg-red-50 text-red-400 text-custom-sm rounded  
        px-[5px] text-center pt-0'>Bugs</span>
      </div>
      
    </div>
    
    {/* Right Side */}
    <div className='flex items-center space-x-2'>
      <div className='py-[7px] px-[8px] border-[1.7px] border-gray-200 rounded'><FaCog className='text-custom-lg text-gray-600'/></div>
      <div className='py-[7px] px-[8px] border-[1.7px] border-gray-200 rounded'><FaEllipsisH  className=' text-custom-lg text-gray-600'/></div>
      <button className='bg-blue-500 text-white py-3 px-12 rounded flex items-center' > <span className='pr-2' onClick={handleOpen}><FaPlus className='text-xs' /></span>New Task</button>
    </div>
    <NewBugModal open={isDetailOpen} handleClose={handleBugDetailClose} />
  </div>
  )
}

export default UpperPart
