import { FaBell, FaEnvelope,FaAngleDown } from 'react-icons/fa';
import { TbBrandDatabricks,TbChartCircles } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import Group from '../../assets/Group.png'
import VisnextLogo from  '../../assets/Ellipse.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <div className="container mx-auto flex justify-between items-center py-4 ">
        <div className="flex items-center space-x-2 w-1/4  ">
        <Link to="/"  className='flex items-center'>
        <img src={Group} alt="Logo" className="h-7 pr-2" />
          <h1 className="text-xl text-gray-700"> <span className='font-bold'>Manage</span>Bug</h1>
        </Link>
          
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex space-x-16 text-2xl ">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 ">
            < TbBrandDatabricks className='gap-3 hover:text-blue-600' />
            <span className='text-custom-sm' >Projects</span>
          </Link>
          <Link to="/Task" className="flex items-center space-x-2 text-gray-600 ">
            <BsCardChecklist className='hover:text-blue-600' />
            <span className='text-custom-sm'>Tasks</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2 text-gray-600 ">
            < TbChartCircles className='hover:text-blue-600' />
            <span className='text-custom-sm'>Manage</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2 text-gray-600 ">
            <  LuUsers className='hover:text-blue-600 '/>
            <span className='text-custom-sm'>Users</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-2xl ">
          <FaBell className="text-gray-600 hover:text-blue-600" />
          <FaEnvelope className="text-gray-600 hover:text-blue-600" />

          <div className="flex items-center space-x-5 bg-gray-200 rounded px-5 py-2">
            <img src={VisnextLogo} alt="visnextLogo" />
            <span className="text-gray-600 text-custom-md  ">Dev.</span>
            <button>
            <FaAngleDown className="text-gray-600 hover:text-blue-600" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;