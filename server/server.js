const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Users = require("././models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }).then((user) => {
    console.log(user);

    if (user) {
      if (user.password === password) {
        console.log("točna šifra");
        res.json("Login was successful");
      } else {
        res.json("password was incorrect");
        console.log("Kriva šifra");
      }
    } else {
      res.json("User does not exist");
      console.log("nema te");
    }
  });
});

app.post("/users", (req, res) => {
  Users.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
