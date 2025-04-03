import { useState } from "react"

export const Counter = ({initialCounter}) => {

    if(!initialCounter) throw new Error("Counter not ready")

    const [counter, setCounter] = useState(initialCounter)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div className="text-4xl">
                <button className="bg-gray-300 text-center font-bold rounded-md p-4" onClick={handleAdd}>+1</button>
                <span className="mx-5">{counter}</span>
                <button className="bg-gray-300 text-center font-bold rounded-md p-4" onClick={handleSubtract}>-1</button>
            </div>
            <span className="text-4xl mt-5">Initial value: {initialCounter}</span>
        </>
    )
}