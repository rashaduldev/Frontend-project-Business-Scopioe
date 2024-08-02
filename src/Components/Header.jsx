import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Nav from "./Nav";
import { FaArrowRightToBracket } from "react-icons/fa6";


const Header = () => {
    const [isOptionsVisible, setOptionsVisible] = useState();

    const toggleOptions = () => {
        setOptionsVisible(!isOptionsVisible);
      };
    return (
       <div>
             <div className="hidden lg:flex">
             <div className="flex items-center justify-between p-4 w-full bg-white shadow-md mb-6">
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <div className="font-semibold">sagar soni</div>
                        <div className="text-sm text-gray-600">sagar@gmail.com</div>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="text-2xl border p-2 rounded-full">
                    <IoIosNotificationsOutline /> 
                    </div>
                    <div className="flex items-center space-x-2 text-red-600 border-left pl-5">
                        <p className="text-xl">Log out</p>
                        <div className="border p-2 rounded-full bg-red-100 cursor-pointer">
                         <FaArrowRightToBracket />
                        </div>
                    </div>
                </div>
                
            </div>
             </div>
             <div className="lg:hidden flex">
                <div className="relative w-full">
                    <div className="flex items-center justify-between p-4 bg-white shadow-md mb-6">
                    <div className="text-3xl font-bold text-center text-blue-600">LOGO</div>
                    <div className="flex items-center space-x-5 text-2xl">
                        <IoIosNotificationsOutline /> 
                        <CiMenuFries onClick={toggleOptions} />
                    </div>
                    </div>
                    {isOptionsVisible && (
                    <div className="absolute right-2 top-14 z-50 w-56 bg-white shadow-md rounded-md">
                        <Nav />
                    </div>
                    )}
                </div>
                </div>
       </div>
    );
};

export default Header;