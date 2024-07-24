import img1 from "../images/left.jpg";
import { IoIosLock } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function SignIn() {
  return (
    //  left side
    <div className="w-screen h-screen  flex">
      <div className="flex  w-[40%]">
        <img src={img1} alt="image left side" className="h-auto w-full" />
      </div>

      {/* Right Side */}
      <div className="flex  w-[60%] items-center justify-center">
        <div className="w-3/5 md:w-2/5 h-auto bg-white  p-4 rounded-lg">
          <p className="font-poppins text-custom-lg font-bold leading-custom-lg text-custom-text-lg mb-4">
            Login
          </p>

          <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm mb-4">
            Please enter your login details
          </p>

          {/* Input Field */}
          <div className="flex flex-col gap-6 mb-4">
          <div className="relative bg-inherit flex items-center">
              <IoMdMail className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Type inside me"
              />
              <label
                htmlFor="username"
                className="absolute left-10 -top-2.5 text-sm text-gray-500 bg-gray-100 px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:bg-white peer-focus:outline-none"
              >
                Name
              </label>
            </div>

            <div className="relative bg-inherit flex items-center">
              <IoIosLock className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Type inside me"
              />
              <label
                htmlFor="username"
                className="absolute left-10 -top-2.5 text-sm text-gray-500 bg-gray-100 px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:bg-white peer-focus:outline-none"
              >
                Name
              </label>
            </div>
</div>



          <button className="bg-blue-500 hover:bg-blue-700 w-[30%] text-white font-bold py-4 px-4 rounded flex text-custom-sm items-center">
            login
            <FaGreaterThan className="ml-8" />
          </button>
          <hr className="border: 1px mt-4  mtolid color-grey-400" />

          <div className="flex items-center mt-4">
            <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm">Don’t have an account?</p>
            <a href="/" className="text-blue-500 hover:underline ml-auto">
              Create account
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
