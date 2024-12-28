import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4">
            <nav className="container mx-auto">
                <ul className="flex space-x-4">
                        <li><link to="/home" className="text-white hover:text-gray-400">Home</link></li>
                        <li><link to="/communities" className="text-white hover:text-gray-400">Communities</link></li>
                        <li><link to="/login" className="text-white hover:text-gray-400">Login</link></li>
                        <li><link to="/register" className="text-white hover:text-gray-400">Register</link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
