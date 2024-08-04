/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './newcard.css';
import { Link } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const TherapistCard = ({ therapist }) => (
  <div className="w-60 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4">
    <div className="bg-white shadow-md rounded-lg">
      <img src={therapist?.img} alt={therapist?.name} className="w-60 h-52 lg:w-full lg:h-full rounded-t-lg p-2" />
      <div className="">
        <div className='p-3'>
        <h3 className="text-lg font-bold">{therapist?.name}</h3>
        <p className="text-sm">{therapist?.address}</p>
        <p className="text-sm">{therapist?.services}</p>
        </div>
        <Link
            to={`/therapist/${therapist.id}`}
            className="mt-4 w-full text-center inline-block py-3 bg-[#D4E9FF] hover:bg-blue-700 hover:text-white rounded-b underline"
          >
            See Details
          </Link>
      </div>
    </div>
  </div>
);

const Newcard = ({allcard}) => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <div ref={carouselRef} className="flex overflow-x-auto hide-scroll-bar lg:p-4 lg:space-x-4">
        {allcard.map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>
      {/* Navigation buttons (hidden on mobile) */}
      <button 
        onClick={handlePrevClick} 
        className="hidden lg:block absolute -left-9 top-1/2 transform -translate-y-1/2 bg-[#D4E9FF] hover:bg-blue-700 hover:text-white h-12 w-12 text-3xl rounded-full shadow-md">
       <GoChevronLeft className="ml-2" />
      </button>
      <button 
        onClick={handleNextClick} 
        className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 bg-[#D4E9FF] hover:bg-blue-700 hover:text-white h-12 w-12 text-3xl rounded-full shadow-md">
        <GoChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default Newcard;
