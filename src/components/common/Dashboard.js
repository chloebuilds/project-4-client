import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../../styles/styled-components/GlassCard'
import { UserContext } from '../context/UserContext'
import DailyGratitudes from '../zenith/DailyGratitudes'
import DisplaySprintGoals from '../zenith/DisplaySprintGoals'
import SprintHabits from '../zenith/SprintHabits'
// import DailyTodos from '../zenith/DailyTodos'
import WeeklyIntention from '../zenith/WeeklyIntention'
import DailyMoods from '../zenith/DailyMood'
import DailyEnergy from '../zenith/DailyEnergy'
import ZenQuote from '../zenith/ZenQuote'
import Calendar from '../zenith/Calendar'
import Weather from '../zenith/Weather'
import gradientBackground from '../../assets/gradient-background.jpg'
import { DateTime } from 'luxon'

function calculateDaysIntoSprint(startDate) {
  const today = DateTime.now()
  const start = DateTime.fromISO(startDate) //takes the argument of a date (coming from currentSprint?.startDate)
  const diff = today.diff(start, 'days') // the difference from start in 'days'
  console.log(diff.toObject())
  return Math.floor(diff.toObject().days) + 1
}

function Dashboard() {
  const history = useHistory()
  const { user, currentSprint } = React.useContext(UserContext)


  const currentDay = calculateDaysIntoSprint(currentSprint?.startDate)

  if (user && !currentSprint) {
    history.push('/sprints/new')
  }

  return (
    <>
      
      <Section>
        <Header>
          <Card>
            <h2>Nice to see you, {user?.name}, welcome to your daily dashboard!</h2>
            <p>You are currently on {currentSprint?.sprintName} and you are on day {currentDay} of 28. You got this!</p>
          </Card>
        </Header>
        <Card>
          <WeeklyIntention />
        </Card>
        <Card>
          <DailyGratitudes />
        </Card>
        <Card>
          <Weather />
        </Card>
        <Card>
          <Calendar />
        </Card>
        
        <Card>
          <ZenQuote />
        </Card>
        <Card>
          <DisplaySprintGoals />
        </Card>
        <Card>
          <SprintHabits />
        </Card>
        {/* 
      <Card>
        <DailyTodos />
      </Card> */}
        <Card>
          <DailyMoods />
        </Card>
        <Card>
          <DailyEnergy />
        </Card>
      
      </Section>
    </>
  )
}

export default Dashboard

const Section = styled.section`
  background-image: url(${gradientBackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const Header = styled.section`
  width: 100%;
`
