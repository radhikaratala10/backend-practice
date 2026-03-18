const express = require("express");
const app = express();

app.get("/indexpages", (req, res) => {
  res.sendFile("/Index.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});