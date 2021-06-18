import React from 'react'
import axios from 'axios'

function Weather() {

  const baseUrl = 'api.openweathermap.org/data/2.5/weather?'
  const apiKey = ''
  const [ city, setCity ] = React.useState('')


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(baseUrl + `q=${city}&appid=${apiKey}`)
        setCity(res.data)
        
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [city])

  return (
    <p>Such a beautiful day!</p>
  )
}

export default Weather