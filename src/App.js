import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import Dashboard from './components/common/Dashboard'
import Nav from './components/common/Nav'
import NotFound from './components/common/NotFound'
import NotAuthorized from './components/common/NotAuthorized'
import { UserProvider } from './components/context/UserContext'
// import SprintGoals from './components/zenith/SprintGoals'
import NewSprint from './components/zenith/NewSprint'
import NewSprintSetUp from './components/zenith/NewSprintSetUp'


import { GlobalStyle } from '../src/styles/styled-components/Global'


function App() {


  return (
    <Router>
      <UserProvider>
        <GlobalStyle />
        <Nav />
        <ToastContainer />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/sprints/new" component={NewSprint} />
        <Route path="/sprints" component={SprintsIndex} /> */}
          {/* <Route path="/sprints/:sprintId/sprint-goals" component={SprintGoals} /> */}
          <Route path="/sprints/new" component={NewSprint} />
          <Route path="/sprints/:sprintId" component={NewSprintSetUp} />

        
          {/* for any page not found */}
          <Route path="/unauthorized" component={NotAuthorized} />
          <Route exact path="*" component={NotFound} />
        
        </Switch>
      </UserProvider>
    </Router>
    
  
  
  )
}

export default App
