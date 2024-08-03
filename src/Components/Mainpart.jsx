import { useLoaderData } from "react-router-dom";
import CitiesList from "./CitiesList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TestimonialList from "./TestimonialList";
import Newcard from "./Card/NewCard";


const Mainpart = () => {
    const allCard = useLoaderData();
    console.log(allCard);
    return (
        <div>
        <Header/>
        <div className="p-8">
            <SearchBar />
            <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Therapist</h2>
            <div className="bg-white pl-14 pr-20 rounded-lg">
                <Newcard allcard={allCard}/>
            </div>
            </div>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <h2 className="text-lg font-semibold mb-4">Featured Testimonial</h2>
                    <TestimonialList />
                </div>
                <div>
                <h2 className="text-lg font-semibold mb-4">Popular Cities</h2>
                    <CitiesList />
                </div>
            </div>
        </div>
      </div>
    );
};

export default Mainpart;