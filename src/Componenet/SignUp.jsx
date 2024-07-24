import img1 from "../images/left.jpg";
import { IoIosLock } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required"),
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
      phone: "",
      name:""

    },
    validationSchema,
    onSubmit: handleSubmitForm,
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    //  left side
    <div className="w-screen h-screen flex">
      <div className="flex  w-[40%]">
        <img src={img1} alt="image left side" className="h-auto w-full" />
      </div>

      {/* Right Side */}
      <form
        onSubmit={handleSubmit}
        className="flex  w-[60%] items-center justify-center"
      >
        <div className="w-3/5 md:w-2/5 h-auto bg-white  p-4 rounded-lg">
          <p className="font-poppins text-custom-lg font-bold leading-custom-lg text-custom-text-lg mb-4">
            Sign Up
          </p>

          <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm mb-4">
            Please fill your information below
          </p>

          {/* Input Field */}
          <div className="flex flex-col gap-8 mb-8">

          <div className="relative bg-inherit flex items-center">
              <FaUserAlt className="absolute left-3 text-gray-500" size={20} />
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="name"
              />
              {touched.name && errors.name && (
                <p className="text-sm absolute top-12 start flex text-red-500">
                  {errors.name}
                </p>
              )}
              <label
                htmlFor="name"
                className="absolute left-10 -top-2.5 text-sm text-gray-500 bg-gray-100 px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:bg-white peer-focus:outline-none"
              >
                Name
              </label>
            </div>


           
            <div className="relative bg-inherit flex items-center">
              <IoPhonePortrait className="absolute left-3 text-gray-500" size={20} />
              <input
                type="number"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer bg-[rgba(245,245,247,1)] w-full h-12 rounded-lg text-gray-700 placeholder-transparent pl-10 pr-2 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="phone"
              />
              {touched.phone && errors.phone && (
                <p className="text-sm absolute top-12 start flex text-red-500">
                  {errors.phone}
                </p>
              )}
              <label
                htmlFor="Phone"
                className="absolute left-10 -top-2.5 text-sm text-gray-500 bg-gray-100 px-1 transition-all duration-300 ease-in-out transform peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-10 peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:bg-white peer-focus:outline-none"
              >
                Phone
              </label>
            </div>



            <div className="relative bg-inherit flex items-center">
              <IoMdMail className="absolute left-3 text-gray-500" size={20} />
              <input
                type="email"
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

          <button  type="submit" className="bg-blue-500 hover:bg-blue-700 w-[3\0%] text-white font-bold py-4 px-4 rounded flex text-custom-sm items-center">
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
      </form>
    </div>
  );
}

export default SignUp;
