

const Header = () => {
    return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold text-blue-600">LOGO</div>
            <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                    <div className="font-semibold">sagar soni</div>
                    <div>sagar@gmail.com</div>
                </div>
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                    Log Out
                </button>
            </div>
        </div>
    </header>
    );
};

export default Header;