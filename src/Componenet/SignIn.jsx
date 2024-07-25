import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img1 from "../images/left.jpg";
import { IoIosLock } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmitForm = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmitForm,
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <div className="w-screen h-screen flex">
      <div className="flex w-[40%]">
        <img src={img1} alt="image left side" className="h-auto w-full" />
      </div>

      <form
        className="flex w-[60%] items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="w-3/5 md:w-2/5 h-auto bg-white p-4 rounded-lg">
          <p className="font-poppins text-custom-lg font-bold leading-custom-lg text-custom-text-lg mb-4">
            Login
          </p>

          <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm mb-4">
            Please enter your login details
          </p>

          {/* Input Fields */}
          <div className="flex flex-col gap-8 mb-8">
            <div className="relative bg-inherit flex items-center">
              <IoMdMail className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="email"
              />
              {touched.email && errors.email && (
                <p className="text-sm absolute top-12 start flex text-red-500">
                  {errors.email}
                </p>
              )}
              <label
                htmlFor="email"
                className="absolute left-10 -top-2.5 text-sm text-gray-500 bg-gray-100 px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:bg-white peer-focus:outline-none"
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
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="password"
              />
              {touched.password && errors.password && (
                <p className="text-sm absolute top-12 start flex text-red-500">
                  {errors.password}
                </p>
              )}
              <label
                htmlFor="password"
                className="absolute left-10 -top-2.5 text-sm text-gray-500 bg-gray-100 px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:bg-white peer-focus:outline-none"
              >
                Password
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md flex items-center justify-center w-[30%] text-sm transition-colors duration-300 ease-in-out"
          >
            Login
            <FaGreaterThan className="ml-3" />
          </button>

          <hr className=" mt-4" />

          <div className="flex items-center mt-4">
            <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm">
              Don’t have an account?
            </p>
            <Link to="/signUp" className="text-blue-500 hover:underline ml-auto">
              Create account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
