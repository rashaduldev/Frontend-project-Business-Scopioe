import { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";

const Header = () => {
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
                       <div onClick={handleLogout} className="flex items-center cursor-pointer space-x-2 text-red-600 border-left pl-5">
                      
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
                        <div className="flex cursor-pointer items-center space-x-2 text-red-600 border-left pl-5">
                      
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
       </div>
    );
};

export default Header;