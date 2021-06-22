import React from 'react'
import { addNewSprint } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import { UserContext } from '../context/UserContext'
import useForm from '../hooks/useForm'
import styled from 'styled-components'
import FormStyle from '../../styles/styled-components/FormStyle'

export default function NewSprint() {
  // const [isError, setIsError] = React.useState(null)
  const isLoggedIn = isAuthenticated()
  const [isStartingNewSprint, setisStartingNewSprint] = React.useState(false)
  const history = useHistory()
  const { user, currentSprint, refreshUser } = React.useContext(UserContext)
  console.log(user)
  const isLoading = !user
  const { formData, formErrors, handleChange } = useForm({
    sprintName: '',
  })

  const handleStartToggle = () => {
    setisStartingNewSprint(!isStartingNewSprint)
  }

  const handleNewSprint = async event => {
    event.preventDefault()
    try {
      await addNewSprint(formData)
      refreshUser()
      history.push('/sprints/new/setup')
    } catch (e) {
      console.log(e)
    }
  }

  if (currentSprint) {
    history.push('/dashboard')
  }

  if (!isLoggedIn) {
    history.push('/401')
  }

  return (
    <>
      {isLoading && (
        <Container>
          <p>ॐ..loading...ॐ</p>
        </Container>
      )}
      {user && (
        <>
          <Container>
            <div className={isStartingNewSprint ? 'no-show' : ''}>
              <p>Hey {user.name},</p>
              <p>
                It looks like you&apos;re not currently in an active sprint.{' '}
              </p>
              <p>Begin your new sprint now. </p>
              <button onClick={handleStartToggle}>Start new sprint</button>
            </div>
            <div className={isStartingNewSprint ? '' : 'no-show'}>
              <form onSubmit={handleNewSprint}>
                <p>First things first, let&apos;s give your sprint a name..</p>
                <div>
                  <FormStyle.Input
                    placeholder="My awesome sprint"
                    onChange={handleChange}
                    name="sprintName"
                    value={formData.sprintName}
                  />
                  {formErrors.sprintName && <p>{formErrors.sprintName}</p>}
                </div>
                <button>Done!</button>
              </form>
            </div>
          </Container>
        </>
      )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - var(--navbar-height));
`
