var express = require('express');
var router = express.Router();

let createUser = require("../controllers/User/createUser")
let userLogin = require("../controllers/User/userLogin")
let deleteUser = require("../controllers/User/deleteUser")

router.post("/create", createUser);
router.post("/login",userLogin)
router.delete("/delete", deleteUser)


module.exports = router;