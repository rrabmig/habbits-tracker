import React from "react";
import { useModals } from "@/store/store";

import AddHabbitModal from "./AddHabbitModal";
import EditHabbitModal from "./EditHabbitModal";
import SettingsModal from "./SettingsModal";

const Modal = () => {
  const modalType = useModals((state) => state.modalType);
  const setModalType = useModals((state) => state.setModalType);

  const closeModal = () => {
    setModalType("");
  };

  switch (modalType) {
    case "addHabbit":
      return (
        <AddHabbitModal
          closeModal={closeModal}
          visible={modalType === "addHabbit"}
        />
      );
    case "editHabbit":
      return (
        <EditHabbitModal
          closeModal={closeModal}
          visible={modalType === "editHabbit"}
        />
      );
    case "settings":
      return (
        <SettingsModal
          closeModal={closeModal}
          visible={modalType === "settings"}
        />
      );
    default:
      return null;
  }
};

export default Modal;
