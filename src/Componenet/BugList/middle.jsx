
import { FaSearch, FaAngleDown, FaBars, FaAlignJustify} from "react-icons/fa";
import { PiCirclesFourLight } from "react-icons/pi";

import { HiOutlineBarsArrowUp } from "react-icons/hi2";

function middle() {
  return (
    <div className='py-4 flex justify-between items-center  border-b border-gray-300 '>

    <div className=" flex-none">
    <div className='h-12 flex items-center border-2 border-gray-200 rounded-md px-6 '>
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for Projects here"
          className="bg-transparent outline-none"
        />
      </div>
    </div>

    {/* Center Section */}
    <div className="flex-grow flex justify-center">
    <div className='flex space-x-4  text-custom-md text-gray-800'>
        <li className='flex items-center text-1xl'>Subtasks <span className='pl-2'><FaAngleDown className='text-custom-lg text-gray-600'/></span></li>
        <li className='flex items-center text-1xl'>Me <span className='pl-2'><FaAngleDown className='text-custom-lg text-gray-600'/></span></li>
        <li className='flex items-center text-1xl'>Assignees <span className='pl-2'><FaAngleDown className='text-custom-lg text-gray-600'/></span></li>
      </div>
    </div>

 
      <div className='space-x-2 flex text-custom-lg'>
        <div className='py-[2.5px] px-[7px] border-[1.7px] border-gray-200 rounded text-gray-500 flex items-center'><FaBars className='text-gray-600' /></div>
        <div className='py-[2.5px] px-[5px] border-[1.7px] border-gray-200 rounded text-gray-500'><HiOutlineBarsArrowUp/></div>
        <div className='flex items-center'>
          <div className='py-[2.5px] px-[5px] border-y-[1.7px] border-l-[1.7px]  border-gray-200 rounded-l text-gray-600'> < PiCirclesFourLight/> </div>
          <div className='py-[2.5px] px-[7px] border-[1.7px] border-gray-200 rounded-r text-gray-600 flex items-center'><FaAlignJustify className=' text-gray-600'/></div>
        </div>
      </div>
    </div>
  )
}

export default middle
