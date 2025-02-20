import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { ToastContainer, toast } from "react-toastify";
import XTwitter from './assets/XTwitter.png';
import { NotifyConnectWalletProvider } from "./Context/ModalContext/ModalContext.jsx";

const CustomAlert = ({ message, img }) => (
  <div className="flex flex-row items-center ml-10 mb-6 gap-x-2 bg-gradient-to-r from-pink-500/15 backdrop-blur-2xl rounded-lg border-2 border-purple-500/40 to-secondary md:w-64 w-screen pr-0 p-6">

    <img src={img} className="w-7 h-7" />
    <p className="z-50 font-bold text-white">{message}</p>
  </div>
);

const PageWrapper = ({ children }) => {

  useEffect(() => {
    toast(<CustomAlert img={XTwitter} message="Connect your X to get started" />, {
      position: "top-right",
      autoClose: false,
      closeOnClick: true,
      theme: "dark",
      className: "",
    });
    toast(<CustomAlert img={XTwitter} message="New feature released!" />, {
      position: "top-right",
      autoClose: false,
      closeOnClick: true,
      theme: "dark",
      className: "",
    });
  }, []);

  return (
    <NotifyConnectWalletProvider>
      <div className="bg-[#060611] text-gray-300">
        <div className="px-6 mx-auto p-6">
          <Navbar />
          <ToastContainer />
          {children}
        </div>
      </div>
    </NotifyConnectWalletProvider>
  );
};

export default PageWrapper;
