import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useForm from '../hooks/useForm'
import { UserContext } from '../context/UserContext'

import styled from 'styled-components'
import Card from '../../styles/styled-components/GlassCard'
import gradientBackground from '../../assets/gradient-background.jpg'

function Login() {
  const { login } = React.useContext(UserContext)
  
  const [isError, setIsError] = React.useState(false)
  const { formData, handleChange } = useForm({
    email: '',
    passwords: '',
  })

  const handleSubmit = (e) => {
    login(e, formData, setIsError)
    toast.dark('🚀 Successfully logged in!', {
      position: 'top-right',
      autoClose: 4500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <Section>
      <Card>
        <h1>Log In</h1>
        <form className="user-form" onSubmit={handleSubmit} >
          
          <div>
            <input
              className="user-form user-info"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="user-form user-info"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {isError && (
            <p>
            Either email or password were incorrect
            </p>
          )}
        
          <div>
            <button type="submit" className="user-form submit-button">
            Log In
            </button>
          </div>
            
        </form>
        <footer>
          <h5 className="user-form">New to Zenith? <span><Link to="/register">Register now</Link></span></h5>
        </footer>
        
      </Card>
    </Section>          
  )
} 

export default Login

const Section = styled.section`
  background-image: url(${gradientBackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
`
