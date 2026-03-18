// server.js

const express = require("express");
const mongoose = require("mongoose");
const User = require("./userSchema");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.post("/add-user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
});


app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});