const router = require('express').Router();
const { saveNote } = require('../../lib/notes');
let notes = require('../../db/db.json');
const { route } = require('../htmlRoutes');

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
    notes= delteNotes(req.params.id);
    res.json(notes);
});

module.exports = router;