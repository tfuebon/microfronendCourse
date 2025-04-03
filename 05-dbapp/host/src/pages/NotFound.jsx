import { NavLink } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className="text-center text-xl text-red-500 mt-16">
            <h1>404 Page not found</h1>
            <br />
            <NavLink to="/" className="bg-blue-400 p-3 text-white rounded-md">
                Go to home
            </NavLink>
        </div>
    )
}