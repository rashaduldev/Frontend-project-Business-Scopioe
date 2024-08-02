import React from "react";
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
      <div className="grid grid-cols-3 gap-2">
        {cities.map((city, index) => (
          <React.Fragment key={index}>
            <Link to={`/city/${city}`} className="text-blue-500 underline">
              {city}
            </Link>
            {(index + 1) % 3 === 0 && index !== cities.length - 1 && (
              <div className="col-span-3">
                <hr className="my-2"/>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CitiesList;
