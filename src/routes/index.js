var express = require('express');
var router = express.Router();


let routerUser = require("./user.js")
let routerNote = require("./note.js")

router.use("/user", routerUser);
router.use("/note", routerNote);


module.exports = router;
