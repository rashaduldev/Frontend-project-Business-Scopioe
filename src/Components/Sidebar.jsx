
import Nav from './Nav';
import './sideber.css';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white h-full">
        <div className="p-9 lg:border-b">
          <div className="text-3xl lg:text-5xl font-bold text-center text-blue-600">LOGO</div>
        </div>
        <hr className="lg:hidden" />
       <Nav/>
      </div>
    );
};

export default Sidebar;