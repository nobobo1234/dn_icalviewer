import React from 'react';
import { CalendarComponent } from 'node-ical';

import Wrapper from './wrapper';

type Props = {
  /** Een lijst met alle events die uit een .ics-file geparset zijn. */
  calendar: CalendarComponent[],
};

/**
 * Dit is de hoofdcomponent van de timetable.
 * Hierin wordt de `calendar` variabele geïnterpreteerd en worden vervolgens alle rijen geprint.
 */
/* eslint-disable no-unused-vars */
const TimeTable = ({ calendar }: Props) => (
    <Wrapper>
        <h2>Test</h2>
    </Wrapper>
);

export default TimeTable;
