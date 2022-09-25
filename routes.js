const express = require("express");
const router = express.Router();
const studentController = require("./controller");




router.post("/studentData", studentController.createStudent)
/router.get("/unitTestResult", studentController.unitTestResult)
// router.get("/functionup/collegeDetails", internController.getCollegedatail)








module.exports = router;