import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast for notifications

// eslint-disable-next-line react/prop-types
const ProjectModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    detail: '',
    manager_id: '',
    ss: 'hi' // Assuming 'ss' is another form field; adjust as needed
  });

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token1 = sessionStorage.getItem("token");
    if (token1) {
      try {
        const decodedToken = JSON.parse(token1);
        const token = decodedToken.token;
        const arrayToken = token.split(".");
        const tokenPayload = JSON.parse(atob(arrayToken[1]));
        const userId = tokenPayload.id.toString();
        setFormData((prevData) => ({
          ...prevData,
          manager_id: userId
        }));
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      return;
    }
    navigate('/signIn'); 
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      };
      console.log(formData)

      const response = await fetch('http://localhost:4444/api/addProject', requestOptions);
      const responseBody = await response.json();

      if (!response.ok) {
        if (responseBody.statusCode === 400) {
          toast.error("Bad Request - Invalid data", { autoClose: 2000 });
        } else if (responseBody.statusCode === 401) {
          toast.error("Unauthorized - Please log in again", { autoClose: 2000 });
        } else {
          toast.error("An unexpected error occurred", { autoClose: 2000 });
        }
        return;
      }
     
      setFormData({
        name: '',
        detail: '',
        manager_id: '',
        ss: 'hi'
      });
        
      handleClose(); 
        
      } catch (error) {
      toast.error("Server does not respond, please try again later", {
        autoClose: 2000,
      });
      console.error("There was a problem with the POST request:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="project-modal bg-white rounded-md shadow-lg h-[400px] w-[800px] p-8">
        <h2 className="text-2xl mb-4 text-left">Add new Project</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex w-full h-[188px] space-x-4">
            <div className="w-[60%] h-full space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label
                  htmlFor="shortDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Short Details
                </label>
                <input
                  type="text"
                  id="detail"
                  name="detail"
                  value={formData.shortDetails}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter details here"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-center justify-center w-[40%]">
              <div className="flex flex-col items-center justify-center w-[60%] h-[80%] border-dashed border-2 border-gray-700 rounded-lg p-4">
                <FaUpload className="text-gray-400 text-3xl mb-2" />
                <span className="text-gray-400 text-lg">Upload project photo</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-20 rounded"
              disabled={isPending}
            >
              {isPending ? 'Adding...' : 'Add'}
            </button>
            <button
              onClick={handleClose}
              className="hover:bg-gray-400 text-gray-700 font-semibold py-3 px-20 rounded border border-black"
            >
              Cancel
            </button>
          </div>
          <ToastContainer position="top-right" style={{ marginTop: "0rem" }} />
        </form>
      </div>
    </Modal>
  );
};

export default ProjectModal;
