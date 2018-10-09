import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../Calendar/Calendar.css"

/**
 * Este calendario está deprecado, usar la clase Caledar, esta clase es solo de ejemplo de 
 * como crear un calendario semanal basado en la librería Big Calendar
 * @deprecated En version original
 */
const calendarWeek = (props) => {

    const localizer = BigCalendar.momentLocalizer(moment);
    
    const event = {
      title: 'Nuevo',
      start: new Date('2018', '10', '08', "5", "00"),
      end: new Date('2018', '10', '08', "7", "00"),
    }

    const event2 = {
      title: 'Nuevox2',
      start: new Date('2018', '09', '08', "7", "00"),
      end: new Date('2018', '09', '08', "8", "30"),
    }

    return(
        <div className="padding-10 height-200 width-500">
            <BigCalendar
                events={[event, event2]}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                defaultView={'work_week'}
                views={[ 'work_week']}
            />
        </div>
    )
}

export default calendarWeek;