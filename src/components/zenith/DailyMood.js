import React from 'react'

import { UserContext } from '../context/UserContext'

function DailyMoods() {

  const { currentSprint } = React.useContext(UserContext)
  
  const isLoading = !currentSprint


  return (
    <>
      {isLoading && <div><p>loading...</p></div>}
      {currentSprint &&
      <> 
        <h3>Daily Moods</h3>
        <button type="checkbox">Happy</button>
        <button type="checkbox">Sad</button>
        <button type="checkbox">Angry</button>
        <button type="checkbox">Anxious</button>
        {/* {currentSprint?.moods.map(mood => (
          <div key={mood.id}></div>
          ))} */}
      </>
      }
    
    </>
  )
}

export default DailyMoods