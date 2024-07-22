import img1 from "../images/left.jpg";
import { IoIosLock } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";



function SignUp() {
  return (
    //  left side
    <div className="w-screen h-screen border-2 border-red-500 flex">
      <div className="flex border-2 border-green-500 w-[40%]">
        <img src={img1} alt="image left side" className="h-auto w-full" />
      </div>

      {/* Right Side */}
      <div className="flex border-2 border-yellow-500 w-[60%] items-center justify-center">
        <div className="w-3/5 md:w-2/5 h-auto bg-white border-2 border-gray-500 p-4 rounded-lg">
          <p className="font-poppins text-custom-lg font-bold leading-custom-lg text-custom-text-lg mb-4">
            Sign Up
          </p>

          <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm mb-4">
          Please fill your information below
          </p>

          {/* Input Field */}
          <div className="flex flex-col gap-6 mb-4">
            <div className="relative bg-inherit flex items-center">
              <FaUserAlt className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 ring-1 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="username"
                className="absolute left-10 top-2.5 text-sm text-gray-500 bg-inherit px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            <div className="relative bg-inherit flex items-center">
              <IoPhonePortrait className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 ring-1 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="username"
                className="absolute left-10 top-2.5 text-sm text-gray-500 bg-inherit px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                Phone
              </label>
            </div>
            
            <div className="relative bg-inherit flex items-center">
              <IoMdMail className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 ring-1 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="username"
                className="absolute left-10 top-2.5 text-sm text-gray-500 bg-inherit px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                E-mail
              </label>
            </div>
            
            


            <div className="relative bg-inherit flex items-center">
              <IoIosLock className="absolute left-3 text-gray-500" size={20} />
              <input
                type="password"
                id="password"
                name="password"
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 ring-1 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="password"
                className="absolute left-10 top-2.5 text-sm text-gray-500 bg-inherit px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                Password
              </label>
            </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 w-[3\0%] text-white font-bold py-4 px-4 rounded flex text-custom-sm items-center">
            Sign Up
            <FaGreaterThan className="ml-6" />
          </button>
          <hr className="border: 1px mt-4  mtolid color-grey-400" />

          <div className="flex items-center mt-4">
            <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm">
            Already have an account?
            </p>
            <a href="/" className="text-blue-500 hover:underline ml-auto">
            Login to your account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;