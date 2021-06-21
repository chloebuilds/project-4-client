import React from 'react'
import { UserContext } from '../context/UserContext'

export default function SprintHabitsDisplay() {
  const { currentSprint } = React.useContext(UserContext)
  const [habits, setHabits] = React.useState([])
  const isLoading = !currentSprint
  const currentHabits = currentSprint?.sprintHabits

  React.useEffect(() => {
    const getCurrentHabits = () => {
      setHabits(currentHabits)
    }
    getCurrentHabits()
  }, [currentHabits])

  return (
    <>
      {isLoading && (
        <div>
          <p>ॐ..loading...ॐ</p>
        </div>
      )}
      {currentSprint && (
        <>
          <h3>Habits</h3>
          {habits?.map(habit => (
            <div key={habit.id}>
              <ul>
                <li>
                  <h4>{habit.habitName}</h4>
                </li>
              </ul>
            </div>
          ))}
        </>
      )}
    </>
  )
}
