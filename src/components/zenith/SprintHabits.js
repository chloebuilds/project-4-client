import React from 'react'
import { UserContext } from '../context/UserContext'

export default function SprintHabitsDisplay() {
  const { currentSprint } = React.useContext(UserContext)
  const [habits, setHabits] = React.useState([])
  const isLoading = !currentSprint
  const currentHabits = currentSprint?.sprintHabits

  React.useEffect(() => {
    setHabits(currentHabits)
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
          <h3>My Sprint Habits</h3>
          <ol>
            {habits?.map(habit => (
              <div key={habit.id}>
                <li>
                  <p>{habit.habitName}</p>
                </li>
              </div>
            ))}
          </ol>
        </>
      )}
    </>
  )
}
