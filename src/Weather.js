import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/weather.css'
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

    function search() {
        const apiKey = "085471793943e047acaad88b8e636154";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSearch(event) {
        event.preventDefault();
        search();

    };

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="root">
                <div className="main container">
                    <div className="row mt-3" style={{ padding: "0 30px" }}>
                        <div className="col" >
                            <form onSubmit={handleSearch} style={{ display: "flex" }}>
                                <input placeholder="   Enter a city" name="search" className="rounded border" onChange={handleCityChange} />
                                <button type="submit" className="btn btn-primary searchBtn">Search</button>
                            </form>
                        </div>
                    </div>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecast coordinates={weatherData.coordinates}/>
                </div>
                <footer>
                    <small className="my-3"><a href="https://github.com/myaminaye/weather-react" rel="noreferrer" target="_blank">Open-source code</a>, by <a href="https://myaminaye.netlify.app/" rel="noreferrer" target="_blank" style={{ color: "black", textDecoration: "none" }}>Mya Min Aye</a></small>
                </footer>
            </div>
        )
    }
    else {
        search();
        return "Loading...";
    }
}