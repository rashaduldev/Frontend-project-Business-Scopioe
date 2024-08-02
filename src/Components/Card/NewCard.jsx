/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './newcard.css';
import { Link } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const therapists = [
    {
      id: 1,
      name: "Alexander Cort",
      address: "123 Elm Street, New York",
      services: "Mobile & In-Studio",
      img: "https://i.ibb.co/dLpS4s4/alex1.png",
    },
    {
      id: 2,
      name: "Michael Smith",
      address: "789 Maple Drive, NY",
      services: "Mobile & In-Studio",
      img: "https://i.ibb.co/CmdDP8J/michel2.png",
    },
    {
      id: 3,
      name: "David Martinez",
      address: "Pine Street, San Francisco",
      services: "Mobile & In-Studio",
      img: "https://i.ibb.co/j6wvZvN/david3.png",
    },
    {
      id: 4,
      name: "Jennifer Lee",
      address: "Cedar Lane, Miami",
      services: "Mobile & In-Studio",
      img: "https://i.ibb.co/9Tj6PLk/jeni4.png",
    },
    {
        id: 5,
        name: "Jennifer Lee",
        address: "Cedar Lane, Miami",
        services: "Mobile & In-Studio",
        img: "https://i.ibb.co/CmdDP8J/michel2.png",
      },
      {
        id: 6,
        name: "Jennifer Lee",
        address: "Cedar Lane, Miami",
        services: "Mobile & In-Studio",
        img: "https://i.ibb.co/dLpS4s4/alex1.png",
      },
      {
        id: 7,
        name: "Jennifer Lee",
        address: "Cedar Lane, Miami",
        services: "Mobile & In-Studio",
        img: "https://i.ibb.co/j6wvZvN/david3.png",
      },
  ];

const TherapistCard = ({ therapist }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4">
    <div className="bg-white shadow-md rounded-lg">
      <img src={therapist?.img} alt={therapist?.name} className="w-full h-32 object-cover rounded-t-lg" />
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

const TherapistCarousel = () => {
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
      <div ref={carouselRef} className="flex overflow-x-auto hide-scroll-bar p-4 space-x-4">
        {therapists.map((therapist, index) => (
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

export default TherapistCarousel;
