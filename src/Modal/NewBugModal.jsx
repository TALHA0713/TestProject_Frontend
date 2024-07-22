import { Modal } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { IoIosMore } from "react-icons/io";
import Avatar from "../Componenet/Avatar/AvatarCompnent";
import { CiCalendarDate } from "react-icons/ci";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NewBugModal = ({ open, handleClose }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const data = [
    {
      uri: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/jgreiner.png",
      alt: "hello",
    },
    {
      uri: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/jgreiner.png",
      alt: "hello",
    },
    {
      uri: "",
      alt: "hello",
    },
    {
      uri: "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png",
      alt: "hello",
    },
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-lg h-[800px] w-[650px] flex flex-col">
        <div className="h-[9%] w-full bg-gray-200 shadow-lg flex items-center justify-end p-4">
          <button
            onClick={handleClose}
            className="bg-black text-white font-semibold rounded-md px-3 py-3 flex items-center"
          >
            <RxCross1 className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="w-full h-[12%] bg-gray-100 shadow-lg grid grid-cols-2 items-center p-4">
            <span className="text-gray-700 font-poppins text-custom-lg font-bold leading-custom-md ">
              Add new bug
            </span>
            <div className="flex justify-end">
              <IoIosMore className="text-gray-500 text-4xl  cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center py-5 px-5 border-2 border-red-300 space-x-4">
      <h1 className="mr-7">Assign to</h1>
      <div className="flex items-center">
        {data && data.map((item, index) => (
          <Avatar key={index} uri={item.uri} alt={item.alt} />
        ))}
      </div>
      <h1 className="ml-7">Add Due Date</h1>
      <div 
        className="border-2 border-gray-300 border-dashed rounded-full h-[50px] w-[50px] flex items-center justify-center cursor-pointer" 
        onClick={handleCalendarClick}
      >
        <CiCalendarDate className="text-3xl" />
      </div>
      {showCalendar && (
        <div className="absolute mt-4">
         
        </div>
      )}
    </div>
        </div>

        <div className="h-[9%] w-full bg-gray-100 shadow-lg flex justify-end items-center p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md px-16 py-2">
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewBugModal;
