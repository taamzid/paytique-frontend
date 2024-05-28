import { useState } from "react";
import dd from "../../../assets/overview/dd.svg";
import dropBlue from "../../../assets/settings/dropBlue.svg";
import bell from "../../../assets/settings/bell.svg";
import theme from "../../../assets/settings/theme.svg";
import sound from "../../../assets/settings/sound.svg";
import ModalPass from "./ModalTwo";
import ModalEmail from "./ModalEmail";
import AppModal from "./AppModal";

const AppSettings = () => {
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
              App Settings
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
              <img src={bell} alt="userM" className="w-[20px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">Notifications</h1>
            </div>
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleDeleteClick}
            >
              <img src={theme} alt="user" className="w-[18px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">App Theme</h1>
            </div>
            <div
              className="border rounded-[10px] text-[14px] smd:text-[16px] w-[175px] h-[44px] smd:w-[235px] smd:h-[56px] flex items-center justify-center gap-[5px] smd:gap-[10px] cursor-pointer"
              onClick={handleTwoClick}
            >
              <img src={sound} alt="user" className="w-[18px] smd:w-[24px]" />
              <h1 className="text-[#3F4254]">App Sounds</h1>
            </div>
          </div>
        </div>
      )}
      <AppModal
        isOpen={isDeactivateModalOpen}
        onClose={handleDeactivateCloseModal}
        onConfirm={handleConfirmDeactivate}
        title={<>Make Changes to Notifications.</>}
        deleteMessage="Save Changes"
        s1="Email Notifications"
        s2="Phone Messages"
      />
      <AppModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleConfirmDelete}
        title={<>Choose a Theme for Your App.</>}
        deleteMessage="Save Changes"
        s1="Light Theme"
        s2="Dark Theme"
      />
      <AppModal
        isOpen={isTwoModalOpen}
        onClose={handleTwoCloseModal}
        onConfirm={handleConfirmTwo}
        title={<>Select Sound Preferences</>}
        deleteMessage="Save Changes"
        s1="On"
        s2="Off"
      />
    </div>
  );
};

export default AppSettings;
