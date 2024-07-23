import { FaCloudUploadAlt } from "react-icons/fa";
import { useRef} from "react";

const  LastPart=() => {

    const fileInputRef = useRef(null);

    const handleBrowseClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      // Handle file selection here
      console.log(event.target.files[0]);
    };
    
  return (
    <div>
       <div className="flex items-center justify-center space-x-5 space-y-5">
      <FaCloudUploadAlt className="text-4xl text-gray-600 mt-4" />
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Drop any file here or{' '}
          <button
            type="button"
            onClick={handleBrowseClick}
            className="text-blue-500 underline focus:outline-none"
          >
            browse
          </button>
        </h1>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
    </div>
  )
}

export default LastPart
