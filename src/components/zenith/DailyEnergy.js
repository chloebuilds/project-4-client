import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


function DailyEnergy() {

  // const [ num, setNum ] = React.useState('')

  // const handleAfterChange = () => {
  //   alert('youve set your energy level for the day!)
  // }

  return (
    <>
      <h5>Energy level</h5>
      <Slider 
        min={1} max={5} step={1}
        marks={ { 5: 5 } }
        dots={ true }
        // onAfterChange={handleAfterChange}
        defaultValue={1}
        // value={num}
        handleStyle={{
          backgroundColor: 'white',
          border: 0,
        }}
        trackStyle={{
          // background: '#f06455',
          backgroundImage: 'linear-gradient(to right, orange, yellow, green)',
        }}
        railStyle={{
          height: 2,
          background: 'white',
        }}
        dotStyle={{
          // background: 'none',
        }}
        activeDotStyle={{
          // background: '#f06455',
        }}

      />

    </>
  )
}

export default DailyEnergy