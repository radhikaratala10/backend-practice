const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hello from radhika</h1>");
});
app.get("/indexPages", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "data.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});