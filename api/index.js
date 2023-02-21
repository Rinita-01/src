const express = require("express");
const notescontroller = require('./controller/notes.controller')

const router = express.Router();

router.get('/note' , notescontroller.default.getAllnotes) 
router.post('/note' , notescontroller.default.saveNote)

module.exports = router;