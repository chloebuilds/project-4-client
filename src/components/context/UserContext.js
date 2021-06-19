import React, { createContext, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getUser } from '../../lib/api'
import { getPayload } from '../../lib/auth'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { toast } from 'react-toastify'

// USER CONTEXT

//? 1. Create context
export const UserContext = createContext()

//? 2. Create provider
export const UserProvider = (props) => {

  // Put any kind of state or information you want inside your provider. 
  // This will be available to all children components via useContext.

  const history = useHistory()
  const [user, setUser] = useState(null)
  console.log(user)
  const currentSprint = user?.createdSprints.find(sprint => Date.parse(sprint.endDate) > Date.now())
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  React.useEffect(() => {
    const { sub: userId } = getPayload() // getting the userID(sub) from the payload
    const getData = async () => {
      try {
        const res = await getUser(userId)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [location, isLoggedIn])

  console.log(user)

  const login = async (event, formData, setIsError) => {
    event.preventDefault()

    try {
      const res = await loginUser(formData)
      setToken(res.data.token)
      toast.dark('🚀 Successfully logged in!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setIsLoggedIn(true)
      currentSprint ? history.push('/dashboard') : history.push('/sprints/new')
      
    } catch (e) {
      setIsError(true)
    }
  }
  //? 3. Give provider value
  return (
  // This UserContext is the same UserContext created on line 6 when you called createContext()
  // createContext() returns a .Provider where you can give your context some value.
    <UserContext.Provider value={{ user, currentSprint, login }}>
      {/* props.children is a placeholder for all the component you are going to wrap your provider around. */}
      {props.children}
    </UserContext.Provider>
  )
}

// ? 4. Now go to your App.js (or whichever component contains all the other 
// ? components that you want to have access to your context) and wrap those components in our provider.
// ? 5. Now you can useContext() in any of the children to access the values you pass in the provider.
