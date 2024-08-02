import { Link } from "react-router-dom";
import {
  FiGrid,
  FiUser,
  FiSearch,
  FiFileText,
  FiHeart,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";

const Nav = () => {
    return (
        <nav className=" space-y-1">
        <Link
          to="/"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0"
        >
          <FiGrid />
          <span>Home</span>
        </Link>
        <Link
          to="/new-listing"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0"
        >
          <FiUser />
          <span>New Listing</span>
        </Link>
        <Link
          to="/search"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0"
        >
          <FiSearch />
          <span>Search</span>
        </Link>
        <Link
          to="/about"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0"
        >
          <FiFileText />
          <span>About</span>
        </Link>
        <Link
          to="/favorites"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0 mb-0"
        >
          <FiHeart />
          <span>Favorites</span>
        </Link>
        <hr className="my-3 mx-5" />
        <Link
          to="/help"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0"
        >
          <FiHelpCircle />
          <span>Help Center</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center space-x-4 text-gray-700 hover:text-black hover:bg-[#D4E9FF] p-4 font-medium hover-border-left ml-1 hover:ml-0"
        >
          <FiSettings />
          <span>Settings</span>
        </Link>
      </nav>
    );
};

export default Nav;