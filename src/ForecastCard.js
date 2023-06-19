function ForecastCard(props){
    return(
        <div>
            <p>{props.day}</p>
            <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="weather status icon" width="50px"/>
            <p>{props.temp}</p>
        </div>
    )
}

export default ForecastCard;