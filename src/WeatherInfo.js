import React from 'react';
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
        <div className='container'>
            <div className="justify-content-start">
                        <h1 className="lh-lg">{props.data.city}</h1>
                        <FormattedDate date={props.data.date}/>
                        <p className="text-capitalize">{props.data.description}</p>
                    </div>
                    <div className="row m-5 d-flex justify-content-center" >
                        <div className="col-4 d-flex">
                            <img src="http://openweathermap.org/img/wn/04d@2x.png" style={{ marginTop: "-50px" }} alt="weather status icon" />
                            <h3>{props.data.temperature}°C</h3>
                        </div>
                        <div className="col-4">
                            <p>Humidity: {props.data.humidity}%</p>
                            <p>Wind: {props.data.wind}km/h</p>
                        </div>
                    </div>
        </div>
    )
}