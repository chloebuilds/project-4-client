import React from 'react'

import { UserContext } from '../context/UserContext'
import {
  addMoods,
  getCurrentMoods,
  deleteMood,
  getSingleSprint
} from '../../lib/api'

import styled from 'styled-components'

function DailyMoods() {
  const { currentSprint, user } = React.useContext(UserContext)
  const isLoading = !currentSprint
  // const [ availableMoods, setAvailableMoods ] = React.useState([  ])
  const [currentMoods, setCurrentMoods] = React.useState([])
  const [allMoods, setAllMoods] = React.useState([
    'Happy',
    'Excited',
    'Optimistic',
    'Calm',
    'Zen',
    'Hungry',
    'Hopeful',
    'Meh',
    'Tired',
    'Sad',
    'Anxious',
    'Angry',
    'Frustrated'
  ])
  // const [deletedMoods, setDeletedMoods] = React.useState([])
  const availableMoods = allMoods.filter(mood => !currentMoods.includes(mood))

  // const updatedCurrentMoods = currentMoods.filter( mood => !)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const sprintId = currentSprint?.id
        const moodsResponse = await getCurrentMoods(sprintId)
        // console.log(moodsResponse.data)
        setCurrentMoods(moodsResponse.data.map(m => m.moodName))
        // moodsResponse.data.sort(alphabetical)
        // setAllMoods()
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [currentSprint?.id])

  const handleAddingMoods = async e => {
    try {
      const moodToAdd = e.target.value
      setCurrentMoods([...currentMoods, moodToAdd])
      const sprintId = currentSprint?.id
      await addMoods(sprintId, moodToAdd)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(setAllMoods)
  const handleDeleteMood = async e => {
    try {
      const moodToDelete = e.target.value
      const updatedCurrentMoods = currentMoods.filter(
        mood => mood !== moodToDelete
      )
      const sprintId = currentSprint?.id
      const response = await getSingleSprint(sprintId)
      const moodToDeleteId = response.data.moods.find(
        currentMood => currentMood.moodName === moodToDelete
      ).id
      console.log(moodToDeleteId)
      await deleteMood(sprintId, moodToDeleteId)
      setCurrentMoods(updatedCurrentMoods)
      // console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(currentSprint.moods)

  return (
    <>
      {isLoading && (
        <div>
          <p>loading...</p>
        </div>
      )}
      {currentSprint && (
        <>
          <h3>How are you feeling today {user.name}?</h3>

          <p>Current mood:</p>
          <div>
            {currentMoods.map(mood => (
              <MoodButton
                key={mood}
                value={mood}
                type="button"
                onClick={handleDeleteMood}
              >
                {mood}
              </MoodButton>
            ))}
          </div>

          <p>Select a mood:</p>
          <div>
            {availableMoods.map(mood => (
              <MoodButton
                onClick={handleAddingMoods}
                key={mood}
                value={mood}
                type="button"
              >
                {mood}
              </MoodButton>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default DailyMoods

const MoodButton = styled.button`
  margin: 2px;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  background-color: white;
  color: #100f10;
`
