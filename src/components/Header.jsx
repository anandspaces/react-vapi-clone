import { useState } from "react";
import { FaDiscord, FaLinkedin, FaXTwitter} from "react-icons/fa6";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full z-50">
      <nav className="flex justify-between items-center bg-white/30 backdrop-blur-lg text-gray-800 py-4 px-8 shadow-md">
        <div className="text-2xl font-bold text-green-600 hover:cursor-pointer">
          VAPI
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-4 text-2xl">
            <FaDiscord className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
            <FaXTwitter className="hover:text-blue-400 cursor-pointer transition-colors duration-300" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors duration-300" />
          </div>
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-black transition-colors duration-300">Careers</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Affiliates</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Docs</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Security</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Dashboard</a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {/* <button onClick={toggleMenu}>
            {isOpen ? (
              {'|||'}
            ) : (
              
            )}
          </button> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-2/3 bg-white/70 backdrop-blur-lg shadow-xl text-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 p-8 text-lg">
          <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>Careers</a>
          <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>Affiliates</a>
          <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>Docs</a>
          <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>Pricing</a>
          <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>Security</a>
          <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>Dashboard</a>
          <div className="flex space-x-4 text-2xl mt-4">
            <FaDiscord className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
            <FaXTwitter className="hover:text-blue-400 cursor-pointer transition-colors duration-300" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
