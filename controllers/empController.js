const Emp=require("../models/empSchema");

// CREATE
exports.createEmp=async(req,res)=>{
 try{

  const emps = await Emp.create(req.body)

  res.status(201).json({
   message:"Employee created",
   data:emps
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
}

// READ ALL
exports.readEmp=async(req,res)=>{
 try{

  const emps = await Emp.find()

  res.json({
   message:"All employees",
   data:emps
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
}

// READ SINGLE
exports.readSingleEmp=async(req,res)=>{
 try{

  const emps = await Emp.findById(req.params.id)

  res.json({
   message:"Single employee",
   data:emps
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
}

// UPDATE
exports.updateEmp=async(req,res)=>{
try{
const emps = await Emp.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
);

res.json({
    message:"updated done",
    data:emps
})

}catch(err){
res.status(500).json({error:err.message})
}
}

// DELETE

exports.deleteEmp=async(req,res)=>{
try{
const emps = await Emp.findByIdAndDelete(req.params.id);
res.json({
    message:"deleted done",
    data:emps
})
}catch(err){
res.status(500).json({error:err.message})
}
}
