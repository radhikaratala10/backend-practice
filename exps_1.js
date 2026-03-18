const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hello from radhika</h1>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});