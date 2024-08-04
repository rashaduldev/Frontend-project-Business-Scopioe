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
    <div className="bg-white shadow-md p-4 rounded-lg">
      <ul className="space-y-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="border p-4 rounded">
            <div className="flex flex-col lg:flex-row text-left items-center space-x-7">
              <div className="h-[141px] w-full lg:w-auto lg:flex-shrink-0 lg:overflow-hidden">
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
    </div>
  );
}

export default TestimonialList;
