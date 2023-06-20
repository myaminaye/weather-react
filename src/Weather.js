import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastCard from "./ForecastCard";
import './styles/weather.css'

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            date: "Friday 5:00PM",
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }


    

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.elements.search.value;
        setWeatherData({city: searchValue})
    };


    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if (weatherData.ready) {
        return (
            <div className="root">
                <h2 className="title">Weather Application by Emerald</h2>
                <div className="main container">
                    <ul className="savedCities">
                        <li className="savedCity">Japan</li>
                        <li className="savedCity">London</li>
                        <li className="savedCity">Thailand</li>
                        <li className="savedCity">Korea</li>
                    </ul>
                    <div className="row" style={{ padding: "0 30px" }}>
                        <div className="col-6" >
                            <form onSubmit={handleSearch} style={{ display: "flex" }}>
                                <input placeholder="   Enter a city" name="search" className="rounded border" />
                                <button type="submit" className="btn btn-primary searchBtn">Search</button>
                            </form>
                        </div>
                        <div className="col-6 d-flex justify-content-end" >
                            <button className="btn btn-primary currentBtn ">Current</button>
                        </div>
                    </div>
                    <div className="justify-content-start">
                        <h1 className="lh-lg">{weatherData.city}</h1>
                        <p>{weatherData.date}</p>
                        <p className="text-capitalize">{weatherData.description}</p>
                    </div>
                    <div className="row m-5 d-flex justify-content-center" >
                        <div className="col-4 d-flex">
                            <img src="http://openweathermap.org/img/wn/04d@2x.png" style={{ marginTop: "-50px" }} alt="weather status icon" />
                            <h3>{weatherData.temperature}°C</h3>
                        </div>
                        <div className="col-4">
                            <p>Humidity: {weatherData.humidity}%</p>
                            <p>Wind: {weatherData.wind}km/h</p>
                        </div>
                    </div>
                    <div className="row justify-content-center my-2" >
                        {
                            days.map((day, index) => (
                                <div key={index} className="col-1 mx-3 text-center">
                                    <ForecastCard day={day} temp="18" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <footer>
                    <small className="my-3"><a href="https://github.com/myaminaye/weather-react" rel="noreferrer" target="_blank">Open-source code</a>, by <a href="https://myaminaye.netlify.app/" rel="noreferrer" target="_blank" style={{ color: "black", textDecoration: "none" }}>Mya Min Aye</a></small>
                </footer>
            </div>
        )
    }
    else {
        const apiKey = "085471793943e047acaad88b8e636154";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";
    }
}