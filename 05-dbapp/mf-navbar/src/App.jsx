import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='fixed top-0 left-0 right-0'>
        <Navbar />
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
          <div>Name: mf-navbar</div>
          <div>Framework: react</div>
          <div>Language: JavaScript</div>
          <div>CSS: None</div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
