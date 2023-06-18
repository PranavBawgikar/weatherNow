import React, { useEffect, useState } from "react";
import './App.css';
import './sass/App.scss';
import TopSection from './Components/Top';
import BottomSection from './Components/Bottom';
import axios from "axios";

const WEATHER_KEY = "dca84cb37ecd5a7a6078b00814ef22b1";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState("New York");
  const [temperature, setTemperature] = useState(null);
  const [isDay, setIsDay] = useState(false);
  const [weatherDescriptions, setWeatherDescriptions] = useState([]);
  const [weatherIcons, setWeatherIcons] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${cityName}`;
        const response = await axios.get(URL);
        const data = response.data;
        setTemperature(data.current.temperature);
        setIsDay(data.current.is_day);
        setWeatherDescriptions(data.current.weather_descriptions);
        setWeatherIcons(data.current.weather_icons);
        setIsLoading(false);
      } catch (error) {
        console.error("Cannot fetch weather data from API", error);
        setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, [cityName]);

  return(
    <div className='app-container'>
      <div className='main-container'>
        {isLoading ? ( <h3>Loading Weather...</h3>
        ) : ( <>
        <div className="top-section">
          <TopSection location={cityName} temperature={temperature} is_day={isDay} weather_descriptions={weatherDescriptions} weather_icons={weatherIcons}/>
        </div>
        <div className="bottom-section">
          <BottomSection />
        </div>
        </>
        )}
      </div>
    </div>
  );
}