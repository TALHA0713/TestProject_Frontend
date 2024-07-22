import { Modal } from "@mui/material";
import { FaUpload } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProjectModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="project-modal bg-white rounded-md shadow-lg h-[400px] w-[800px] p-8">
        <h2 className="text-2xl mb-4 text-left">Add new Project</h2>

        <div className="flex w-full h-[188px] space-x-4">
          <div className="w-[60%] h-full space-y-4">
            <div>
              <label
                htmlFor="projectName"
                className="block text-md font-medium text-gray-700"
              >
                Project name
              </label>
              <input
                type="text"
                id="projectName"
                className="mt-1 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label
                htmlFor="shortDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Short details
              </label>
              <input
                type="text"
                id="shortDetails"
                className="mt-1 block w-full  px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter details here"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center justify-center w-[40%]">
            <div className="flex flex-col items-center justify-center w-[60%] h-[80%] border-dashed border-2 border-gray-700 rounded-lg p-4">
              <FaUpload className="text-gray-400 text-3xl mb-2" />
              <span className="text-gray-400 text-lg">
                Upload project photo
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white  font-semibold py-3 px-20 rounded">
            Add
          </button>
          <button
            onClick={handleClose}
            className="hover:bg-gray-400  text-gray-700 font-semibold py-3 px-20 rounded border border-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
