import React from 'react'
import { addNewSprint, getAllSprints } from '../../lib/api'
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'

// import { isAuthenticated } from '../../../lib/auth'
import { UserContext } from '../context/UserContext'
import useForm from '../hooks/useForm'

// import { addNewSprint } from '../../../lib/api'
// import Error from './Error'


export default function NewSprint() {
  // const [isError, setIsError] = React.useState(null)
  const [isStartingNewSprint, setisStartingNewSprint] = React.useState(false)
  // const history = useHistory()
  const { user } = React.useContext(UserContext)
  console.log(user)
  const isLoading = !user
  const { formData, formErrors, handleChange } = useForm({
    sprintName: '',
  })
  

  const handleStartToggle = () => {
    setisStartingNewSprint(!isStartingNewSprint)
  }
  console.log(isStartingNewSprint)

  const handleNewSprint = async event => {
    event.preventDefault()
    try {
      await addNewSprint(formData)
      const allSprints = await getAllSprints()
      console.log(allSprints)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {isLoading && <div><p>ॐ</p></div>}
      {user && 
      <>
        <div className={ isStartingNewSprint ? 'no-show' : ''}>
          <p>hey {user.username},</p>
          <p>looks like you&apos;re not currently in a sprint. <br/> begin your new sprint now. </p>
          <button onClick={handleStartToggle}>
        start new sprint
          </button>
        </div>
        <div className={ isStartingNewSprint ? '' : 'no-show'}>
          <form onSubmit={handleNewSprint}>
            <p>first things first, give your sprint a name</p>
            <div>
              <input
                placeholder="my awesome sprint"
                onChange={handleChange}
                name="sprintName"
                value={formData.sprintName}
              />
              {formErrors.sprintName && (
                <p>{formErrors.sprintName}</p>
              )}
            </div>
            <button>
            done!
            </button>
          </form>
        
        </div>
      </>
      }
      
    </>
  )
}