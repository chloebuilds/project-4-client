import React from 'react'
// import { useHistory } from 'react-router-dom'
// import styled from 'styled-components'
import Card from '../../styles/styled-components/Card'
import { UserContext } from '../context/UserContext'

import SprintGoals from '../zenith/SprintGoals'
import SprintHabits from '../zenith/SprintHabits'
// import DailyTodos from '../zenith/DailyTodos'
import WeeklyIntention from '../zenith/WeeklyIntention'
import DailyMoods from '../zenith/DailyMood'
import DailyEnergy from '../zenith/DailyEnergy'
import ZenQuote from '../zenith/ZenQuote'
import Calendar from '../zenith/Calendar'
import Weather from '../zenith/Weather'


function Dashboard() {
  // const history = useHistory()
  const { user, currentSprint } = React.useContext(UserContext)
  console.log(user, currentSprint)
  // if (!currentSprint) {
  //   history.push('/sprints/new')
  // }
  return (
    <>
      <h2>Dashboard</h2>

      <Card>
        <Weather />
      </Card>
      <Card>
        <ZenQuote />
      </Card>
      <Card>
        <SprintGoals />
      </Card>
      <Card>
        <SprintHabits />
      </Card>
      {/* 
      <Card>
        <DailyTodos />
      </Card> */}
      <Card>
        <WeeklyIntention />
      </Card>
      <Card>
        <DailyMoods />
      </Card>
      <Card>
        <DailyEnergy />
      </Card>
      <Card>
        <Calendar />
      </Card>
    </>
  )
}

export default Dashboard

