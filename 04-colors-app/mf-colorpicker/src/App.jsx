import { useState } from 'react'
import './App.css'
import { ColorPicker } from './components'
import { useColors } from './hooks/useColors';

function App() {
  const [count, setCount] = useState(0)
  const { color, handleChangeColor, onSubmit } = useColors();

  return (
    <>
      <ColorPicker
        color={color}
        handleChangeColor={handleChangeColor}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default App
