import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4">
            <nav className="container mx-auto">
                <ul className="flex space-x-4">
                        <li><a href="/home" className="text-white hover:text-gray-400">Home</a></li>
                        <li><a href="/communities" className="text-white hover:text-gray-400">Communities</a></li>
                        <li><a href="/login" className="text-white hover:text-gray-400">Login</a></li>
                        <li><a href="/register" className="text-white hover:text-gray-400">Register</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
