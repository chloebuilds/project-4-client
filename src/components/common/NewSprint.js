import React from 'react'
import { useHistory } from 'react-router-dom'
// import axios from 'axios'

import { isAuthenticated } from '../../../lib/auth'
// import { addNewSprint } from '../../../lib/api'
// import Error from './Error'


export default function NewSprint() {
  const history = useHistory()
  const isLoggedIn = isAuthenticated()
  console.log(isLoggedIn)
  // Reac.useEffect(() => {
  //   const getUser = async () => {
  //     const user
  //   }
  // })







  return (
    <h1>HELLO I AM A NEW SPRINT</h1>
  )
}