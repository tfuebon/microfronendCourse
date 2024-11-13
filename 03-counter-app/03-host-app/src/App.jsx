import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from 'navbar/Navbar'
import { Counter } from 'counter/Counter'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="hostContainer">
        <h2>Counter MF</h2>
        <Counter />
      </div>
    </>
  )
}

export default App
