import React from 'react'
// import { getAllSprintHabits, newSprintHabit, editASprintHabit, deleteASprintHabit } from '../../lib/api'
import { Link } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
// import useForm from '../hooks/useForm'





export default function NewSprintSetUp() {
  const { currentSprint } = React.useContext(UserContext)
  const isLoading = !currentSprint
  console.log(currentSprint?.sprintName)
  return (
    <>
      {isLoading && <div><p>ॐ..loading...ॐ</p></div>}
      {currentSprint && 
      <>
        <h1>{currentSprint.sprintName}</h1>
        <p>every sprint needs a goal you want to achieve and a habit you want to build by the end of your sprint and <span>{currentSprint.sprintName}</span> is no different.</p>
        <p>you can have as many goals/habits as you wish, but be vary</p>
        <h2>ADD GOALS AND DISPLAY</h2>
        <h2>ADD HABITS AND DISPLAY</h2>
        <Link to="/dashboard"><button>take me to my dashboard</button></Link>
      </>
      }
    </>
  )
}