import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Counter } from './components/Counter'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='fixed top-0 left-0 right-0 text-center mt-10'>
      <Counter initialCounter={10} />
    </div>
  )
}

export default App
