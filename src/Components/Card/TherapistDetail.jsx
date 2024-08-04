import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const TherapistDetail = () => {
  const { therapistId } = useParams();
  const allCard = useLoaderData();
  const [therapist, setTherapist] = useState(null);

  useEffect(() => {
    console.log('Loaded data:', allCard);
    if (Array.isArray(allCard)) {
      const foundTherapist = allCard.find(t => t.id === parseInt(therapistId));
      setTherapist(foundTherapist);
    } else {
      console.error('Loaded data is not an array:', allCard);
    }
  }, [therapistId, allCard]);

  if (!therapist) return <div className='text-center text-3xl'>Loading...</div>;

  return (
    <div className='flex flex-col justify-center text-center items-center mx-auto'>
        <h1 className='text-5xl font-bold my-10'>Details Page</h1>
     <div className='max-w-3xl shadow-lg rounded-lg p-20'>
     <img className="w-96 h-64 mx-auto mb-20" src={therapist.img} alt={therapist.name} />
      <div className='text-center'>
      <h1 className='font-bold text-3xl'>{therapist.name}</h1>
      <p className='flex items-center justify-center gap-2'><p className="font-bold">Address:</p>{therapist.address}</p>
      <p className='flex items-center justify-center gap-2'><p className="font-bold">services:</p>{therapist.services}</p>
      </div>
     </div>
        <div className='flex items-center text-red-600 gap-4 text-2xl mt-10'>
        <Link to={'/dashboard'}>
        <div className=' cursor-pointer bg-red-300 p-2 rounded-full'>
            <FaArrowLeft />
        </div>
        </Link>
        <p>Go to Dashboard</p>
        </div>
    </div>
  );
};

export default TherapistDetail;