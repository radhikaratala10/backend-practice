const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")
.then(() => {
  console.log("Local MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("MongoDB Connection Error:", err);
});