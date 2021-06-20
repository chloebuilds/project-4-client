import React from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const draftGratitudes = [...Array(3)].map(() => ({ id: null, final: '' }))

function DailyGratitudes() {
  const { currentSprint } = React.useContext(UserContext)
  const inputRefs = React.useRef([React.createRef(), React.createRef(), React.createRef()])
  const [gratitudes, setGratitudes] = React.useState({
    gratitude1: { draft: '', final: '', id: null },
    gratitude2: { draft: '', final: '', id: null },
    gratitude3: { draft: '', final: '', id: null },
  })

  React.useEffect(() => {
    if (!currentSprint) {
      return
    }

    const filledGratitudes = [...currentSprint.dailyGratitudes, ...draftGratitudes].sort((a,b) => a.id && a.id - b.id)
    filledGratitudes.length = 3
    const syncedGratitudes = filledGratitudes.reduce(
      (state, gratitude, i) => ({
        ...state,
        [`gratitude${i + 1}`]: { draft: '', final: gratitude.dailyGratitude, id: gratitude.id },
      }),
      {}
    )
    setGratitudes(syncedGratitudes)
  }, [currentSprint])

  const handleChange = (e) => {
    setGratitudes({
      ...gratitudes,
      [e.target.name]: { draft: e.target.value, final: '', id: gratitudes[e.target.name].id },
    })
  }

  const handleBlur = async ({ target: { name, value } }) => {
    const existingId = gratitudes[name].id
    if (!value && !existingId) {
      return
    }
    const id = await updateGratitudes(value, existingId)
    setGratitudes({ ...gratitudes, [name]: { draft: '', final: value, id } })
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

  const updateGratitudes = async (gratitudeText, existingId) => {
    try {
      if (existingId) {
        const { data: putData } = await axios.put(
          `/api/sprints/${currentSprint?.id}/gratitudes/${existingId}/`,
          { dailyGratitude: gratitudeText }
        )
        return putData.id
      }
      const { data: postData } = await axios.post(`/api/sprints/${currentSprint?.id}/gratitudes/`, {
        dailyGratitude: gratitudeText,
      })
      return postData.id
    } catch (err) {
      console.log(err)
    }
  }
  console.log(inputRefs.current)

  const handleEdit = (e) => {
    setGratitudes(existingGratitudes => {
      const gratitudeIndex = Object.keys(existingGratitudes).indexOf(e.target.name)
      console.log(inputRefs.current[gratitudeIndex])
      console.log(gratitudeIndex)
      inputRefs.current[gratitudeIndex].current.focus()
      return {
        ...existingGratitudes,
        [e.target.name]: {
          draft: existingGratitudes[e.target.name].final,
          final: '',
          id: existingGratitudes[e.target.name].id,
        },
      }
    })
  
  }

  return (
    <>
      <h3>Daily Gratitude</h3>
      <p>Today I am grateful for...</p>
      {gratitudes &&
        Object.entries(gratitudes).map(([label, gratitude], i) => {
          return (
            <div key={label}>
              <label>{i + 1}. </label>
              {gratitude.final ? (
                <>
                  <Styled.P ref={inputRefs.current[i]}>{gratitude.final}</Styled.P>
                  <button name={label} onClick={handleEdit}>
                    ✏️
                  </button>
                </>
              ) : (
                <input
                  placeholder="I am grateful for.."
                  name={label}
                  ref={inputRefs.current[i]}
                  value={gratitude.draft}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              )}
            </div>
          )
        })}
    </>
  )
}

export default DailyGratitudes

const Styled = {
  P: styled.p`
    display: inline-block;
  `,
}

// const logGratitudes = () => {
//   axios
//     .get(`api/sprints/${currentSprint?.id}/gratitudes/`)
//     .then(({ data }) => console.log(data))
//     .catch((err) => console.error(err))
// }
// const clearGratitudes = async () => {
//   try {
//     const { data } = await axios.get(`/api/sprints/${currentSprint?.id}/gratitudes/`)
//     for (const gratitude of data) {
//       try {
//         await axios.delete(`/api/sprints/${currentSprint?.id}/gratitudes/${gratitude.id}/`)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     setGratitudes({
//       gratitude1: { draft: '', final: '', id: null },
//       gratitude2: { draft: '', final: '', id: null },
//       gratitude3: { draft: '', final: '', id: null },
//     })
//     console.log('Gratitudes deleted')
//   } catch (err) {
//     console.log(err)
//   }
// }
// <button onClick={logGratitudes}>Log Gratitudes</button>
// <button onClick={clearGratitudes}>Clear Gratitudes</button>
