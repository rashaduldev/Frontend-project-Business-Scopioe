import Mainpart from "../Components/Mainpart";
import Sidebar from "../Components/Sidebar";

const Homepage = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="hidden lg:flex">
             <Sidebar />
            </div>
            <main className="flex-1 bg-gray-100">
             <Mainpart />
            </main>
      </div>
    );
};

export default Homepage;