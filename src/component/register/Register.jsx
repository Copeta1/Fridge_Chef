import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./register.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Registar() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // eslint-disable-next-line no-unused-vars
    await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }),
      headers: myHeaders,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      postData(formData);
      navigate("/login");
    }
  };

  return (
    <div className="registration-form-container">
      <Navbar />
      <div className="registration-form-sub-container">
        <h1>Create an account</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <TextField
                id="firstName"
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                required
                fullWidth
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <TextField
                id="lastName"
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required
                fullWidth
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <TextField
                id="email"
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
                fullWidth
                autoComplete="off"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password:</label>
              <TextField
                id="password"
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                required
                fullWidth
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <TextField
                id="confirmPassword"
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
                required
                fullWidth
                autoComplete="off"
              />
            </div>
          </div>
          {errorMessage && <div className="pwd_err">{errorMessage}</div>}
          <div>
            <div className="buttons">
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#ff395c", height: "40px" }}
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
