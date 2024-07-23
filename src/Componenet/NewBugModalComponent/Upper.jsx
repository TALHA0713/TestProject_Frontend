import { IoIosMore } from "react-icons/io";

function Upper() {
  return (
    <div className="w-full h-[12%] bg-gray-100 shadow-lg grid grid-cols-2 items-center p-5">
            <span className="text-gray-700 font-poppins text-custom-lg font-bold leading-custom-md">
              Add new bug
            </span>
            <div className="flex justify-end">
              <IoIosMore className="text-gray-500 text-4xl cursor-pointer" />
            </div>
          </div>
  )
}

export default Upper
