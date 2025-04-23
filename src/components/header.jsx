import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <Link to={"/"} className="logo">Logo</Link>

                    <div className="header-nav">
                        <NavLink to={"/"} className="header-nav-link">Home</NavLink>
                        <NavLink to={"/about"} className="header-nav-link">About</NavLink>
                        <NavLink to={"/contact"} className="header-nav-link">Contact</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header