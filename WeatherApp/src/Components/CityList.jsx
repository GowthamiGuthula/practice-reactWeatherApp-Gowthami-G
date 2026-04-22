//The component displays a list of cities and calls a function when a city is clicked.
import React from "react";
import "./CityList.css";

const CityList = ({ cities, onCitySelect }) => {
  return (
    <div>   
        <h2>Select a City</h2>
        <ul>
            {cities.map((city) => (
                <li key={city} onClick={() => onCitySelect(city)}>
                    {city}  
                </li>
            ))}
        </ul>
    </div>
  );
};

export default CityList;



