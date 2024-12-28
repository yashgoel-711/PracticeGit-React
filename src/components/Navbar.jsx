import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4">
            <nav className="container mx-auto">
                <ul className="flex space-x-4">
                        <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
                        <li><Link to="/communities" className="text-white hover:text-gray-400">Communities</Link></li>
                        <li><Link to="/login" className="text-white hover:text-gray-400">Login</Link></li>
                        <li><Link to="/register" className="text-white hover:text-gray-400">Register</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
