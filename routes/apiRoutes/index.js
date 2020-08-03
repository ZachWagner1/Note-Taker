const router = require('express').Router();
const { saveNote, deleteNote } = require('../../lib/notes');
let notes = require('../../db/db.json');


// API route
router.get('/notes', (req, res) => {
    res.json(notes);
});
router.post('/notes', (req, res) => {
    // save note
    const newNote = req.body;
    saveNote(newNote);
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    notes = deleteNote(req.params.id);
    res.json(notes);
});

module.exports = router;