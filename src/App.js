import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import NotFound from './components/common/NotFound'
import NotAuthorized from './components/common/NotAuthorized'

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`

function App() {


  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <ToastContainer />

      
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/sprints/new" component={NewSprint} />
        <Route path="/sprints/:sprintId" component={SprintShow} />
        <Route path="/sprints" component={SprintsIndex} /> */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        
        {/* for any page not found */}
        <Route path="/unauthorized" component={NotAuthorized} />
        <Route exact path="*" component={NotFound} />

      </Switch>
      
    </Router>
  
  )
}

export default App
