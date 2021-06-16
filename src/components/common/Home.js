import React from 'react'
import gradientBackground from '../../assets/gradient-background.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from './Button'



function Home() {

  return (

    <Wrapper>
      <Title>Hello World, I&apos;m Zenith!</Title>
      <Link to='/login'><Button>Login</Button></Link>
      <Link to='/register'><Button>Register</Button></Link>
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
