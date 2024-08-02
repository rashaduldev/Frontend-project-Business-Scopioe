const SearchBar = () => {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
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
    );
};

export default SearchBar;