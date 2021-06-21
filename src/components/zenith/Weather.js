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
        const res = await axios.get(baseUrl + `q=${user.city || 'London' }&appid=${apiKey}`)
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
        <p>ॐ..loading...ॐ</p>
      ) : (
        <>
          {weatherData !== null ? (
            <>
              <div style= {{ display: 'flex', justifyContent: 'space-between' }}>
                <h3><i className="fa fa-street-view"></i> {weatherData.name} | {weatherData.sys.country}</h3>
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="imgicon"/>
                <p> {weatherData.weather[0].main} | {parseFloat(weatherData.main.temp - 273.15).toFixed(1)}&deg;C </p>
                <p>Min: {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}&deg;C 
                  | Max: {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}&deg;C 
                  | Humidity: {weatherData.main.humidity}% </p>
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