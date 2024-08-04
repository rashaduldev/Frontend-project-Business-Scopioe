import { FaArrowLeft } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error=useRouteError();
    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
        <div className=" p-8 rounded-lg text-center">
            {/* <p>{error.statusText || error.message}</p> */}
            {
                error.status===404 && <div className='relative'>
                      <h1 className="lg:text-[240px] text-7xl text-center text-black-500 font-extrabold mb-2 lg:tracking-[100px] lg:pl-14" >404</h1>
                      <img className='absolute h-12 top-[16px] lg:h-44 lg:top-[48px] left-[140px] lg:left-[290px] rounded-full' src="https://i.ibb.co/HrqNgzx/Buzz-Lightyear-ts4-png.webp" alt="" />
            <p className="text-gray-700 text-xl">Page Not Found</p>
            <p className="text-gray-500 mt-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <div className='flex items-center text-red-600 gap-4 text-2xl mt-10 justify-center'>
                <Link to={'/'}>
                <div className=' cursor-pointer bg-red-300 p-2 rounded-full'>
                    <FaArrowLeft />
                </div>
                </Link>
                <p>Back to homepage</p>
                </div>
                </div>
            }
          
        </div>
  
         </div>
    );
};
export default Errorpage;