import React, { useEffect, useState } from 'react'
import weatherCode from './assets/weatherCode';


const URL = 'http://localhost:8000/';


const App = () => {
  const [data, setData] = useState([]);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
  function getShortDate(date) {
    const day = date.getDate()
    let month = date.getMonth() + 1
    const year = date.getFullYear()

    month = month < 10 ? '0' + month : month;

    return `${day}.${month}.${year}`
  }

  useEffect(() => {
    fetch(URL, {
      method: "GET",
    })
    .then(response => response.json())
    .then(data => setData(JSON.parse(data)))
  }, [])

  let newData

  if (data[0]) {
    newData = data.map((el) => (
      {...el, weekDay: daysOfWeek[new Date(el.date).getDay()],
        shortDate: getShortDate(new Date(el.date))}
    ))
    newData[0].weekDay = 'Today'
    newData[1].weekDay = 'Tomorrow'
  }

  return (
    <>
      <div>
        <section className='title'>
          <h1>WEATHER FORECAST</h1>
          <span className='dataFooter'>data from Open-Meteo</span>
        </section>
        <section className='listContainer'>
          <ul>
            {newData !== undefined ? newData.map((days, index) => (
                <li key={index}>
                  <span className='dayName'>{days.weekDay}</span>
                  <span className='shortDate'>{days.shortDate}</span>
                  <img className='weatherIcon' alt='weatherIcon' src={weatherCode[parseInt(days.weather_code)]}/>
                  <span className='temperature'>{Math.floor(days.temperature_2m_max)}°C | {Math.floor(days.temperature_2m_min)}°C</span>
                </li>
            )): ""}
          </ul>
        </section>
      </div>
    </>
  )
}

export default App
