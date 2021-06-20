import React from 'react'

import { UserContext } from '../context/UserContext'
import { addMoods } from '../../lib/api'

function DailyMoods() {

  const { currentSprint } = React.useContext(UserContext)
  
  const isLoading = !currentSprint


  const handleClick = async (e) => {
    try {
      const newMood = { name: '' }

      const res = await addMoods( newMood )

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {isLoading && <div><p>loading...</p></div>}
      {currentSprint &&
      <> 
        <h3>Daily Moods</h3>
        <button onClick={handleClick}>Happy</button>
        <button onClick={handleClick}>Sad</button>
        <button onClick={handleClick}>Angry</button>
        <button onClick={handleClick}>Anxious</button>
        {/* {currentSprint?.moods.map(mood => (
          <div key={mood.id}></div>
          ))} */}
      </>
      }
    
    </>
  )
}

export default DailyMoods