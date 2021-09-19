import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { UserContext } from '../context/UserContext'

import styled from 'styled-components'
import Card from '../../styles/styled-components/GlassCard'
import FormStyle from '../../styles/styled-components/FormStyle'
// import gradientBackground from '../../assets/gradient-background.jpg'

function Login() {
  const { login } = React.useContext(UserContext)

  const [isError, setIsError] = React.useState(false)
  const { formData, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = e => login(e, formData, setIsError)

  return (
    <Section>
      <Card width="40%" isFlex flexDirection="column" alignItems="center">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <FormStyle.Input
            className="user-form user-info"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <FormStyle.Input
            className="user-form user-info"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {isError && <small>Either email or password were incorrect</small>}

          <ButtonContainer>
            <button type="submit">Log In</button>
          </ButtonContainer>
        </form>

        <FormStyle.P>
          New to Zenith? <Link to="/register">Register now</Link>
        </FormStyle.P>
      </Card>
    </Section>
  )
}

export default Login

const Section = styled.section`
  background-image: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: calc(100% - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
