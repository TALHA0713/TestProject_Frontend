import AvatarGroup from "../Avatar/AvatarGroup";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "./Menu";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { toast } from "react-toastify";

function Table() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [selectedBug, setSelectedBug] = useState(null); // Add state to store selected bug
  const menuRef = useRef(null);

  const handleToggleMenu = (index, bug) => {
    setSelectedBug(bug); // Store selected bug
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCloseMenu = () => {
    setOpenMenuIndex(null);
    setSelectedBug(null); 
  };

  useEffect(() => {
    const fetchData = async () => {
      const token1 = sessionStorage.getItem("token");
      if (token1) {
        try {
          const decodedToken = JSON.parse(token1);
          const token = decodedToken.token;
          const arrayToken = token.split(".");
          const tokenPayload = JSON.parse(atob(arrayToken[1]));
          const userId = tokenPayload.id.toString();

          try {
            const response = await axios.get(
              `http://localhost:4444/api/getBugsForDeveloper/${userId}`
            );
            if (response.status === 200) {
              setData(response.data);
            } else {
              const errorMessage =
                response.data.error ||
                "Error fetching data. Please try again later.";
              setError(errorMessage);
              toast.error(errorMessage);
            }
          } catch (error) {
            const errorMessage =
              error.response?.data?.error ||
              "No Bugs Assign to this project";
            setError(errorMessage);
            toast.error(errorMessage);
          }
          setLoading(false);
        } catch (error) {
          const errorMessage = "Error decoding token. Please try again later.";
          setError(errorMessage);
          toast.error(errorMessage);
          setLoading(false);
        }
        return;
      }
      window.location.href = "/signIn";
    };
    fetchData();
  }, []);

  function formatDate(datetime) {
    const date = new Date(datetime);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "text-red-500 bg-red-100";
      case "started":
        return "text-blue-500 bg-blue-100";
      case "resolved":
        return "text-green-500 bg-green-100";
      case "completed":
        return "text-green-500 bg-green-100";
      default:
        return "";
    }
  };

  const truncateText = (text, wordLimit = 8) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      {!loading ? (
        error ? (
          <section className="container mx-auto py-4 text-red-500">
            <p>{error}</p>
          </section>
        ) : (
          <section className="container mx-auto py-4">
            <table className="w-full bg-white border border-gray-200">
              <thead className="bg-gray-100 text-sm text-gray-500">
                <tr>
                  <th className="py-2 border-b border-r-gray-400">
                    <div className="px-4 w-full border-r-2 border-gray-300">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="mr-2"
                        aria-label="Select all"
                      />
                    </div>
                  </th>
                  <th className="py-2 border-b border-r-gray-300 text-start">
                    <div className="px-4 w-full border-r-2 border-gray-300">
                      BUG DETAILS
                    </div>
                  </th>
                  <th className="py-2 border-b border-r-gray-300 text-center">
                    <div className="px-4 w-full border-r-2 border-gray-300">
                      STATUS
                    </div>
                  </th>
                  <th className="py-2 border-b border-r-gray-300">
                    <div className="px-4 w-full border-r-2 border-gray-300">
                      DUE DATE
                    </div>
                  </th>
                  <th className="py-2 border-b border-r-gray-300">
                    <div className="px-4 w-full border-r-2 border-gray-300">
                      ASSIGNED TO
                    </div>
                  </th>
                  <th className="py-2 border-b border-r-gray-300">
                    <div className="px-4 w-full border-r-2 border-gray-300">
                      ACTION
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b relative">
                    <td className="text-center text-custom-text-sm">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        className="mr-2"
                        aria-label={`Select item ${index}`}
                      />
                    </td>
                    <td className="py-2 px-4 text-custom-text-sm text-sm">
                      {truncateText(item.description)}
                    </td>
                    <td className="py-2 px-4 text-center">
                      <span
                        className={`${getStatusColor(
                          item.status
                        )} py-1 rounded w-24 inline-block`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center">
                      <span className="text-gray-400">
                        {formatDate(item.deadline)}
                      </span>
                    </td>
                    <td className="py-2 px-4 flex space-x-2 items-center justify-center">
                      <AvatarGroup className="text-gray-600 px-0 text-xl" />
                    </td>
                    <td className="py-2 px-4 text-center relative">
                      <button
                        className="text-gray-600 hover:text-gray-900"
                        onClick={() => handleToggleMenu(index, item)} // Pass entire item
                        aria-label={`More options for item ${index}`}
                      >
                        <FaEllipsisV />
                      </button>
                      {openMenuIndex === index && (
                        <div
                          ref={menuRef}
                          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg"
                        >
                          <Menu bug={selectedBug} onClose={handleCloseMenu} /> {/* Pass the selected bug */}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )
      ) : (
        <Backdrop open={loading} className="flex items-center justify-center">
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default Table;
