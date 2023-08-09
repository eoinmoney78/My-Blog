import axios from "axios";
import { useContext, useRef, useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {
  console.log("Login component rendered");

  const [error, setError] = useState(null); // Added error state

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  console.log("Context:", useContext(Context));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setError(null); // Clear the error state on successful login
    } catch (err) {
      console.log("Login error:", err);
      console.log("Server Response:", err.response.data);
      setError(err.response.data); // Store the error message in the state
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      {error && <div className="loginError">{error}</div>} {/* Display the error message if it exists */}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
