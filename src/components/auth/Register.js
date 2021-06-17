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
    avatar: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(formData)
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
    <section>
      <h1>Create a new account</h1>
      <form onSubmit={handleSubmit} setError={setError}>
        <div>
          <input
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          {formErrors.name && (
            <p>{formErrors.name}</p>
          )}
        </div>
        <div>
          <input
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
            type="password"
            placeholder="Password Confirmation"
            onChange={handleChange}
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
          />
          {formErrors.passwordConfirmation && (
            <p>{formErrors.passwordConfirmation}</p>
          )}
        </div>
        <div>
          <input placeholder="Add your face!"
            onChange={handleChange}
            name="avatar"
            value={formData.avatar}
          />
        </div>
        {error && <p>{error}</p>}
        <div>
          <button type="submit">
            Register
          </button>
            
        </div>
      </form>
      <footer>
        <h5>Already signed up? <span><Link to="/login">Login instead.</Link></span> </h5>
      </footer>
      <ToastContainer />
    </section>
  )
}

export default Register