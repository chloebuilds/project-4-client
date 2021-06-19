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
        {/* {currentSprint?.moods.map(mood => (
          <div key={mood.id}> */}
            <button type="checkbox">Happy</button>
            <button type="checkbox">Sad</button>
            <button type="checkbox">Angry</button>
            <button type="checkbox">Anxious</button>
          {/* </div> */}
          
        {/* ))} */}
      </>
      }
    
    </>
  )
}

export default DailyMoods