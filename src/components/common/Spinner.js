import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

function Spinner() {
  return (
    <SpinnerContainer>
      <Loader
        type="TailSpin"
        color="#7b81ec"
        height="75"
        width="75"
        timeout={3000}
      />
    </SpinnerContainer>
  )
}

export default Spinner

const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
