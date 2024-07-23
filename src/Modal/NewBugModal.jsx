import { Modal } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import Upper from "../Componenet/NewBugModalComponent/Upper";
import MiddlePart from "../Componenet/NewBugModalComponent/MiddlePart";
import LastPart from "../Componenet/NewBugModalComponent/LastPart";

// eslint-disable-next-line react/prop-types
const NewBugModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-lg h-[900px] w-[700px] flex flex-col overflow-hidden">
        <div className="h-[9%] w-full bg-gray-200 shadow-lg flex items-center justify-end p-4">
          <button
            onClick={handleClose}
            className="bg-black text-white font-semibold rounded-md px-3 py-3 flex items-center"
          >
            <RxCross1 className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto ">
          <Upper />
          <MiddlePart />
          <LastPart />
        </div>

        <div className="h-[9%] w-full bg-gray-100 shadow-lg flex justify-end items-center p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md px-16 py-2">
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewBugModal;
