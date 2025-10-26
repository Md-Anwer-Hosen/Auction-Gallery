import { IoIosLink } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-3  mx-30">
        <div className="flex items-center space-x-1 ">
          <span className="text-blue-600 font-semibold text-3xl">Auction</span>
          <span className="text-yellow-500 font-semibold text-3xl">
            Gallery
          </span>
        </div>

        <ul className="flex space-x-8 text-sm font-medium text-gray-700 text-[22px]">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Auctions</li>
          <li className="cursor-pointer hover:text-blue-600">Categories</li>
          <li className="cursor-pointer hover:text-blue-600">How to works</li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <IoIosLink className="text-gray-600 text-xl" />
          </button>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
