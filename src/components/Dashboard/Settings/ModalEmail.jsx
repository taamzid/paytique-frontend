import React from "react";

const ModalEmail = ({ isOpen, onClose, onConfirm, title, deleteMessage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-[30px] py-[30px] rounded-[10px] shadow-lg">
        <h2 className="text-[18px] font-semibold text-center">{title}</h2>

        <input
          type="text"
          className="mt-[20px] mb-[10px] w-full smd:w-[450px] bg-[#F3F3F3] h-[50px] font-normal text-[18px] rounded-[6px] text-[#AFAFAF] px-[15px]"
          placeholder="Input password"
        />
        <div className="mt-[20px] flex items-center justify-center gap-[20px]">
          <button
            onClick={onClose}
            className="px-[20px] py-[10px] border rounded-[5px] text-[#3F4254]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="font-regular px-[20px] py-[10px] bg-[#196BFE] text-white rounded-[5px] hover:bg-[#196BFE]"
          >
            {deleteMessage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEmail;
