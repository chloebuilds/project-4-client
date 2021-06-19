import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

function Calendar() {

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridWeek"
 
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      // weekends={this.state.weekendsVisible}
      // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
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
  )

}

export default Calendar
