import React from 'react'
import { newSprintHabit } from '../../lib/api'
import { Link } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import useForm from '../hooks/useForm'
import Card from '../../styles/styled-components/Card'
import SprintGoals from './SprintGoals'
import SprintHabits from './SprintHabits'
// import useForm from '../hooks/useForm'

export default function NewSprintSetUp() {
  const { currentSprint, hasNewHabitOrGoal, setHasNewHabitOrGoal } =
    React.useContext(UserContext)
  const isLoading = !currentSprint

  const { formData, formErrors, handleChange, setFormData } = useForm({
    habitName: '',
    habitDescription: '',
  })
  // const { formData, formErrors, handleChange, setFormData } = useForm({
  //   habitName: '',
  //   habitDescription: '',
  // })

  const handleNewHabit = async event => {
    event.preventDefault()
    try {
      console.log(currentSprint.id)
      console.log(formData)
      await newSprintHabit(currentSprint.id, formData)
      setFormData({
        habitName: '',
        habitDescription: '',
      })
      setHasNewHabitOrGoal(!hasNewHabitOrGoal)
    } catch (e) {
      console.log(e)
    }
  }
  // const handleNewGoal = async event => {
  //   event.preventDefault()
  //   try {
  //     console.log(currentSprint.id)
  //     console.log(formData)
  //     await newSprintGoal(currentSprint.id, formData)
  //     setFormData({
  //       goalName: '',
  //       goalDescription: '',
  //     })
  //     setHasNewHabitOrGoal(!hasNewHabitOrGoal)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

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
            you can have as many goals/habits as you wish, but we recommend you
            have 3 max or some other text cannot think
          </p>

          <Card>
            <SprintGoals />
          </Card>
          <Card>
            <form onSubmit={handleNewHabit}>
              <div>
                <input
                  placeholder="Drink 2L water every day"
                  onChange={handleChange}
                  name="habitName"
                  value={formData.habitName}
                />
                {formErrors.habitName && <p>{formErrors.habitName}</p>}
              </div>
              <div>
                <input
                  placeholder="Drink 2L water every day"
                  onChange={handleChange}
                  name="habitDescription"
                  value={formData.habitDescription}
                />
                {formErrors.habitDescription && (
                  <p>{formErrors.habitDescription}</p>
                )}
              </div>
              <button>done!</button>
            </form>
          </Card>
          <Card>
            <SprintHabits />
          </Card>
          <Link to="/dashboard">
            <button>sprint dashboard</button>
          </Link>
        </>
      )}
    </>
  )
}
