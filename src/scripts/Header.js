import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
      <h2 className="rancid-tomatillos"> Rancid Tomatillos </h2>
        <NavLink className="watch-link" to="/">
          <p>My Watch List</p>
        </NavLink>
        <NavLink className="favs-link" to="/">
          <p>My Favorites</p>
        </NavLink>
      <NavLink className="login-link" to="/login">
        <p>Login</p>
      </NavLink>
      <input className="search-bar" type="search" placeholder=" Search for movie" />
    </header>
  )
}

export default Header
