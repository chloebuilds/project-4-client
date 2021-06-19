import React from 'react'
import axios from 'axios'

import { UserContext } from '../context/UserContext'



function Weather() {
  
  const { user } = React.useContext(UserContext)
  
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
  const apiKey = '44546322b5e17c3a35e117a1c5067ad9'
  // const [ city, setCity ] = React.useState('')
  const [ weatherData, setWeatherData ] = React.useState(null)
  const isLoading = !weatherData

  // setCity(user?.city)
  // console.log(user?.city)

  React.useEffect(() => {
    if (!user) {
      return
    }
    const getData = async () => {
      try {
        const res = await axios.get(baseUrl + `q=${user.city}&appid=${apiKey}`)
        setWeatherData(res.data)
        
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [user])

  return (
    <>
      <h3>Weather</h3>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {weatherData !== null ? (
            <div className="main-container">
              <h4>Live Weather Condition</h4>
              <div className="weather-icon">
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="imgicon"/>
              </div>
              <h3>{weatherData.weather[0].main}</h3>
              <div className="temprature">
                <h1>{parseFloat(weatherData.main.temp - 273.15).toFixed(1)}&deg;C</h1>
              </div>
              <div className="location">
                <h3><i className="fa fa-street-view"></i>{weatherData.name} | {weatherData.sys.country}</h3>
              </div>
              <div className="temprature-range">
                <h6>Min: {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}&deg;C 
              || Max: {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}&deg;C 
              || Humidity: {weatherData.main.humidity}%</h6>
              </div>
            </div>
          ) : null}
        </>
      )     
      }
    </>
  )
}

export default Weather