const mongoose = require('mongoose');

const connectDB = async () => {
 try {
  await mongoose.connect(process.env.MONGO_ATLS)
    console.log("MongoDB connected")
  
 } catch (err) {
  console.error("Error connecting to MongoDB:", err);
 }
};
console.log("Mongo URI:", process.env.MONGOATLS_URL);

module.exports = connectDB;