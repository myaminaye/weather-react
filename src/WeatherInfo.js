import React from 'react';
import FormattedDate from "./FormattedDate";
import WeatherIcon from './WeatherIcon';
import WeatherTemperture from './WeatherTemperature';

export default function WeatherInfo(props) {
    return (
        <div className='container'>
            <div className="justify-content-start">
                <h1 className="lh-lg">{props.data.city}</h1>
                <FormattedDate date={props.data.date} />
                <p className="text-capitalize">{props.data.description}</p>
            </div>
            <div className="row m-5 d-flex justify-content-center" >
                <div className="col-6">
                    <div className="d-flex">
                        <div className='mx-3'>
                            {/* <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`} style={{ marginTop: "-30px" }} alt="weather status icon" /> */}
                            <WeatherIcon code={props.data.icon} size={52} />
                        </div>

                        <div>
                            <WeatherTemperture celsius={props.data.temperature}/>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <p>Humidity: {props.data.humidity}%</p>
                    <p>Wind: {props.data.wind}km/h</p>
                </div>
            </div>
        </div>
    )
}