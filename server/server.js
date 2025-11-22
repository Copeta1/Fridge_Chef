require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Users = require("./models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || "default_dev_secret";
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://fridge-chef-sable.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB povezan!"))
  .catch((err) => console.error("Greška pri spajanju na DB:", err));

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email: email });

    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Incorrect password");
      return res.status(401).json({ error: "Password was incorrect" });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

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
      console.error("User already exists");
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await Users.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({ user: newUser });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server je pokrenut na portu ${PORT}`);
});
