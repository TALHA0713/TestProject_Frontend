import img1 from "../images/left.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function UserType() {

  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    navigate(`/signup?role=${encodeURIComponent(role)}`);
  };


  let data = ["developer","qa","manager"];
  return (
    //  left side
    <div className="w-screen h-screen flex">
      <div className="flex  w-[40%]">
        <img src={img1} alt="image left side" className="h-auto w-full" />
      </div>

     {/* Right Side */}
     <div className="flex flex-col  w-[60%] relative">

  <div className="flex justify-end p-4">
    <div className="font-poppins text-right text-gray-400 text-2xl p-4">
      Already have an account?{' '}
      <span className="text-blue-500 hover:underline">
        <Link to="/signIn">Sign In</Link>
      </span>
    </div>
  </div>

  {/* Existing Content */}
  <div className="flex flex-grow justify-center items-center w-full"> 
    <div className="w-3/5 md:w-2/5 h-auto bg-white  p-4 rounded-lg">
      
      <p className="font-poppins text-custom-lg font-bold  mb-4">
        Join Us!
      </p>

      <p className="font-poppins text-custom-text-sm ">
        To begin this journey, tell us what type of account you’d be opening.
      </p>

      <div className="flex flex-col gap-4 mt-5">
      {data.map((role, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border-2 hover:border-blue-500 p-4 flex-1 hover:bg-gray-100 rounded-lg min-h-[30px] md:min-h-[70px] lg:min-h-[100px] group"
          onClick={() => handleRoleClick(role)}
        >
          <div className="flex-shrink-0">
            <FiUser className="w-7 h-7 text-blue-500" />
          </div>
          <div className="flex-1">
            <h1 className="font-poppins text-custom-text-lg text-lg font-bold">
              {role.toUpperCase()}
            </h1>
            <p className="font-poppins text-sm text-custom-text-sm">
              Signup as a {role.toLowerCase()} to manage tasks and bugs
            </p>
          </div>
          <div className="flex-shrink-0">
            <FaArrowRight className="w-6 h-6 mt-4 text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-opacity duration-300" />
          </div>
        </div>
      ))}
        
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default UserType;
