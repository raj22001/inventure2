import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InventureLandingPage from './components/InventureLandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InventureLandingPage />
    </>
  )
}

export default App
