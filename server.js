const express = require('express');
const connectDB = require("./config/db");
require("dotenv").config();
const empsRoutes = require("./routes/empsRoutes");
const { createEmp ,readEmp,readSingleEmp,updateEmp,deleteEmp} = require('./controllers/empController');
const emp =require("./models/empSchema");

const app = express()

app.use(express.json())

// MongoDB connection
connectDB();

app.use("/api",empsRoutes);


// Home
app.get("/",(req,res)=>{
 res.send("User CRUD API")
})

app.get("/api",readEmp);

app.post("/api/emps",createEmp);

app.get("/api/emps/:id",readSingleEmp);

app.put("/api/emps/:id",updateEmp);

app.delete("/api/emps/:id",deleteEmp);


app.listen(process.env.PORT,()=>{
 console.log("Server running on port " + process.env.PORT)
})