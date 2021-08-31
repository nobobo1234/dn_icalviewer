import { useState } from 'react'
import ical, { CalendarComponent } from 'node-ical';
import PropTypes from 'prop-types'

import Wrapper from './wrapper'

/**
 * Dit is de hoofdcomponent van de timetable.
 * Hierin wordt de `calendar` variabele geïnterpreteerd en worden vervolgens alle rijen geprint.
 */
/* eslint-disable no-unused-vars */
const TimeTable = ({ studentId, week, year }) => {
  const [calendar, setCalendar] = useState<CalendarComponent[]>([])

  const getICal = async () => {
    const events = await ical.async.fromURL('https://noahvb.nl/213222.ics');

    setCalendar(Object.values(events));
  };

  console.log(calendar)

  return (
    <Wrapper>
      <h2>Test</h2>
    </Wrapper>
  )
}

TimeTable.propTypes = {
  studentId: PropTypes.number.isRequired,
  week: PropTypes.number,
  year: PropTypes.number,
}

TimeTable.defaultProps = {
  week: 36,
  year: 2021,
}

export default TimeTable;
