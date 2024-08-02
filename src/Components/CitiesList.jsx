import { Link } from "react-router-dom";

const cities = [
  "Atlanta, GA",
  "Boston, MA",
  "Chicago, IL",
  "Dallas, TX",
  "El Paso, TX",
  "Frisco, TX",
  "Indianapolis, IN",
  "Jacksonville, FL",
  "Kansas City, MO",
  "Los Angeles, CA",
  "Miami, FL",
  "New York, NY",
  "Philadelphia, PA",
  "Queens, NY",
  "Raleigh, NC",
  "San Francisco, CA",
  "San Antonio, TX",
  "Tucson, AZ",
  "Upland, CA",
  "Oklahoma City, OK",
  "Washington, DC",
];

function CitiesList() {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Popular Cities</h2>
      <div className="grid grid-cols-2 gap-2">
        {cities.map((city, index) => (
          <Link key={index} to={`/city/${city}`} className="text-blue-500">
            {city}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CitiesList;
