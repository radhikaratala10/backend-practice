const express = require('express');
const router = express.Router();
const {createEmp, readEmp, readSingleEmp, updateEmp, deleteEmp} = require("../controllers/empController");

// CREATE
router.post("/emps", createEmp);

// READ ALL
router.get("/emps", readEmp);

// READ SINGLE
router.get("/emps/:id", readSingleEmp);

// UPDATE
router.put("/emps/:id", updateEmp);

// DELETE
router.delete("/emps/:id", deleteEmp);

module.exports = router;