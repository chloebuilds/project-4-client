import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { UserContext } from '../context/UserContext'
import { addEnergyLevel } from '../../lib/api'

function DailyEnergy() {
  const { currentSprint } = React.useContext(UserContext)
  const [ num, setNum ] = React.useState(null)

  const marks = {
    1: {
      style: {
        color: 'white',
      },
      label: '😴',
    },
    2: {
      style: {
        color: 'white',
      },
      label: '😩',
    },
    3: {
      style: {
        color: 'white',
      },
      label: '😐',
    },
    4: {
      style: {
        color: 'white',
      },
      label: '🙂',
    },
    5: {
      style: {
        color: 'white',
      },
      label: '🥳',
    },
  }
  

  const handleAfterChange = async (value) => {
    try {
      const energyLevel = value
      setNum(energyLevel)
      const sprintId = currentSprint?.id
      await addEnergyLevel(sprintId, energyLevel)

    } catch (err) {
      console.log(err)
    }

  }

  // console.log(currentSprint)

  return (
    <>
      <h3>Energy level</h3>
      {}
      <Slider 
        min={1} max={5} step={1}
        marks={ marks}
        dots={ true }
        // value={} 
        onAfterChange={handleAfterChange}
        // defaultValue={1}
        // startPoint
        // ariaLabelledByForHandle={''}
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
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