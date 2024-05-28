import { useState } from "react";
import dd from "../../../assets/overview/dd.svg";
import dropBlue from "../../../assets/settings/dropBlue.svg";
import pass from "../../../assets/settings/pass.svg";
import mail from "../../../assets/settings/mail.svg";
import key from "../../../assets/settings/key.svg";
import app from "../../../assets/settings/app.svg";
import ModalPass from "./ModalTwo";
import ModalEmail from "./ModalEmail";

const Security = () => {
  const [accOpen, isAccOpen] = useState(false);
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isTwoModalOpen, setTwoModalOpen] = useState(false);
  const [isLockModalOpen, setLockModalOpen] = useState(false);

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
  const handleLockClick = () => {
    setLockModalOpen(true);
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
  const handleLockCloseModal = () => {
    setLockModalOpen(false);
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
  const handleConfirmLock = () => {
    setLockModalOpen(false);
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
              Security
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
              <img src={pass} alt="userM" className="w-[20px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">Change Password</h1>
            </div>
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleDeleteClick}
            >
              <img src={mail} alt="user" className="w-[18px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">Change Email</h1>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[10px] smd:gap-[20px] mt-[20px]">
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleTwoClick}
            >
              <img src={key} alt="userM" className="w-[16px] smd:w-[20px]" />
              <h1 className="text-[#3F4254]">Two Step Verification</h1>
            </div>
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleLockClick}
            >
              <img src={app} alt="user" className="w-[14px] smd:w-[16px]" />
              <h1 className="text-[#3F4254]">App Lock</h1>
            </div>
          </div>
        </div>
      )}
      <ModalPass
        isOpen={isDeactivateModalOpen}
        onClose={handleDeactivateCloseModal}
        onConfirm={handleConfirmDeactivate}
        title={<>Change Your Password.</>}
        deleteMessage="Save Changes"
      />
      <ModalEmail
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleConfirmDelete}
        title={<>Enter Password to Continue</>}
        deleteMessage="Proceed"
      />
      <ModalEmail
        isOpen={isTwoModalOpen}
        onClose={handleTwoCloseModal}
        onConfirm={handleConfirmTwo}
        title={<>Enter Password to Continue</>}
        deleteMessage="Proceed"
      />
      <ModalEmail
        isOpen={isLockModalOpen}
        onClose={handleLockCloseModal}
        onConfirm={handleConfirmLock}
        title={<>Are You Sure You Want to Lock App?</>}
        deleteMessage="Yes, Lock App"
      />
    </div>
  );
};

export default Security;
