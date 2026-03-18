// userSchema.js

const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  role: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  dept:{
    type: String
  },
  
  salary: {
    type: Number
  },
  doj: {
    type: Date,
    default: Date.now
  }
});

const emp = mongoose.model("Employee", empSchema);

module.exports = emp;