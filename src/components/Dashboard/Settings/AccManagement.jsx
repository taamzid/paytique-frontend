import { useState } from "react";
import Modal from "./Modal";
import dd from "../../../assets/overview/dd.svg";
import dropBlue from "../../../assets/settings/dropBlue.svg";
import userM from "../../../assets/settings/userM.svg";
import userX from "../../../assets/settings/userX.svg";

const AccManagement = () => {
  const [accOpen, isAccOpen] = useState(false);
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleAccOpen = () => {
    isAccOpen((prev) => !prev);
  };

  const handleDeactivateClick = () => {
    setDeactivateModalOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeactivateCloseModal = () => {
    setDeactivateModalOpen(false);
  };

  const handleDeleteCloseModal = () => {
    setDeleteModalOpen(false);
  };

  const handleConfirmDeactivate = () => {
    setDeactivateModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setDeleteModalOpen(false);
  };
  return (
    <div>
      <div className="flex items-center justify-center" onClick={handleAccOpen}>
        <div
          className={`flex items-center justify-between slg:mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-full h-[70px] cursor-pointer ${
            accOpen ? "bg-[#F3F3F3]" : ""
          }`}
        >
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[#3F4254] text-[18px] font-semibold">
              Account Management
            </h1>
          </div>
          <img src={accOpen ? dropBlue : dd} alt="dd" />
        </div>
      </div>
      {accOpen && (
        <div className="flex items-center justify-center gap-[20px] mt-[20px]">
          <div
            className="border rounded-[10px] w-[235px] h-[56px] flex items-center justify-center gap-[10px] cursor-pointer"
            onClick={handleDeactivateClick}
          >
            <img src={userM} alt="userM" className="w-[24px]" />
            <h1 className="text-[#3F4254]">Deactivate Account</h1>
          </div>
          <div
            className="border rounded-[10px] w-[235px] h-[56px] flex items-center justify-center gap-[10px] cursor-pointer"
            onClick={handleDeleteClick}
          >
            <img src={userX} alt="user" className="w-[24px]" />
            <h1 className="text-[#3F4254]">Delete Account</h1>
          </div>
        </div>
      )}
      <Modal
        isOpen={isDeactivateModalOpen}
        onClose={handleDeactivateCloseModal}
        onConfirm={handleConfirmDeactivate}
        title={
          <>
            Are you sure you want to deactivate <br /> your account?
          </>
        }
        deleteMessage="Deactivate Account"
      />
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleConfirmDelete}
        title={
          <>
            Are you sure you want to delete <br /> your account?
          </>
        }
        deleteMessage="Delete Account"
      />
    </div>
  );
};

export default AccManagement;
