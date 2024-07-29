import { useState, useEffect } from 'react';
import AssignTo from "../../Modal/AssignTo";
import Project from './ProjectId';
import BasicDatePicker from './Date';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

// eslint-disable-next-line react/prop-types
function MiddlePart({ formData, setFormData }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const navigate = useNavigate();

  const handleUserSelection = (selectedUserId) => {
    setFormData((prevData) => ({
      ...prevData,
      assigned_to: selectedUserId,
    }));
    console.log("Selected User ID:", selectedUserId);
  };

  const handleProjectSelection = (projectId) => {
    setFormData((prevData) => ({
      ...prevData,
      project_id: projectId,
    }));
    console.log("Selected Project ID:", projectId);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : null;
    setFormData((prevData) => ({
      ...prevData,
      deadline: formattedDate,
    }));
    console.log("Selected Date:", formattedDate);
  };

  useEffect(() => {
    const token1 = sessionStorage.getItem("token");
    if (token1) {
      try {
        const decodedToken = JSON.parse(token1);
        const tokenPayload = JSON.parse(atob(decodedToken.token.split(".")[1]));
        setFormData((prevData) => ({
          ...prevData,
          created_by: tokenPayload.id.toString(),
        }));
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      navigate("/signIn");
    }
  }, [navigate, setFormData]);

  return (
    <>
      <div className="pt-5 px-5 flex space-x-4">
        <div className="flex-1">
          <AssignTo 
            onChange={handleUserSelection} 
            isDeveloperOnly={true}
          />
        </div>
        <div className="flex-1"> 
          <Project onChange={handleProjectSelection} />
        </div>
        <div className="flex-1">
          <BasicDatePicker
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
      </div>

      <form className="mb-2">
        <input
          type="text"
          placeholder="Add title here"
          // eslint-disable-next-line react/prop-types
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-4 border-none text-4xl font-poppins"
        />
      </form>

      <span className="px-4 py-4">Bug details</span>
      <div className="px-3 py-3">
        <input
          type="text"
          placeholder="Enter details here..."
          // eslint-disable-next-line react/prop-types
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-500"
        />
      </div>
    </>
  );
}

export default MiddlePart;
