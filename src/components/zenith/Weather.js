import React from 'react'
import axios from 'axios'

import { UserContext } from '../context/UserContext'

function Weather() {
  
  const { user } = React.useContext(UserContext)
  
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
  const apiKey = '44546322b5e17c3a35e117a1c5067ad9'

  const [ weatherData, setWeatherData ] = React.useState(null)
  const isLoading = !weatherData

  React.useEffect(() => {
    if (!user) {
      return
    }
    const getData = async () => {
      try {
        const res = await axios.get(baseUrl + `q=${user.city || 'New York'}&appid=${apiKey}`)
        setWeatherData(res.data)
        
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [user])

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {weatherData !== null ? (
            <>
              <h3> Today's weather: </h3>
              <div className="main-container" styles= {{ display: 'flex' }}>
                <div className="weather-icon">
                  <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="imgicon"/>
                </div>
                <h3>{weatherData.weather[0].main}</h3>
                <div className="temprature">
                  <h3>{parseFloat(weatherData.main.temp - 273.15).toFixed(1)}&deg;C</h3>
                </div>
                <div className="location">
                  <h5><i className="fa fa-street-view"></i>{weatherData.name} | {weatherData.sys.country}</h5>
                </div>
                <div className="temperature-range">
                  <h6>Min: {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}&deg;C 
              | Max: {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}&deg;C 
              | Humidity: {weatherData.main.humidity}%</h6>
                </div>
              </div>
            </>
          ) : null}
        </>
      )     
      }
    </>
  )
}

export default Weather