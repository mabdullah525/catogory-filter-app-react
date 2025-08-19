import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <h1>Alpha Tech</h1>
                </div>
                <ul className="nav-links">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-btn">Sign Up</li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar