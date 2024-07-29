import { Modal } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import Upper from "../Componenet/NewBugModalComponent/Upper";
import MiddlePart from "../Componenet/NewBugModalComponent/MiddlePart";
import LastPart from "../Componenet/NewBugModalComponent/LastPart";
import { useState } from "react";
import { toast } from "react-toastify"; // Import toast for notifications

// eslint-disable-next-line react/prop-types
const NewBugModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: null,
    project_id: '',
    assigned_to: '',
    created_by: '',
    screenshot: '', 
    type: 'bug',    
    status: 'new'   
  });

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);

    try {
      console.log(formData)
      const response = await fetch("http://localhost:4444/api/addBug", {
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

      // Reset form data to initial values
      setFormData({
        title: "",
        description: "",
        deadline: null,
        project_id: "",
        assigned_to: "",
        created_by: "",
        screenshot: "hi.png", 
        type: 'bug',    
        status: 'new'   
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

  const handleAddClick = () => {
    if (!isPending) {
      handleSubmit();
    }
  };

  const handleErrorResponse = (responseBody) => {
    // Handle different types of error responses here
    toast.error(`Error: ${responseBody.message || "An error occurred"}`, {
      autoClose: 2000,
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-lg h-[800px] w-[650px] flex flex-col overflow-hidden">
        <div className="h-[9%] w-full bg-gray-200 shadow-lg flex items-center justify-end p-4">
          <button
            onClick={handleClose}
            className="bg-black text-white font-semibold rounded-md px-3 py-3 flex items-center"
          >
            <RxCross1 className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Upper />
          <MiddlePart formData={formData} setFormData={setFormData} />
          <LastPart />
        </div>
        
        <div className="h-[9%] w-full bg-gray-100 shadow-lg flex justify-end items-center p-4">
          <button 
            onClick={handleAddClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md px-16 py-2"
            disabled={isPending}
          >
            {isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewBugModal;
