const express = require("express");
const path = require("path");

const app = express();

app.get("/indexpages", (req, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});