import React from "react";

const AppModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  deleteMessage,
  s1,
  s2,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-[40px] smd:px-[70px] py-[30px] rounded-[10px] shadow-lg">
        <div>
          <h2 className="text-[18px] font-semibold text-left">{title}</h2>

          <div className="mt-[20px] w-full smd:w-[450px]">
            <input type="radio" />
            <label htmlFor="s1" className="ml-[10px] font-semibold">
              {s1}
            </label>
          </div>
          <div className="mt-[10px]">
            <input type="radio" />
            <label htmlFor="s2" className="ml-[10px] font-semibold">
              {s2}
            </label>
          </div>
        </div>

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

export default AppModal;
