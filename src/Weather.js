// import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastCard from "./ForecastCard";
import './styles/weather.css'

export default function Weather() {
    // const apiKey = "AIzaSyA9Zz5oJEqKPUOCvPbZiiyKf74vEj0C5j8";
    // const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?lat=44.34&lon=10.99&key=${apiKey}`;

    const [city, setCity] = useState("Myanmar");

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.elements.search.value;
        setCity(searchValue);
    };

    // function formatDate(timestamp) {
    //     let date = new Date(timestamp);
    //     let hours = date.getHours();
    //     if (hours < 10) {
    //         hours = `0${hours}`
    //     }
    //     let minutes = date.getMinutes();
    //     if (minutes < 10) {
    //         minutes = `0${minutes}`
    //     }
    //     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     let day = days[date.getDay()];
    //     return `${day} ${hours}:${minutes}`
    // }

    // function formatDay(timestamp) {
    //     let date = new Date(timestamp * 1000);
    //     let day = date.getDay();
    //     let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //     return days[day];
    // }

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="root">
            <h2 className="title">Weather Application by Emerald</h2>
            <div className="main">
                <ul className="savedCities">
                    <li className="savedCity">Japan</li>
                    <li className="savedCity">London</li>
                    <li className="savedCity">Thailand</li>
                    <li className="savedCity">Korea</li>
                </ul>
                <div className="row" style={{ padding: "0 30px" }}>
                    <div className="col-6" >
                        <form onSubmit={handleSearch} style={{ display: "flex" }}>
                            <input placeholder="Enter a city"  name="search" />
                            <button type="submit" variant="contained" className="searchBtn">Search</button>
                        </form>
                    </div>
                    <div className="col-6" >
                        <button variant="contained" className="currentBtn">Current</button>
                    </div>
                </div>
                <div>
                    <p>{city}</p>
                    <p>Sunday 10:48</p>
                    <p>Clouds</p>
                </div>
                <div className="row" >
                    <div className="col-6 d-flex">
                        <img src="http://openweathermap.org/img/wn/04d@2x.png" style={{marginTop: "-50px"}} alt="weather status icon"/>
                        <h3>19'C</h3>
                    </div>
                    <div className="col-6">
                        <p>Precipitation: 85%</p>
                        <p>Wind: 4km/h</p>
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
            <small><a href="https://github.com/myaminaye/weather-react-website">Open-source code</a>, by Mya Min Aye</small>
        </div>
    )
}