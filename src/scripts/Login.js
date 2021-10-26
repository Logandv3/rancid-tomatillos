import React from "react"
import "../styles/Login.css"

const Login = () => {
  return (
    <form className="login-form">
      <h2>Welcome to Rancid Tomatillos</h2>
      <input type="text" placeholder="Please Enter Username" />
      <input type="password" placeholder="Enter Password" />
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login
