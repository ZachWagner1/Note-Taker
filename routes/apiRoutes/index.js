const router = require('express').Router();
const { saveNote } = require('../../lib/notes');
const notes = require('../../db/db.json');

// API routes
router.get('/notes', (req, res) => {
    res.json(notes);

});
router.post('/notes', (req, res) => {
    // save note
    const newNote = req.body;
    saveNote(newNote);
});

module.exports = router;