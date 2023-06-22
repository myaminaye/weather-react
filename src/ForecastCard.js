function ForecastCard(props) {
    let date = new Date(props.day * 1000) ;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = date.getDay();
    let nextDay = days[day]
    return (
        <div >
            <p className="text-center">{nextDay}</p>
            <img className="align-items-center" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather status icon" width={50} />
            <p className="text-center">
                <span className="weather-forecast-temp-min">{props.minTemp}°</span>
                <span className="weather-forecast-temp-min">{props.maxTemp}°</span>
            </p> 
        </div>
    )
}

export default ForecastCard;