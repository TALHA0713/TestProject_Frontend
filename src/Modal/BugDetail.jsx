import { Modal } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import LeftComponent from "../Componenet/BugDetailComponent/LeftComponent";
import RightComponent from "../Componenet/BugDetailComponent/RightComponent";

// eslint-disable-next-line react/prop-types
const BugDetail = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="bg-transparent flex items-center justify-center w-full h-full">
        <div className="bg-gray-200 rounded-lg shadow-lg h-[90%] w-[85%] flex flex-col overflow-hidden">
          <div className="h-[9%] w-full bg-gray-100 flex items-center justify-end p-4">
            <button
              onClick={handleClose}
              className="bg-black text-white font-semibold rounded-md px-3 py-3 flex items-center"
            >
              <RxCross1 className="text-2xl" />
            </button>
          </div>

          <div className="flex-1 flex">
            <LeftComponent />

            <RightComponent />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BugDetail;
