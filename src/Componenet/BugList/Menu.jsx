import { IoIosSettings } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function Menu({ onClose }) {
  
  const handleChangeStatus = () => {
    onClose(); 
  };

  const handleStatusClick = (status) => {
    console.log(`${status} clicked`);
    onClose(); 
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    onClose(); 
  };

  return (
    <div 
      className='absolute top-full left-0 mt-2 flex flex-col gap-4 p-4 bg-white w-64 h-50 border border-gray-300 shadow-lg z-50'
      onClick={(e) => e.stopPropagation()} // Prevent click events from propagating to the overlay
    >
      <div className='flex items-center justify-between cursor-pointer' onClick={handleChangeStatus}>
        <span>Change Status</span>
        <IoIosSettings />
      </div>
      <ul className='flex flex-col gap-4 border-b border-red-400'>
  <li className='cursor-pointer bg-red-100 inline-block px-4 py-2  rounded' onClick={() => handleStatusClick('pending')}>
    pending
  </li>
  <li className='cursor-pointer bg-green-100 inline-block px-4 py-2 rounded' onClick={() => handleStatusClick('closed')}>
    closed
  </li>
  <li className='cursor-pointer bg-blue-100 inline-block px-4 py-2 rounded' onClick={() => handleStatusClick('In progress')}>
    In progress
  </li>
</ul>

      <div className='flex items-center justify-between cursor-pointer' onClick={handleDelete}>
        <span className="text-red-400">Delete</span>
        <MdDeleteOutline />
      </div>
    </div>
  );
}

export default Menu;
