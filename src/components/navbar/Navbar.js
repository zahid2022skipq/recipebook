import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="flex h-50 w-full justify-between p-6 bg-gray-100 items-center">
        <div className="flex flex-row justify-center ml-14">
          <FaFacebookF className="mx-4 hover:text-orange-500" size={25} />
          <FaTwitter className="mx-4 hover:text-orange-500" size={25} />
          <FaInstagram className="mx-4 hover:text-orange-500" size={25} />
        </div>
        <div className="flex flex-row justify-center items-center mr-32">
          <FaSearch size={25} className="mx-6 hover:text-orange-500" />
          <button className="text-md border-black border border-solid py-1 px-6 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
