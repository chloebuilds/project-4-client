import React from 'react'

import { UserContext } from '../context/UserContext'

function SprintGoal() {

  const { currentSprint } = React.useContext(UserContext)

  
  const isLoading = !currentSprint


  return (
    <>
      {isLoading && <div><p>loading...</p></div>}
      {currentSprint &&
      <> 
        <h3>Sprint Goals</h3>
        {currentSprint?.sprintGoals.map(goal => (
          <div key={goal.id}>
            <p>{goal.goalName}</p>
            <p>{goal.goalDescription}</p>

          </div>
          
        ))}
      </>
      }
    
    </>
  )

}

export default SprintGoal