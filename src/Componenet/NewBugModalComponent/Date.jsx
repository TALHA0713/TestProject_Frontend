import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// eslint-disable-next-line react/prop-types
const BasicDatePicker = ({ selectedDate, onDateChange }) => {
  const [showLabel, setShowLabel] = useState(true);

  const handleDateChange = (date) => {
    onDateChange(date); 
    setShowLabel(false); 
  };

  const handleClick = () => {
    setShowLabel(false); // Hide the label when the date picker is clicked
  };

  return (
    <div className="w-full h-24 flex flex-col relative">
      {showLabel && (
        <label className="absolute top-2 left-4 text-lg mb-2 transition-opacity duration-300 ease-in-out">
          Deadline
        </label>
      )}
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        showYearDropdown
        className="w-full h-10 border rounded-sm hover:border-blue-400"
        onClick={handleClick}
      />
    </div>
  );
};

export default BasicDatePicker;
