//Component to display the forecast for the selected city.


// 1. The component receives the selected city as a prop.
// 2. Use useEffect to simulate fetching the weather data for the selected city.
// 3. Use useRef to scroll to the detailed weather section when a "View Details"
// button is clicked.

import React, { useState, useEffect, useRef } from "react";
import  "./CityForecast.css";

const CityForecast = ({ city }) => {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);
    useEffect(() => {
    // Simulate fetching weather data for the selected city
    const fetchWeatherData = () => {
      const weatherData = {
        NewYork: {
            summary: "Sunny, 25°C", 
            details: "Clear skies throughout the day with mild temperatures.",
        },
        London: {
            summary: "Cloudy, 18°C",
            details: "Overcast with occasional light rain in the afternoon.",
        },
        Tokyo: {
            summary: "Rainy, 22°C",
            details: "Continuous rain expected throughout the day.",
        },
      };
      setForecast(weatherData[city]);
    };
    fetchWeatherData();
  }, [city]);

  const handleViewDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };    

    return (
        <div className="city-forecast">
            <h2  >Weather Forecast for {city}</h2>
            {forecast ? (   
                <div className="forecast-container">
                    <p >{forecast.summary}</p>
                    <button   onClick={handleViewDetails}>View Details</button>
                    <div  ref={detailsRef} style={{ marginTop: "20px" }}>
                        <h3 >Details</h3>
                        <p >{forecast.details}</p>
                    </div >
                </div>
            ) : (   
                <p>Loading forecast...</p>
            )}
        </div>
    );
};

export default CityForecast;    
