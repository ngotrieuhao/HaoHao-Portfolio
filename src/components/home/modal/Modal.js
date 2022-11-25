import React, { Fragment } from "react";

const Modal = ({ open = false, handleClose = () => {}, image = "" }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return (
    <Fragment>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center  p-5  modal ${
          open ? "" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-25 overlay-modal"
          onClick={handleClose}
        ></div>
        <div className="modal-content bg-white relative z-10 p-2 rounded-lg w-full max-w-[482px]">
          <span
            className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#2C2325"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <img src={`./${image}`} alt="qrcode" />
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
