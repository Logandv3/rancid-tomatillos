import React, { Component } from "react";
import "../styles/Login.css";
import { Link } from 'react-router-dom';

class Login extends Component {


  render() {
    return(
      <form className="login-form">
        <h2>Welcome to Rancid Tomatillos</h2>
        <input type="text" placeholder="Please Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Log In</button>
      </form>
    )
  }
}

export default Login