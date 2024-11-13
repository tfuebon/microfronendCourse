import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ColorList } from './components/ColorList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorList colorsList={[]} />
      <ColorList colorsList={["#0fcc7a", "#c90fcc", "#cc480f"]} />
    </>
  )
}

export default App
