import React from 'react'

import { UserContext } from '../context/UserContext'

function DisplaySprintGoals() {

  const { currentSprint } = React.useContext(UserContext)

  const isLoading = !currentSprint



  return (

    <>
      <h3>My sprint goals:</h3>
      {isLoading && <div><p>loading...</p></div>}
      {currentSprint &&
      <ol>
        {currentSprint?.sprintGoals.map(goal => (
          <li key={goal.id}>
            <p>{goal.goalName}</p>
          </li>

        ))}
      </ol>
      }

    </>
    
  )

}

export default DisplaySprintGoals