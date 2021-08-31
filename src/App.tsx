import React, { useState } from 'react';
import ical, { CalendarComponent } from 'node-ical';

import TimeTable from './components/TimeTable';

const App = () => {
    const [studentId, setStudentId] = useState('');
    const [calendar, setCalendar] = useState<CalendarComponent[]>([]);

    const getICal = async () => {
        const events = await ical.async.fromURL('https://noahvb.nl/213222.ics');

        setCalendar(Object.values(events));
    };

    return (
        <div className="App">
            <input value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            <button type="button" onClick={getICal}>Verkrijg rooster</button>

            <TimeTable calendar={calendar} />
        </div>
    );
};

export default App;
