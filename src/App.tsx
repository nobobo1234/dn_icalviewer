import React, { useState } from 'react'

import TimeTable from './components/TimeTable'

const App = () => {
  const [studentId, setStudentId] = useState('')

  return (
    <div className="App">
      <input value={studentId} onChange={(e) => setStudentId(e.target.value)} />

      <TimeTable studentId={Number.parseInt(studentId, 10)} week={36} year={2021} />
    </div>
  )
}

export default App
