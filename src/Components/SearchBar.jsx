const SearchBar = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between bg-white rounded-lg p-10">
            <div className="lg:p-6 p-0">
            <h1 className="text-xl font-semibold mb-4">
                I’m Looking for Massage Therapist Near...
            </h1>
            <p className="text-sm mb-4">
                In using this site, I agree to be bound by the{" "}
                <a href="#" className="text-blue-500">
                Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                Privacy Policy
                </a>
            </p>
            <div className="flex space-x-4">
                <input
                type="text"
                placeholder="Zip code or city name"
                className="w-full p-2 border rounded"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Go</button>
            </div>
         </div>
         <div className="mt-5 lg:mt-0">
            <img src="https://i.ibb.co/Ldb1cXb/search.png" alt="" />
         </div>
        </div>
    );
};

export default SearchBar;