import React from 'react'
import { useParams } from 'react-router-dom'

import { getSingleSprint } from '../../lib/api'

function SprintGoal() {

  const { sprintId } = useParams()
  const [ sprint, setSprint ] = React.useState(null)
  const [ sprintGoals, setSprintGoals ] = React.useState([])


  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log(sprintId)
        const res = await getSingleSprint(sprintId)
        setSprint(res.data)
        setSprintGoals(res.data.sprint_goals)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [sprintId])

  console.log(sprint)
  console.log(sprintGoals, 'heyhey')

  return (
    <>
      <p>hello!</p>
      {sprintGoals.map(goal => (
        <> 
          <p>{goal.goal_name}lol</p>
        </>
      ))}
    </>
  )

}

export default SprintGoal