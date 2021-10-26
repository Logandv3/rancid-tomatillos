import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
      <h2 className="rancid-tomatillos"> Rancid Tomatillos </h2>
      <a
        className="header-link"
        href="https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Watch List
      </a>
      <a
        className="header-link"
        href="https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Favorites
      </a>
      <NavLink className="login-link" to="/login">
        <p>Login</p>
      </NavLink>
      <input className="search-bar" type="search" placeholder=" Search for movie" />
    </header>
  )
}

export default Header
