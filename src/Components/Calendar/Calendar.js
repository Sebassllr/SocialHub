import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import classes from "../Calendar/Calendar.module.css"

const calendar = (props) => {

    const localizer = BigCalendar.momentLocalizer(moment);

    const styles = [classes.padding, classes.calendarHeight, classes.calendarWidth].join(' ');

    return(
        <div className={styles}>
            <BigCalendar
                localizer={localizer}
                events={props.events}
                startAccessor="start"
                endAccessor="end"
                defaultView={props.defaultView}
                views={props.views}
            />
        </div>
    )
}

export default calendar;