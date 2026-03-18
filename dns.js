const dns = require('dns')

 dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require('express')
const mongoose = require('mongoose')

//const Student = require('./models/studentModel')



const app = express()

mongoose.connect("mongodb+srv://radhikaratala10_db_user:301224@cluster0.hutf9yw.mongodb.net/?appName=Cluster0")
.then(()=>{
 console.log("MongoDB connected")
})
.catch(err=>{
 console.log(err)
})

//
app.use(express.json())


//home 
app.get('/',(req,res)=>{
 res.send("hi guys....")
})







app.listen(4000,()=>{
 console.log("server running...")
})