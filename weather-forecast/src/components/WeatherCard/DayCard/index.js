import React from 'react';

const API_ICON_URL = "https://openweathermap.org/img/wn/";

function DayCard({icon, hour, date, minTemp, maxTemp, setSnow}) {
    console.log(icon);
    console.log(hour);
    console.log(date);
    console.log(minTemp);

    const snowEfect = `<div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
  </div>`

    return (
        <div className='day-card' onClick={() => setSnow(snowEfect)}>
            <p>{convertDate(date)}</p>
            <p>{hour.split(' ')[1].split(':').splice(0, 2).join(':')}</p>
            <img src={`${API_ICON_URL}${icon}@2x.png`} alt="" />
            <div>
                <span>{Math.round(minTemp)}°C</span>
                <span>{Math.round(maxTemp)}°C</span>
            </div>
        </div>
    )
}

function convertDate(miliSeconds, type = 'long') {
    const date = new Date(miliSeconds * 1000); 

    const day = new Intl.DateTimeFormat("tr", {
      weekday: type,
    }).format(date);
  
    return day;
}

export default DayCard;