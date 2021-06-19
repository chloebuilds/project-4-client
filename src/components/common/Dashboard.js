import React from 'react'
// import styled from 'styled-components'
import Card from '../../styles/styled-components/Card'
import { UserContext } from '../context/UserContext'
import DailyGratitudes from '../zenith/DailyGratitudes'
import SprintGoals from '../zenith/SprintGoals'
// import SprintHabits from '../zenith/SprintHabits'
// import DailyTodos from '../zenith/DailyTodos'
import WeeklyIntention from '../zenith/WeeklyIntention'
// import DailyMood from '../zenith/DailyMood'
// import DailyEnergy from '../zenith/DailyEnergy'
import ZenQuote from '../zenith/ZenQuote'
// import Calendar from '../zenith/Calendar'


function Dashboard() {

  const { user, setUser, currentSprint } = React.useContext(UserContext)
  console.log(user, currentSprint)

  

  return (
    <>
      <h2>Dashboard</h2>

      <Card>
        <ZenQuote />
      </Card>
      <Card>
        <SprintGoals />
      </Card>
      {/* <Card>
        <SprintHabits />
      </Card>
      <Card>
        <DailyTodos />
      </Card> */}
      <Card>
        <WeeklyIntention />
      </Card>
      <Card>
        <DailyGratitudes />
      </Card>
      {/* <Card>
        <DailyMood />
      </Card>
      <Card>
        <DailyEnergy />
      </Card>
      <Card>
        <Calendar />
      </Card> */}
    </>
  )
}

export default Dashboard

