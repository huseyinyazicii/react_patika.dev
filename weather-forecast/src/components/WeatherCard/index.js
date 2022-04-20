import React, { useEffect, useState } from 'react';
import {useMain} from '../../context/MainContext';
import DayCard from './DayCard';

const API_DATA_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "857045af5003cba951475011b907eccf";

// https://api.openweathermap.org/data/2.5/forecast?q=%C5%9E%C4%B1rnak,tr&cnt=7&appid=857045af5003cba951475011b907eccf&units=metric&lang=tr

function WeatherCard({setSnow}) {
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);

    const {selectedCity} = useMain();

    useEffect(() => {
        fetch(`${API_DATA_URL}?q=${selectedCity},tr&cnt=7&appid=${API_KEY}&units=metric&lang=tr`)
            .then((response) => response.json())
            .then((data) => setWeatherData(data))
            .finally(() => setLoading(false));
    }, [selectedCity])

    return (
        <div className='weather-card'>
            {loading && <h1>Loading</h1>}
            {!loading && weatherData.list.map((day, i) => (
                <DayCard key={i} 
                         icon={day.weather[0].icon}
                         hour={day.dt_txt}
                         date={day.dt}
                         minTemp={day.main.temp_min}
                         maxTemp={day.main.temp_max} 
                         setSnow={setSnow}/>
            ))}
        </div>
    )
}

export default WeatherCard;