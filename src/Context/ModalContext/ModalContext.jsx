import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalComponent = ({ onClose }) => (
  <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/30 bg-opacity-50">
    <div className="bg-secondary p-8 rounded-lg shadow-lg relative">
      <button
        className="absolute -right-3 -top-3 bg-purple-500/40 backdrop-blur-sm text-white rounded-full w-8 h-8 flex items-center justify-center"
        onClick={onClose}
      >
        X
      </button>
      <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
      <p className="mb-4">Please connect your wallet to continue.</p>
      <button
        onClick={onClose}
        className="bg-purple-500 text-white px-4 py-2 rounded-md"
      >
        Connect Wallet
      </button>
    </div>
  </div>
);

export const NotifyConnectWalletProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const globalStates = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={globalStates}>
      {isModalOpen && <ModalComponent onClose={closeModal} />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};