import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    Username: "",
    Password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7060/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("student", JSON.stringify(data.student));
        alert("Login Successful ✅");
        navigate("/dashboard");
      } else {
        const error = await response.text();
        alert("Login Failed ❌ " + error);
      }

    } catch (error) {
      alert("Server not running ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              name="Username"
              value={loginData.Username}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="Password"
              value={loginData.Password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Password</label>
          </div>

          <button type="submit">Login</button>

        </form>

      </div>
    </div>
  );
}

export default Login;
