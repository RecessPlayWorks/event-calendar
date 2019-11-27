import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import "@fullcalendar/core/main.css"
import "@fullcalendar/daygrid/main.css"
import styled from "styled-components"

const StyledCalendar = styled.div`
margin: 3vh 4vw;
& .fc-unthemed {
  box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.5);
  background: #81b4b4;
  font-family: sans-serif;
  h2 {
    font-weight: 200;
  }

   }
   & td.fc-event-container {
    //  border: 2px solid white !important;
   }
`;

class MyEventCalendar extends React.Component {
  handleEventClick = e => {
    console.log('====================================');
    console.log(`title:${e.event.title} description:${e.event.extendedProps.description}`);
    console.log('====================================');
  }
  render() {
    const events = [
      {
        title: "Dungeons & Dragons",
        start: "2019-11-25T16:00",
        end: "2019-11-29T17:00",
        description: "Well Hello!",
      },
      {
        title: "Art Show",
        start: "2019-11-05T15:00",
        end: "2019-11-06T13:13:55.008",
        description: "Well Hello!",
      },
      {
        title: "Crafts Class",
        start: "2019-11-05T16:00",
        end: "2019-11-06T15:17:00",
        description: "Well Hello!",
      },
      {
        title: "Chess",
        start: "2019-11-07T13:30:59.00",
        end: "2019-11-08T14:30:00",
        description: "this is another event",
      },
      {
        title: "event 3",
        start: "2019-07-03T13:13:55.008",
        end: "2019-075-04T13:13:55.008",
        description: "this is random event",
      },
    ]
    return (
      <StyledCalendar>
        <h1>Events calendar</h1>
        <FullCalendar
          className="full-calendar"
          eventClick={this.handleEventClick}
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
        />
      </StyledCalendar>
    )
  }
}

export default MyEventCalendar