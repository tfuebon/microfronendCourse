import { useState } from 'react'
import styled from '@emotion/styled'
import './styles.css'
import { Button } from './Button'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleSubtract = () => {
        setCount(count - 1)
    }

    const Success = styled.span`
        color: lime;
    `
    const Error = styled.span`
        color: tomato;
    `

    return (
        <div className="counterContainer">
            <h2>Counter: 
                { count > 0 
                    ? <Success>{count}</Success>  
                    : <Error>{count}</Error>
                }
            </h2>
            <Button onClick={handleAdd} text="+1"/>
            <Button onClick={handleSubtract} text="-1"/>
        </div>
    )
}