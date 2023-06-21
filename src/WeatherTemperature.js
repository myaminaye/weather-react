import React, { useState } from "react";

export default function WeatherTemperture(props){
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
        return Math.round((props.celsius * 9/5) +32);
    }
    
    if(unit === "celsius"){
        return(
            <div className="WeatherTemperature">
                <span className="temperature fs-2 px-2 fw-semibold">
                    {props.celsius}
                </span>
                <span className="unit">
                °C | 
                <a href="/" className="text-decoration-none" onClick={showFahrenheit}>°F</a>
                </span>
            </div>
        )
    }
    else{
        return(
            <div className="WeatherTemperature">
                <span className="temperature fs-2 px-2 fw-semibold">
                    {fahrenheit()}
                </span>
                <span className="unit">
                <a href="/" className="text-decoration-none" onClick={showCelsius}>°C </a> | 
                °F
                </span>
            </div>
        )
    }
}