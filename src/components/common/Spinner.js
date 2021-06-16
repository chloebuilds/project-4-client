import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

function Spinner() {
  return (
    <div id="loading">
      <Loader type="TailSpin" color="#aa77da" height="75" width="75" timeout={3000}/>
    </div>
  )
}

export default Spinner