import React from 'react'
import { UserContext } from '../context/UserContext'
// import axios from 'axios'

import styled from 'styled-components'

function WeeklyIntention() {
  const { currentSprint } = React.useContext(UserContext)
  // const inputRef = React.useRef()
  // const [ intention, setIntention ] = React.useState({
  // draft: '', final: '', id: null,
  // })

  console.log(currentSprint)

  React.useEffect(() => {
    if (!currentSprint) {
      return
    }
  }, [currentSprint])

  return (
    <>
      <h3>Intention for this week:</h3>
      <Styled.Input placeholder="I am / I will..." />
    </>
  )
}

export default WeeklyIntention

const Styled = {
  P: styled.p`
    display: inline-block;
  `,
  Input: styled.input`
    outline: none;
    border: none;
    background: rgba(247, 247, 247, 0.2);
    color: #262526;
    padding: 7px;
    margin: 1px;
    &::placeholder {
      color: #100f10;
    }
  `,
}
