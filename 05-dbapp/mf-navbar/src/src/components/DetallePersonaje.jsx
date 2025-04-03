import { useParams } from "react-router-dom"

export const DetallePersonaje = () => {
    const { id } = useParams()
    console.log(JSON.stringify(params))
    return (
        <>
            <h1>DetallePersonaje</h1>
        </>
    )
}