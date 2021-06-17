import React from 'react'
import { Link } from 'react-router-dom'

import gradientBackground from '../../assets/gradient-background.jpg'
import styled from 'styled-components'
import Card from '../../styles/styled-components/Card'
import { Button } from '../../styles/styled-components/Button'



function Home() {

  return (

    <Wrapper>
      <Title >Hello World, I&apos;m Zenith!</Title>
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Card
          isFlex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="2rem"
          margin="0 0 2rem"
          background="#262526"
          border="1px solid linear-gradient(to right, #D763CD, #8F44FD)"
        >
        Card Content
      
        </Card>
      </div>
      <ButtonContainer>
        <Link to='/login'><Button>Login</Button></Link>
        <Link to='/register'><Button>Register</Button></Link>
      </ButtonContainer>
    </Wrapper>
  )
}



export default Home



const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${props => props.darkMode ? '#FF8040' : '#151B54'};
  font-family: 'Space Grotesk', sans-serif;
  
`
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 10em;
  border-radius: 2rem;
  height: 100%;
  /* background: url(${gradientBackground}); */
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

`