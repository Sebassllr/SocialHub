import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../Calendar/Calendar.css"

const calendar = (props) => {

    const localizer = BigCalendar.momentLocalizer(moment);
    
    const event = {
      title: 'Nuevo',
      start: new Date('2018', '10', '08'),
      end: new Date('2018', '10', '09'),
      allDay: true,
    }

    const event2 = {
      title: 'Nuevo',
      start: new Date('2018', '09', '08'),
      end: new Date('2018', '09', '10'),
      allDay: true,
    }

    const events = [event, event2];

    return(
        <div className="padding-10 height-200 width-500">
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={['month']}
            />
        </div>
    )
}

export default calendar;