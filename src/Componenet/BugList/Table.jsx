/* eslint-disable no-unused-vars */
// import { Avatar } from "@mui/material";
import AvatarGroup from "../Avatar/AvatarGroup";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import Menu from './Menu'
import { useState,useEffect,useRef } from "react";
// eslint-disable-next-line react/prop-types
function Table({onClose}) {

  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRef = useRef(null);

  const handleToggleMenu = (index) => {
    setOpenMenuIndex(prevIndex => prevIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCloseMenu = () => {
    setOpenMenuIndex(null);
  };
  
    const rows = [
        { details: "Convert the audio file received from Mobile afile received from Mobile afile received from Mobile afile received from Mobile afile received from Mobile afile received from Mobile audio  ", state: "Bug", status: "Pending", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "In progress", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Feature", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Pending", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Bug", status: "Closed", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
        { details: "Convert the audio file received from Mobile", state: "Feature", status: "Pending", dueDate: "", assignedTo: ["user1.jpg", "user2.jpg"] },
      ];
    
      const getStatusColor = (status) => {
        switch (status) {
          case 'Pending':
            return 'text-red-500 bg-red-100';
          case 'In progress':
            return 'text-blue-500 bg-blue-100';
          case 'Closed':
            return 'text-green-500 bg-green-100';
          default:
            return '';
        }
      };

      const truncateText = (text, wordLimit = 8) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
      };


  return (
    <section className='container mx-auto justify-between items-center py-4 '>
    {/* <div className="overflow-x-auto"> */}
      <table className="  w-full bg-white border border-gray-200  ">
        <thead className='bg-gray-100 text-sm text-gray-500'>
          <tr>
            <th className="py-2 border-b border-r-gray-400 "><div className='px-4 w-full border-r-2 border-gray-300'><input type="checkbox" id="checkbox" className="mr-2"/></div></th>
            <th className="py-2 border-b border-r-gray-300 text-start "><div className='px-4 w-full border-r-2 border-gray-300'>BUG DETAILS</div></th>
            <th className="py-2 border-b border-r-gray-300 text-start"><div className='px-4 w-full border-r-2 border-gray-300'>STATUS</div></th>
            <th className="py-2 border-b border-r-gray-300 "><div className='px-4 w-full border-r-2 border-gray-300'>DUE DATE</div></th>
            <th className="py-2 border-b border-r-gray-300 "><div className='px-4 w-full border-r-2 border-gray-300'>ASSIGNED TO</div></th>
            <th className=""><div className=''>ACTION</div></th>

          </tr>
        </thead>
        <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="border-b">
            <td className='text-center text-custom-text-sm'> 
              <input type="checkbox" id="checkbox" className="mr-2"/>
            </td>
            <td className="py-2 px-4 text-custom-text-sm text-sm">
              {truncateText(row.details)}
            </td>
            <td className={`py-2 px-4`}>
              <span className={` ${getStatusColor(row.status)} py-1 rounded`}>{row.status}</span>
            </td>
            <td className="py-2 px-4">
              <FaRegCalendarMinus className='text-gray-400 w-full'/>
            </td>
            <td className="py-2 px-4 flex space-x-2 items-center justify-center">
              <AvatarGroup className="text-gray-600 px-0 text-xl"/>
              {/* Render user avatars if available */}
            </td>
            <td className='relative'>
                <div className='relative'>
                  <FaEllipsisV 
                    className='text-gray-600 w-full text-center cursor-pointer'
                    onClick={() => handleToggleMenu(index)}
                  />
                  {openMenuIndex === index && (
                    <div ref={menuRef}>
                      <Menu onClose={handleCloseMenu} />
                    </div>
                  )}
                </div>
              </td>
          </tr>
        ))}
      </tbody>  
      </table>
    {/* </div> */}

    </section>
  )
}

export default Table