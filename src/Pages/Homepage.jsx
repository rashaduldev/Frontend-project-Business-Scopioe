import Mainpart from "../Components/Mainpart";
import Sidebar from "../Components/Sidebar";

const Homepage = () => {
    return (
        <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <Mainpart />
        </main>
      </div>
    );
};

export default Homepage;