import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'

import { isAuthenticated } from '../../lib/auth'
import { UserContext } from '../context/UserContext'
import Card from '../../styles/styled-components/GlassCard'
import StyledCard from '../../styles/styled-components/Card'

import NewSprintGoals from './NewSprintGoals'
import NewSprintHabits from './NewSprintHabits'
// import SprintHabits from './SprintHabits'
import { DateTime } from 'luxon'

import styled from 'styled-components'

const formatDate = date => DateTime.fromISO(date).toFormat('DDD')

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')

export default function NewSprintSetUp() {
  const [hasAddedGoalsAndHabits, setiHasAddedGoalsAndHabits] =
    React.useState(false)
  const history = useHistory()
  const isLoggedIn = isAuthenticated()
  const { user, currentSprint, refreshUser } = React.useContext(UserContext)
  const isLoading = !user
  console.log(user)
  const [gif, setGif] = React.useState(null)
  React.useEffect(() => {
    const getGif = async () => {
      const { data } = await giphyFetch.gif('ZgYBhq1x7L1bW')
      setGif(data)
    }
    getGif()
  }, [])

  if (!isLoggedIn) {
    history.push('/401')
  }

  const handleSprintToggle = () => {
    setiHasAddedGoalsAndHabits(!hasAddedGoalsAndHabits)
  }

  return (
    <>
      {isLoading && (
        <Container>
          <p>ॐ..loading...ॐ</p>
        </Container>
      )}
      {currentSprint && (
        <>
          <Section>
            <div className={hasAddedGoalsAndHabits ? 'no-show' : ''}>
              <Container>
                <StyledCard
                  isFlex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  padding="1rem 4rem"
                  margin="0.5em"
                  background="rgba(247, 247, 247, 0.658)"
                  color="#100f10"
                >
                  <Title>{currentSprint.sprintName}</Title>
                  <h4>
                    from {formatDate(currentSprint.startDate)} until{' '}
                    {formatDate(currentSprint.endDate)}
                  </h4>
                  <p>
                    Kudos for starting your sprint! Now let&apos;s get it
                    sorted. Every sprint needs 3 goals you either want to work
                    on or want to achieve by the end of your sprint and 3 habit
                    you want to build on during your sprint and{' '}
                    <Span>{currentSprint.sprintName}</Span> is no different.
                  </p>
                  <p>
                    Once you submit, you will not be able to change your habits
                    or goals for the next 28 days&mdash;so in the words of the
                    Grail Knight&mdash; choose wisely...
                  </p>
                </StyledCard>

                <Card width="auto" padding="3rem">
                  <NewSprintGoals />
                </Card>
                <Card width="auto" padding="3rem">
                  <NewSprintHabits />
                </Card>
                <button
                  style={{ margin: '0 auto' }}
                  onClick={handleSprintToggle}
                >
                  All Done
                </button>
              </Container>
            </div>
            <div className={hasAddedGoalsAndHabits ? '' : 'no-show'}>
              <Container>
                <StyledCard
                  isFlex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  padding="3rem 4rem"
                  margin="0.5em"
                  background="rgba(247, 247, 247, 0.658)"
                  color="#100f10"
                >
                  <div className="gif">
                    {gif && <Gif gif={gif} width={400} />}
                  </div>
                  <div>
                    <Link to="/dashboard" style={{ margin: 'auto' }}>
                      <Button onClick={refreshUser} margin-top="100px">
                        My Dashboard
                      </Button>
                    </Link>
                  </div>
                </StyledCard>
              </Container>
            </div>
          </Section>
        </>
      )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 8rem;
`
const Section = styled.section`
  background-image: url('https://wallpapertag.com/wallpaper/full/d/2/b/194863-red-gradient-background-2880x1800-for-iphone-5s.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
  min-height: calc(100% - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${props => (props.darkMode ? '#d38a84' : '#7b81ec')};
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 0.7rem;
`

const Span = styled.span`
  font-size: 16px;
  font-style: bold;
  text-align: none;
  color: ${props => (props.darkMode ? '#d38a84' : '#7b81ec')};
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 0;
`

const Button = styled.button`
  margin-top: 50px;
`
