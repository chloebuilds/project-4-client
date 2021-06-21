import React from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'

function DailyToDoList() {
  const { currentSprint } = React.useContext(UserContext)
  const isLoading = !currentSprint
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef()
  ])
  const [habits, setHabits] = React.useState({
    habit1: { draft: '', final: '', id: null },
    habit2: { draft: '', final: '', id: null },
    habit3: { draft: '', final: '', id: null },
  })

  React.useEffect(() => {
    if (!currentSprint) {
      return
    }
    const fillerHabits = [...Array(3)].map(() => ({
      id: null,
      toDoItem: '',
    }))
    const temporaryHabits = [
      ...currentSprint.sprintHabits.sort((a, b) => a.id - b.id),
      ...fillerHabits
    ]
    temporaryHabits.length = 3
    //************** */ QUESTION ABOUT FINAL AND ID ***********************************************************************************************************///////////////
    const syncedHabits = temporaryHabits.reduce(
      (newState, habit, i) => ({
        ...newState,
        [`to-dos${i + 1}`]: {
          draft: '',
          final: habit.habitName,
          id: habit.id,
        },
      }),
      {}
    )
    setHabits(syncedHabits)
  }, [currentSprint])

  const handleChange = e => {
    setHabits({
      ...habits,
      [e.target.name]: {
        draft: e.target.value,
        final: '',
        id: habits[e.target.name].id,
      },
    })
  }

  const handleBlur = async e => {
    // this is where we update the back-end
    const existingId = habits[e.target.name].id
    if (!e.target.value && !existingId) {
      return
    }
    const id = await updatedHabits(e.target.value, existingId)
    setHabits({
      ...habits,
      [e.target.name]: { draft: '', final: e.target.value, id },
    })
  }

  const handleKeyDown = (event, index) => {
    if (event.key !== 'Enter') {
      return
    }
    if (index < 2) {
      inputRefs.current[index + 1].current.focus()
    } else {
      inputRefs.current[index].current.blur()
    }
  }

  const updatedHabits = async (habitToUpdate, existingId) => {
    try {
      if (existingId) {
        const { data: putData } = await axios.put(
          `/api/sprints/${currentSprint?.id}/sprint-habits/${existingId}/`,
          { habitName: habitToUpdate }
        )
        return putData.id
      }
      const { data: postData } = await axios.post(
        `/api/sprints/${currentSprint?.id}/sprint-habits/`,
        {
          habitName: habitToUpdate,
        }
      )
      return postData.id
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = e => {
    setHabits({
      ...habits,
      [e.target.name]: {
        draft: habits[e.target.name].final,
        final: '',
        id: habits[e.target.name].id,
      },
    })
  }

  console.log(inputRefs.current)

  return (
    <>
      {isLoading && (
        <div>
          <p>ॐ..loading...ॐ</p>
        </div>
      )}
      <h3>Habits I Want To Build: </h3>
      <p>We recommend up to 3 habits per sprint, add them below</p>
      {habits &&
        Object.entries(habits).map(([label, habit], i) => {
          return (
            <div key={label}>
              <label style={{ display: 'inline-block', width: 20 }}>
                {i + 1}.{' '}
              </label>
              {habit.final ? (
                <>
                  <Styled.P ref={inputRefs.current[i]}>{habit.final}</Styled.P>
                  <button
                    name={label}
                    onClick={handleEdit}
                    style={{ marginLeft: 10 }}
                  >
                    ✏️
                  </button>
                </>
              ) : (
                <Styled.Input
                  placeholder="My goal is..."
                  name={label}
                  ref={inputRefs.current[i]}
                  value={habit.draft}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={e => handleKeyDown(e, i)}
                />
              )}
            </div>
          )
        })}
    </>
  )
}

export default DailyToDoList

const Styled = {
  P: styled.p`
    display: inline-block;
  `,
  Input: styled.input`
    outline: none;
    border: none;
    background: rgba(247, 247, 247, 0.2);
    color: #100f10;
    padding: 7px;
    margin: 1px;
    &::placeholder {
      color: #262526;
    }
  `,
}

// import React from 'react'

// import { newSprintHabit } from '../../lib/api'
// import { UserContext } from '../context/UserContext'
// import useForm from '../hooks/useForm'
// import Card from '../../styles/styled-components/Card'

// export default function AddHabitsToNewSprint() {
//   const { currentSprint, hasNewHabitOrGoal, setHasNewHabitOrGoal } =
//     React.useContext(UserContext)
//   // const isLoading = !currentSprint
//   const { formData, formErrors, handleChange, setFormData } = useForm({
//     habitName: '',
//   })

//   const handleNewHabit = async event => {
//     event.preventDefault()
//     try {
//       console.log(currentSprint.id)
//       console.log(formData)
//       await newSprintHabit(currentSprint.id, formData)
//       setFormData({
//         habitName: '',
//       })
//       setHasNewHabitOrGoal(!hasNewHabitOrGoal)
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   return (
//     <div>
//       <Card>
//         <form onSubmit={handleNewHabit}>
//           <div>
//             <input
//               placeholder="Drink 2L water every day"
//               onChange={handleChange}
//               name="habitName"
//               value={formData.habitName}
//             />
//             {formErrors.habitName && <p>{formErrors.habitName}</p>}
//           </div>
//           <button>done!</button>
//         </form>
//       </Card>
//     </div>
//   )
// }
