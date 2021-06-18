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
        {currentSprint?.moods.map(mood => (
          <div key={mood.id}>
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"></input>
            <p>{mood.moodName}</p>
          </div>
          
        ))}
      </>
      }
    
    </>
  )
}

export default DailyMoods