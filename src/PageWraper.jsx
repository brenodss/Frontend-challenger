import Navbar from './Navbar.jsx';

export default function PageWrapper({children}) {
  return (
    <div className=" bg-[#060611] text-gray-300">
      <div className="px-6 mx-auto p-6">
        <Navbar />
        {children}
      </div>
    </div>
  );
}