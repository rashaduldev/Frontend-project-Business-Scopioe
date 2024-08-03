import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Nav from "./Nav";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";


const Header = () => {
    const [isOptionsVisible, setOptionsVisible] = useState();
    const [user,setUser]=useState(null);

        const auth = getAuth();

        useEffect(()=>{
            const unSubscribe= onAuthStateChanged(auth,currentUser=>{
                 console.log(currentUser);
                 setUser(currentUser);
             })
             return (()=>{
                 unSubscribe();
             })
         },[auth])
        const handleLogout=()=>{
            signOut(auth)
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "LogOut Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }).catch((error) => {
        console.log(error.message);
        });
        }

    const toggleOptions = () => {
        setOptionsVisible(!isOptionsVisible);
      };
    return (
       <div>
             <div className="hidden lg:flex">
             <div className="flex items-center justify-between p-4 w-full bg-white shadow-md mb-6">
                <div className="flex items-center space-x-4">
                    
                    <div>
                    {user?.email ? (
                 <div className="items-center z-10">
                   <div className="hs-dropdown relative inline-flex">
                      <div className="relative">
                        <div
                          className="cursor-pointer flex items-center gap-2 relative"
                          onClick={toggleOptions}
                        >
                          <img
                            src={user?.photoURL}
                            alt="Profile Image"
                            className="rounded-full h-10 w-10"
                          />
                          <div>
                            <p className="font-bold">{user?.displayName}</p>
                            <p>{user?.email}</p>
                          </div>
                        </div>

                        {isOptionsVisible && (
                          <div  className="fixed lg:top-20 md:right-10 lg:right-64 z-50 w-56 bg-white shadow-md rounded-md mt-2">
                            <Link to={"/dashboard/profile"}>
                            <button
                            onClick={toggleOptions}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              Profile
                            </button>
                            </Link>
                            <button
                            onClick={toggleOptions}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              Updrate To Pro
                            </button>
                            <button
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                              onClick={toggleOptions}
                            >
                              Account settings
                            </button>
                            <Link to={"/login"}>
                            <button
                              onClick={handleLogout}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                              
                            >
                              Logout
                            </button>
                            </Link>
                          
                          </div>
                        )}
      
                       </div>
                   </div>
                 </div>
               ) : (
                <div
                className={`${
                  (location.pathname === "/login" || location.pathname === "/signup") 
                    ? "text-blue-300 border-b-2 border-accent" 
                    : ""
                } capitalize font-medium hover:text-accent transition-all`}
              >
                <div className="flex items-center space-x-3">
                <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <p>Please Login First</p>
                </div>
              </div>
               )}
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="text-2xl border p-2 rounded-full">
                    <IoIosNotificationsOutline /> 
                    </div>
                    {
                        user?.email ?<>
                        <div>
                        <Link to={'/login'}>
                        <div onClick={handleLogout} className="flex items-center space-x-2 text-red-600 border-left pl-5">
                      <p className="text-xl">Log out</p>
                       <div className="border p-2 rounded-full bg-red-100 cursor-pointer">
                        <FaArrowRightToBracket />   
                       </div>
                      </div>
                      </Link>
                        </div>
                        </> : 
                        <>
                        <div>
                        <Link to={'/login'}>
                        <div className="flex items-center space-x-2 text-red-600 border-left pl-5">
                      <p className="text-xl">Log in</p>
                       <div className="border p-2 rounded-full bg-red-100 cursor-pointer">
                       
                        <FaArrowRightToBracket />
                        
                       </div>
                    
                   </div>
                   </Link>
                        </div>
                        </>
                    }
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