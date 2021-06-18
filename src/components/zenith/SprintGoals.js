import React from 'react'
import { UserContext } from '../context/UserContext'

export default function SprintGoalsDisplay() {
  const { currentSprint } = React.useContext(UserContext)
  const [ goals, setGoals ] = React.useState([])
  const isLoading = !currentSprint
  const currentGoals = currentSprint?.sprintGoals

  React.useEffect(() => {
    const getCurrentGoals = () => {
      setGoals(currentGoals)
    }
    getCurrentGoals()
  }, [currentGoals])

  return (
    <>
      {isLoading && <div><p>ॐ..loading...ॐ</p></div>}
      {currentSprint && 
      <>
        <h3>goals</h3>
        {goals?.map(goal => (
          <div key={goal.id}>
            <ul>
              <li>
                <h4>{goal.goalName}</h4>
                <p>{goal.goalDescription}</p>
              </li>
            </ul>
          </div>
        ))}
      </>
      }
    </>
  )
}







// import React from 'react'

// import { UserContext } from '../context/UserContext'

// function SprintGoal() {

//   const { currentSprint } = React.useContext(UserContext)

  
//   const isLoading = !currentSprint


//   return (
//     <>
//       {isLoading && <div><p>loading...</p></div>}
//       {currentSprint &&
//       <> 
//         <h3>Sprint Goals</h3>
//         {currentSprint?.sprintGoals.map(goal => (
//           <div key={goal.id}>
//             <p>{goal.goalName}</p>
//             <p>{goal.goalDescription}</p>

//           </div>
          
//         ))}
//       </>
//       }
    
//     </>
//   )

// }

// export default SprintGoal