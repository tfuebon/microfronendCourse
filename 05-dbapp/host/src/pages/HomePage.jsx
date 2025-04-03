import { Counter } from "counter/Counter"
import { Error } from "../components/Error"

export const HomePage = () => {
    return (
        <>
            <h2 className="text-3xl font-bold">Counter MF</h2>
            <Error>
                {/* Con error */}{/* <Counter /> */}
                {/* Sin error */} <Counter initialCounter={10} />
            </Error>
            
        </>
    )
}