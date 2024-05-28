import { useState } from "react";
import Modal from "./Modal";
import dd from "../../../assets/overview/dd.svg";
import dropBlue from "../../../assets/settings/dropBlue.svg";
import deleteD from "../../../assets/settings/delete.svg";
import request from "../../../assets/settings/request.svg";
import refresh from "../../../assets/settings/refresh.svg";
import ModalPass from "./ModalTwo";
import ModalEmail from "./ModalEmail";

const PrivacyData = () => {
  const [accOpen, isAccOpen] = useState(false);
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isTwoModalOpen, setTwoModalOpen] = useState(false);

  const handleAccOpen = () => {
    isAccOpen((prev) => !prev);
  };

  const handleDeactivateClick = () => {
    setDeactivateModalOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };
  const handleTwoClick = () => {
    setTwoModalOpen(true);
  };

  const handleDeactivateCloseModal = () => {
    setDeactivateModalOpen(false);
  };
  const handleDeleteCloseModal = () => {
    setDeleteModalOpen(false);
  };
  const handleTwoCloseModal = () => {
    setTwoModalOpen(false);
  };

  const handleConfirmDeactivate = () => {
    setDeactivateModalOpen(false);
  };
  const handleConfirmDelete = () => {
    setDeleteModalOpen(false);
  };
  const handleConfirmTwo = () => {
    setTwoModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center" onClick={handleAccOpen}>
        <div
          className={`flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-full h-[70px] cursor-pointer ${
            accOpen ? "bg-[#F3F3F3]" : ""
          }`}
        >
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[#3F4254] text-[18px] font-semibold">
              Privacy & Data
            </h1>
          </div>
          <img src={accOpen ? dropBlue : dd} alt="dd" />
        </div>
      </div>
      {accOpen && (
        <div>
          <div className="flex items-center justify-center gap-[10px] smd:gap-[20px] mt-[20px]">
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleDeactivateClick}
            >
              <img
                src={deleteD}
                alt="userM"
                className="w-[20px] smd:w-[24px]"
              />
              <h1 className="text-[#3F4254]">Delete Data</h1>
            </div>
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleDeleteClick}
            >
              <img src={request} alt="user" className="w-[16px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">Request Data</h1>
            </div>
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleTwoClick}
            >
              <img src={refresh} alt="user" className="w-[18px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">Clear Cache</h1>
            </div>
          </div>
        </div>
      )}
      <ModalEmail
        isOpen={isDeactivateModalOpen}
        onClose={handleDeactivateCloseModal}
        onConfirm={handleConfirmDeactivate}
        title={<>Enter Password to Continue.</>}
        deleteMessage="Proceed"
      />
      <ModalEmail
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleConfirmDelete}
        title={<>Do You Want to Proceed?</>}
        deleteMessage="Yes"
      />
      <ModalEmail
        isOpen={isTwoModalOpen}
        onClose={handleTwoCloseModal}
        onConfirm={handleConfirmTwo}
        title={<>Do You Want to Proceed?</>}
        deleteMessage="Yes"
      />
    </div>
  );
};

export default PrivacyData;
