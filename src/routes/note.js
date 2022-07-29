var express = require('express');
var router = express.Router();

let createNote = require("../controllers/Note/createNote")
let editNote = require("../controllers/Note/editNote")
let deleteNote = require("../controllers/Note/deleteNote")
let archiveNote = require("../controllers/Note/archiveNote")
let getNotes = require("../controllers/Note/getNotes")
let getSingleNote = require("../controllers/Note/getSingleNote")

router.post("/create", createNote)
router.put("/edit", editNote)
router.delete("/delete", deleteNote)
router.put("/archive", archiveNote)
router.get("/", getNotes)
router.get("/single/:id", getSingleNote)


module.exports = router;