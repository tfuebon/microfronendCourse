import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input, List } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Input
            value={count}
            onChange={setCount}
            onSubmit={console.log}
        />
        <List
            items={["Item 1", "Item 2", "Item 3"]}
        />
    </>
  )
}

export default App
