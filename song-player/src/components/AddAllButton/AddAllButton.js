import MusicUpload from "../MusicUploadForm/MusicUploadForm";
import { createContext, useState } from "react";
import "./style.css";

function AddAllButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleModalClose() {
    setModalOpen(true);
  }

  return (
    <div className="addAllContainer">
      <button className="modalButton" onClick={handleModalClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add All
      </button>
      <svg
        className="svgUpload"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="15px"
        height="15px"
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>down</title>
        <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z" />
      </svg>
      {isModalOpen && (
        <div className="addUpload">
          <div className="modalUpload">
            <MusicUpload setModalOpen={setModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

AddAllButton.displayName = "AddAllButton";

export default AddAllButton;
