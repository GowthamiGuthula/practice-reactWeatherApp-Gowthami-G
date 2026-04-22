//The main component should manage which city is selected and pass data tochildren.

// const weatherData = {
//  NewYork: {
//  summary: "Sunny, 25°C",
//  details: "Clear skies throughout the day with mild
// 1
// temperatures.",
//  },
//  London: {
//  summary: "Cloudy, 18°C",
//  details: "Overcast with occasional light rain in the afternoon.",
//  },
//  Tokyo: {
//  summary: "Rainy, 22°C",
//  details: "Continuous rain expected throughout the day.",
//  },
// };

// 1. The main page lists a few city options (e.g., "New York," "London," "Tokyo").
// 2. Clicking on a city displays the forecast for that city below the list.
// 3. The forecast component fetches mock weather data for the selected city
// using useEffect when the city changes.
// 4. The application includes a button to scroll to the detailed weather section
// using useRef.
// This activity will help students combine and practice useEffect and useRef.  

import React, { useState } from "react";
import CityList from "./Components/CityList";
import CityForecast from "./Components/CityForecast";


const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = ["NewYork", "London", "Tokyo"];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <CityList  cities={cities} onCitySelect={handleCitySelect} />
      {selectedCity && <CityForecast city={selectedCity} />}
    </div>
  );
};

export default App;

