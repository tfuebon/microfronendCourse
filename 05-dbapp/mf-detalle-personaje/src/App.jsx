import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DetallePersonaje } from './components/DetallePersonaje'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DetallePersonaje />
    </>
  )
}

export default App
