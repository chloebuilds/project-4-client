import React from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function DailyToDoList() {
  const { currentSprint } = React.useContext(UserContext)
  const isLoading = !currentSprint
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef()
  ])
  const [toDos, setToDos] = React.useState({
    toDo1: { draft: '', final: '', id: null },
    toDo2: { draft: '', final: '', id: null },
    toDo3: { draft: '', final: '', id: null },
    toDo4: { draft: '', final: '', id: null },
    toDo5: { draft: '', final: '', id: null },
  })

  React.useEffect(() => {
    if (!currentSprint) {
      return
    }
    const fillerToDos = [...Array(5)].map(() => ({
      id: null,
      toDoItem: '',
    }))
    const temporaryToDos = [
      ...currentSprint.toDos.sort((a, b) => a.id - b.id),
      ...fillerToDos
    ]
    temporaryToDos.length = 5
    //************** */ QUESTION ABOUT FINAL AND ID ***********************************************************************************************************///////////////
    const syncedToDos = temporaryToDos.reduce(
      (newState, toDo, i) => ({
        ...newState,
        [`to-dos${i + 1}`]: {
          draft: '',
          final: toDo.toDoItem,
          id: toDo.id,
        },
      }),
      {}
    )
    setToDos(syncedToDos)
  }, [currentSprint])

  const handleChange = e => {
    setToDos({
      ...toDos,
      [e.target.name]: {
        draft: e.target.value,
        final: '',
        id: toDos[e.target.name].id,
      },
    })
  }

  const handleBlur = async e => {
    // this is where we update the back-end
    const existingId = toDos[e.target.name].id
    if (!e.target.value && !existingId) {
      return
    }
    const id = await updatedToDos(e.target.value, existingId)
    setToDos({
      ...toDos,
      [e.target.name]: { draft: '', final: e.target.value, id },
    })
  }

  const handleKeyDown = (event, index) => {
    if (event.key !== 'Enter') {
      return
    }
    if (index < 4) {
      inputRefs.current[index + 1].current.focus()
    } else {
      inputRefs.current[index].current.blur()
    }
  }

  const updatedToDos = async (toDoText, existingId) => {
    try {
      if (existingId) {
        const { data: putData } = await axios.put(
          `/api/sprints/${currentSprint?.id}/to-dos/${existingId}/`,
          { toDoItem: toDoText }
        )
        return putData.id
      }
      const { data: postData } = await axios.post(
        `/api/sprints/${currentSprint?.id}/to-dos/`,
        {
          toDoItem: toDoText,
        }
      )
      return postData.id
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = e => {
    setToDos({
      ...toDos,
      [e.target.name]: {
        draft: toDos[e.target.name].final,
        final: '',
        id: toDos[e.target.name].id,
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
      <h3>To-Do List </h3>
      <p>I will get these done today...</p>
      {toDos &&
        Object.entries(toDos).map(([label, toDo], i) => {
          return (
            <div key={label}>
              <label style={{ display: 'inline-block', width: 20 }}>
                {i + 1}.{' '}
              </label>
              {toDo.final ? (
                <>
                  <Styled.P ref={inputRefs.current[i]}>{toDo.final}</Styled.P>
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={handleEdit}
                    style={{ marginLeft: 10 }}
                  />
                </>
              ) : (
                <Styled.Input
                  name={label}
                  ref={inputRefs.current[i]}
                  value={toDo.draft}
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
