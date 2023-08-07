
import './login.css';
import { Link } from "react-router-dom";
function Login() {
   return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
         <Link className="link"  to="/Register">Register</Link>
          </button>
    </div>
  )
}

export default Login;