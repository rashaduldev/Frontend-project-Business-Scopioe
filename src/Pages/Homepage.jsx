import Mainpart from "../Components/Mainpart";
import Sidebar from "../Components/Sidebar";

const Homepage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex lg:w-64">
                <Sidebar />
            </div>
            <main className="flex-1 bg-gray-100 overflow-auto">
                <Mainpart />
            </main>
        </div>
    );
};

export default Homepage;
