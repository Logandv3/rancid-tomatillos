import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h2> Rancid Tomatillos </h2>
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
        <button>Search Movies</button>
      </header>
    );
  }
}

export default Header;
