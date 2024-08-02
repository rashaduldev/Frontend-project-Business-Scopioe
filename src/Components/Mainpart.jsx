import Header from "./Header";
import SearchBar from "./SearchBar";


const Mainpart = () => {
    return (
        <div>
        <Header/>
        <div className="p-8">
            <SearchBar />
            <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Therapist</h2>
            {/* <TherapistList /> */}
            </div>
            <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <TestimonialList /> */}
            {/* <CitiesList /> */}
            </div>
        </div>
      </div>
    );
};

export default Mainpart;