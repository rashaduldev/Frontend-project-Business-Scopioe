/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    text: "Cort's healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of the body's needs led to a deeply relaxing and rejuvenating experience. I felt completely at ease and in safe hands throughout the session. Highly recommend Cort's services to anyone looking for a holistic and transformative bodywork experience.",
    name: "John Doe",
    location: "123 Elm Street, New York",
    img: "https://i.ibb.co/yfRscKj/image1.png"
  },
  {
    id: 2,
    text: "Cort's healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of the body's needs led to a deeply relaxing and rejuvenating experience. I felt completely at ease and in safe hands throughout the session. Highly recommend Cort's services to anyone looking for a holistic and transformative bodywork experience.",
    name: "Jane Smith",
    location: "456 Pine Street, San Francisco",
    img: "https://i.ibb.co/vzDBb5n/image2.png"
  },
];

function ReadMore({ text, maxWords = 25 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ');
  const shouldShowReadMore = words.length > maxWords;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="text-sm mb-2 text-gray-500 inline">
        {isExpanded ? (
          text
        ) : (
          <>
            {words.slice(0, maxWords).join(' ')}
            {shouldShowReadMore && (
              <>
                ...
                <button onClick={toggleReadMore} className="text-blue-500 underline inline">
                  Read more
                </button>
              </>
            )}
          </>
        )}
      </p>
    </div>
  );
}

function TestimonialList() {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg relative">
      <ul className="space-y-4 pb-10">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="border p-4 rounded">
            <div className="flex flex-row text-left items-center space-x-7">
              <div className="h-[142px] w-[650px] lg:w-auto lg:flex-shrink-0 lg:overflow-hidden">
                <img 
                  src={testimonial.img} 
                  alt="" 
                  className="lg:object-cover h-full w-full" 
                />     
              </div>
              <div>
                <div className="text-sm text-gray-500 flex items-center space-x-2 mt-10 lg:mt-0">
                  <FaLocationDot />
                  <strong>{testimonial.name}</strong> - {testimonial.location}
                </div>
                <div className="flex items-center my-2">
                  Healing Bodywork <i className="font-bold text-blue-600 ml-2">by Cort</i>
                </div>
                <ReadMore text={testimonial.text} maxWords={25} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-center gap-1 absolute left-[50%] bottom-4 translate-x-[-50%]'>
        <p className='text-8xl  text-blue-600 '>.</p>
        <p className='text-8xl  text-gray-400'>.</p>
        <p className='text-8xl  text-gray-400'>.</p>
      </div>
    </div>
  );
}

export default TestimonialList;
