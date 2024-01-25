import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStorage from './hooks/useStorage'

function App() {
  const {setStorage} = useStorage()

  return (
    <>
    <div>
      <input type="text" placeholder='ENTER DATA' onChange={(e)=>setStorage(e.target.value)} />
    </div>
    </>
  )
}

export default App
