import React from 'react'
import styled from 'styled-components'
import { ToggleContainer } from '../../styles/styled-components/ToggleContainer'
// import { func, string } from 'prop-types'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  return (
    <>
      <Container>
        <ToggleContainer
          lightTheme={isLight}
          onClick={toggleTheme}
          className="toggle-container"
        >
          <span className="material-icons light">light_mode</span>
          <span className="material-icons dark">dark_mode</span>
        </ToggleContainer>
      </Container>
    </>
  )
}

// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// }
export default Toggle

const Container = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: right;
  width: auto;
`
