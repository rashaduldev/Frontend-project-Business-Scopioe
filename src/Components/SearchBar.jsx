/* eslint-disable react/prop-types */
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-white rounded-lg p-10">
      <div className="lg:p-6 p-0">
        <h1 className="text-2xl font-semibold mb-4">
          I’m Looking for Massage Therapist Near...
        </h1>
        <p className="text-xl mb-4">
          In using this site, I agree to be bound by the{" "}
          <a href="#" className="text-blue-500">
            Terms of Service <br />
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
        </p>
        <div className="flex space-x-4 relative">
          <input
            type="text"
            placeholder="Zip code or city name"
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full p-2 border rounded "
          />
          <button onClick={handleSearch} className="px-7 py-2 bg-blue-500 text-white rounded absolute top-[1.5px] right-[1px]">
            Go
          </button>
        </div>
      </div>
      <div className="mt-5 lg:mt-0">
        <img className=' w-80' src="https://i.ibb.co/Ldb1cXb/search.png" alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
