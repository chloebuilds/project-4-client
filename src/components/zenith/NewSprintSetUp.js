import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { isAuthenticated } from '../../lib/auth'
import { UserContext } from '../context/UserContext'
import Card from '../../styles/styled-components/Card'
import NewSprintGoals from './NewSprintGoals'
import NewSprintHabits from './NewSprintHabits'
// import SprintHabits from './SprintHabits'

export default function NewSprintSetUp() {
  const isLoggedIn = isAuthenticated()
  const history = useHistory()
  const { currentSprint } = React.useContext(UserContext)
  const isLoading = !currentSprint

  if (!isLoggedIn) {
    history.push('/401')
  }

  return (
    <>
      {isLoading && (
        <div>
          <p>ॐ..loading...ॐ</p>
        </div>
      )}
      {currentSprint && (
        <>
          <h1>{currentSprint.sprintName}</h1>
          <h6>
            from {currentSprint.startDate} until {currentSprint.endDate}
          </h6>
          <p>
            every sprint needs a goal you want to achieve and a habit you want
            to build by the end of your sprint and{' '}
            <span>{currentSprint.sprintName}</span> is no different.
          </p>
          <p>
            Once you submit, you will not be able to change your habits or
            goals, so in the words of the Grail Knight, choose wisely...
          </p>

          <Card>
            <NewSprintGoals />
          </Card>
          <Card>
            <NewSprintHabits />
          </Card>
          {/* <Card>
            <SprintHabits />
          </Card> */}
          <Link to="/dashboard">
            <button>sprint dashboard</button>
          </Link>
        </>
      )}
    </>
  )
}
