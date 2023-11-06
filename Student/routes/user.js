const express = require("express");
const router = express.Router();
const {addStudent, updateStd} = require("../controller/userController");

router.post("/add", addStudent)

router.patch("/:id", updateStd)

module.exports = router;