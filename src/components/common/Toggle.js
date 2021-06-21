import React from 'react'
import { ToggleContainer } from '../../styles/styled-components/ToggleContainer'
// import { func, string } from 'prop-types'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  return (
    <>
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <span className="material-icons light">light_mode</span>
        <span className="material-icons dark">dark_mode</span>
      </ToggleContainer>
    </>
  )
}

// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// }
export default Toggle
