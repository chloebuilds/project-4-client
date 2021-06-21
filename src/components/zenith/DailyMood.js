import React from 'react'

import { UserContext } from '../context/UserContext'
import { addMoods, getCurrentMoods, deleteMood, getSingleSprint } from '../../lib/api'


function DailyMoods() {

  const { currentSprint, user } = React.useContext(UserContext)
  const isLoading = !currentSprint
  // const [ availableMoods, setAvailableMoods ] = React.useState([  ])
  const [ currentMoods, setCurrentMoods ] = React.useState([])
  const [allMoods, setAllMoods] = React.useState(['Happy', 'Sad', 'Anxious', 'Angry'])
  const availableMoods = allMoods.filter( mood => !currentMoods.includes(mood)) 

  // const updatedCurrentMoods = currentMoods.filter( mood => !)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const sprintId = currentSprint?.id
        const moodsResponse = await getCurrentMoods(sprintId)
        // console.log(moodsResponse.data)
        setCurrentMoods(moodsResponse.data.map( m => m.moodName))
        // moodsResponse.data.sort(alphabetical)
        // setAllMoods()
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [currentSprint?.id])


  const handleAddingMoods = async (e) => {
    try {
      const moodToAdd = e.target.value
      setCurrentMoods([...currentMoods, moodToAdd])
      const sprintId = currentSprint?.id
      await addMoods(sprintId, moodToAdd)

    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteMood = async e => {
    try {
      const moodToDelete = e.target.value
      const updatedCurrentMoods = currentMoods.filter(mood => mood !== moodToDelete)
      const sprintId = currentSprint?.id
      const response = await getSingleSprint(sprintId)
      const moodToDeleteId = response.data.moods.find(currentMood => currentMood.moodName === moodToDelete).id
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
      {isLoading && <div><p>loading...</p></div>}
      {currentSprint &&
      <>
        <h3>How are you feeling today {user.name}?</h3>
        <div className="mood-button-container">
          {currentMoods.map(mood => (
            <button
              key={mood}
              value={mood}
              type="button"
              onClick={handleDeleteMood}
            >
              {mood}
            </button>
          ))}
        </div>

        <div>
          {/* <h5>Add moods:</h5> */}
          {availableMoods.map(mood => (
            <button 
              onClick={handleAddingMoods}
              key={mood}
              value={mood}
              type="button"
            >
              {mood}
            </button>

          ))}
        </div>
      </>
      }
    </>
  )
}

export default DailyMoods
