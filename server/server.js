const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Users = require("././models/Users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;


const app = express();
const JWT_SECRET = 'your_jwt_secret';
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email: email });

    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "User does not exist" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Incorrect password");
      return res.status(401).json({ error: "Password was incorrect" });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    console.log("Login was successful");
    return res.status(200).json({ message: "Login was successful", token });
    
  } catch (error) {
    console.error("Login error: ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Users.findOne({ email });
    
    if (existingUser) {
      console.error("User already exists")
      return res.status(400).json({ error: "User already exists"  });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await Users.create({ ...req.body, password: hashedPassword });

    res.status(201).json({ user: newUser });

  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

