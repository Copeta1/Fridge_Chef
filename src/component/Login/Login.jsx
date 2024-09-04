import { TextField } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [error, SetError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      headers: myHeaders,
    });

    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await postData();
    console.log(data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/mainpage");
    } else {
      console.error("Login failed:", data.error || "Unknown error");
      SetError(data.error || "Please try again.");
    }
  };

  return (
    <div className="login-form-container">
      <Navbar />
      <h1>Welcome Back!</h1>
      <p>Hope you have an amazing day!</p>
      <div className="login-form-sub-container">
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="login_email">
            <label htmlFor="email">Email:</label>
            <TextField
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              fullWidth
            />
          </div>
          <div className="login_password">
            <label htmlFor="password">Password:</label>
            <TextField
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              fullWidth
              autoComplete="off"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="buttons">
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#ff395c", height: "40px" }}
            >
              Sigh In
            </Button>
            <div
              className="login_no_account"
              onClick={() => navigate("/register")}
            >
              <p>Don't have an account?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
