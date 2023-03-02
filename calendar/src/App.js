
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const MyCalendar = (props) => {

  
  const myEventsList = [
    {
      // id: 132,
      title: 'Meeting with John',
      start: new Date("2023-03-01T05:00:00.000Z"),
      end: new Date("2023-03-01T05:00:00.000Z"),
    },
    {
      // id: 5452,
      title: 'Lunch with Sarah',
      start: new Date("2023-03-02T05:00:00.000Z"),
      end: new Date("2023-03-02T09:00:00.000Z"),
    },
    {
      // id: 33443,
      title: 'Conference call with team',
      start: new Date("2023-03-03T05:00:00.000Z"),
      end: new Date("2023-03-03T09:00:00.000Z"),
    },
  ];
  
  return(
  
  <div style={{height: "100vh", marginLeft: "15%"}}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 800 , width: 1500}}
    />
  </div>
)
}

export default MyCalendar;
