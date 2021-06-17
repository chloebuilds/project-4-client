import React from 'react'
import useForm from '../hooks/useForm'
import { registerUser } from '../../lib/api'
import { useHistory, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


function Register() {
  const history = useHistory()
  const [error, setError] = React.useState('')
  const { formData, formErrors, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await registerUser(formData)
      toast.dark('🚀 You have registered!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      history.push('/login')
    } catch (e) {
      setError(e.response.data.message)
      
    }
  }

  return (
    <section className="user-forms">
      <section className="form-container">
        <h1 className="user-form">Create a new account</h1>
        <form className="user-form" onSubmit={handleSubmit} setError={setError}>
          <div>
            <input
              className="user-form user-info"
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={formData.username}
            />
            {formErrors.username && (
              <p>{formErrors.username}</p>
            )}
          </div>
          <div>
            <input
              className="user-form user-info"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            {formErrors.email && (
              <p>{formErrors.email}</p>
            )}
          </div>
          <div>
            <input
              className="user-form user-info"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            {formErrors.password && (
              <p>{formErrors.password}</p>
            )}
          </div>
          <div>
            <input
              className="user-form user-info"
              type="password"
              placeholder="Password Confirmation"
              onChange={handleChange}
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
            />
            {formErrors.passwordConfirmation && (
              <p className="user-form">{formErrors.passwordConfirmation}</p>
            )}
          </div>
          {error && <p>{error}</p>}
          <div>
            <button type="submit" className="user-form submit-button">
            Register
            </button>
            
          </div>
        </form>
        <footer>
          <h5>Already signed up? <span><Link to="/login">Login instead.</Link></span> </h5>
        </footer>
      </section>
      <ToastContainer />
    </section>
  )
}

export default Register