import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import styled from 'styled-components'
// import { Button } from '../../styles/styled-components/Button'

// import { UserContext } from '../context/UserContext'

function Calendar() {

  // const { currentSprint } = React.useContext(UserContext)

  const [ weekendsVisible, setWeekendsVisible ] = React.useState(true)
  // const [ currentEvents, setCurrentEvents ] = React.useState({})


  const handleHide = () => {
    setWeekendsVisible(false)
  }

  const handleShow = () => {
    setWeekendsVisible(true)
  }

  return (
    <CalendarCard>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek',

        }}
        weekends={weekendsVisible}
        // initialEvents={} // alternatively, use the `events` setting to fetch from a feed
        // select={this.handleDateSelect}
        // eventContent={renderEventContent} // custom render function
        // eventClick={this.handleEventClick}
        // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        // /* you can update a remote database when these fire:
        //       eventAdd={function(){}}
        //       eventChange={function(){}}
        //       eventRemove={function(){}}
        //       */
      />

      {weekendsVisible ? (
        <CalendarButtons type='button'  onClick={handleHide}>Hide weekends</CalendarButtons>
      ) : (
        <CalendarButtons type='button' onClick={handleShow}>Show weekends</CalendarButtons>
      )
      }
    </CalendarCard>

  )

}

export default Calendar

const CalendarButtons = styled.button`
  background-color: #2C3E50;
  color: white;
  padding: 8px 4px 8px 4px;
  border: 1px;
  border-radius: 3px;
  margin: 10px 0 0 0;
  `

const CalendarCard = styled.div`
  max-width: 95%;
  max-heigth: 95%;
`


