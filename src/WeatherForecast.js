import React, { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";
import axios from "axios";

export default function WeatherForecast(props) {

    const [forecastReady, setForecastReady] = useState(false);
    const [forecastData, setForecastData] = useState();
    const lat = props.coordinates.lat;
    const lon = props.coordinates.lon;
    const apiKey = "085471793943e047acaad88b8e636154";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    useEffect(()=>{
        setForecastReady();
    },[props.coordinates])

    function handleForecastResponse(response) {
        setForecastData(response.data.list);
        setForecastReady(true);
    }

    function fetchForecast() {
        axios.get(apiUrl).then(handleForecastResponse)
    }

    if (forecastReady) {
        const uniqueDays = Array.from(new Set(forecastData.map(day => day.dt_txt.split(' ')[0])));
        return (
            <div className="row justify-content-center my-1">
                {uniqueDays.map((day, index) => {
                    const filteredData = forecastData.filter(item => item.dt_txt.split(' ')[0] === day);
                    return (
                        <div key={index} className="col-1 mx-4 text-center">
                            <ForecastCard
                                day={filteredData[0].dt}
                                minTemp={Math.round(filteredData[0].main.temp_min)}
                                maxTemp={Math.round(filteredData[0].main.temp_max)}
                                icon={filteredData[0].weather[0].icon}
                            />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        fetchForecast();
        return null;
    }
}