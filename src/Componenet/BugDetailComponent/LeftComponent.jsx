import Avatar from "../Avatar/AvatarCompnent";
import { IoIosMore } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import LastPart from "../NewBugModalComponent/LastPart";

function LeftComponent() {
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
    <div className="bg-white w-1/2 border-r border-gray-300 flex flex-col">
    <div className="flex items-center w-full h-[10%] p-2 gap-2">
      <div className="bg-blue-100 w-[20%] h-[50%] rounded-lg flex items-center justify-center">
        In progress
      </div>
      <div className="bg-blue-100 w-[4%] h-[50%] rounded-lg flex items-center justify-center">
        i
      </div>

      <div className="flex flex-1 ml-6">
        {data &&
          data.map((item, index) => (
            <Avatar key={index} uri={item.uri} alt={item.alt} />
          ))}
      </div>
      <div className="flex items-center ml-4">
        <IoIosMore className="text-gray-500 text-4xl cursor-pointer" />
      </div>
    </div>
    <hr />
    <div className="flex-1 flex flex-col m-7">
      <span className="text-3xl">
        Convert the audio file received from Mobile app into text
      </span>
      <div className="flex flex-col items-center justify-center border-2 border-gray-200 border-dashed p-4 h-38 my-5">
        <FaUpload className="h-12 w-12 text-gray-500" />{" "}
        {/* Increased icon size */}
        <span className="text-gray-400 mt-3 text-lg">
          Add image here
        </span>{" "}
        {/* Increased text size */}
      </div>
      <span className="font-1xl">Bug detail</span>

      <div className="py-3">
        <input
          type="text"
          placeholder="Enter details here..."
          className="w-full px-4 py-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-500"
        />
      </div>
    </div>
    <div className="h-[10%] bg-gray-100 shadow-lg w-full">
      <LastPart />
    </div>
  </div>
  )
}

export default LeftComponent
