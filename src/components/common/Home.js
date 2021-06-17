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
      <ButtonContainer>
        <Link to='/login'><Button>Login</Button></Link>
        <Link to='/register'><Button>Register</Button></Link>
      </ButtonContainer>
      <section>
        <p>
              The ulitmate daily tool to get more done, develop yourself and achieve your dreams.
        </p>
        <p>
          With Zenith you can apply agile methodologies to your personal life. Set yourself a 4-week sprint to work towards your goals and build on your daily habits. Track and action daily, weekly and monthly tasks such as: 
        </p>
        <ul>
          <li>Goals to work on during your 4-week sprint</li>
          <li>Weekly intentions</li>
          <li>Daily habits to complete and build into your daily practice</li>
          <li>Daily to-do lists</li>
          <li>Daily gratitudes</li>
          <li>Daily moods and energy levels</li>
        </ul>
      </section>
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Card
          isFlex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="1rem"
          margin="2rem"
          background="#262526"
          border="1px solid #262526"
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px" // ! not working
        >
          <section>
            <h5>1. SINGULAR NOUN </h5>
            <p>zenith of something is the time when it is most successful or powerful. His career is now at its zenith.</p>
              
            <h5>2. SINGULAR NOUN</h5>
            <p>The zenith is the point at which the sun or moon is directly above you and seems to be at its highest. The sun rises, reaches its zenith and sets</p>
            <p>Synonyms: height, summit, peak, top</p>
          </section>
        </Card>
      </div>
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