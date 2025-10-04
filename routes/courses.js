const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

router.post("/", coursesController.createCourse);

router.get("/", coursesController.listCourses);

module.exports = router;
