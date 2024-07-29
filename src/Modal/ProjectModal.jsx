import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AssignTo from "./AssignTo";

// eslint-disable-next-line react/prop-types
const ProjectModal = ({ open, handleClose }) => {
  
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    detail: "",
    manager_id: "",
    selectedUserId: "", // Single user ID
  });

  const handleUserSelection = (userIds) => {
    const selectedUserId = userIds.length > 0 ? userIds[0] : "";
    setFormData((prevData) => ({
      ...prevData,
      selectedUserId,
    }));
  };

  
  useEffect(() => {
    const token1 = sessionStorage.getItem("token");
    if (token1) {
      try {
        const decodedToken = JSON.parse(token1);
        const tokenPayload = JSON.parse(atob(decodedToken.token.split(".")[1]));
        setFormData((prevData) => ({
          ...prevData,
          manager_id: tokenPayload.id.toString(),
        }));
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      navigate("/signIn");
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const response = await fetch("http://localhost:4444/api/addProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        handleErrorResponse(responseBody);
        return;
      }

      // Reset form data and close modal
      setFormData({
        name: "",
        detail: "",
        manager_id: "",
        selectedUserId: "",
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

  // Handle different types of error responses
  const handleErrorResponse = (responseBody) => {
    switch (responseBody.statusCode) {
      case 400:
        toast.error("Bad Request - Invalid data", { autoClose: 2000 });
        break;
      case 401:
        toast.error("Unauthorized - Please log in again", { autoClose: 2000 });
        break;
      default:
        toast.error("An unexpected error occurred", { autoClose: 2000 });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="project-modal bg-white rounded-md shadow-lg h-[450px] w-[800px] p-8 flex flex-col">
        <h2 className="text-2xl mb-4 text-left">Add New Project</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex w-full space-x-4">
            {/* Left side */}
            <div className="w-[60%] space-y-6">
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
                  htmlFor="detail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Short Details
                </label>
                <input
                  type="text"
                  id="detail"
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter details here"
                />
              </div>
              <div>
              <AssignTo 
  onChange={handleUserSelection} 
  isDeveloperOnly={false} 
/>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-center justify-center w-[40%] h-[70%]">
              <div className="flex flex-col items-center justify-center w-[60%] h-[80%] border-dashed border-2 border-gray-700 rounded-lg p-4">
                <FaUpload className="text-gray-400 text-3xl mb-2" />
                <span className="text-gray-400 text-lg">
                  Upload project photo
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-20 rounded"
              disabled={isPending}
            >
              {isPending ? "Adding..." : "Add"}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="hover:bg-gray-400 text-gray-700 font-semibold py-3 px-20 rounded border border-black"
            >
              Cancel
            </button>
          </div>
        </form>
        <ToastContainer position="top-right" style={{ marginTop: "0rem" }} />
      </div>
    </Modal>
  );
};

export default ProjectModal;
