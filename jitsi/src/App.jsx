import { useState } from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Jitsi } from './Jitsi'
import { GetLink } from './GetLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Jitsi/>} path='meet/:id'/>
      <Route path='/link' element={<GetLink/>}/>
    </Routes>
  )
}

export default App
