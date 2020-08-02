const path = require('path');
const fs = require('fs');
const notes = require('../db/db.json');

const saveNote = note => {
    const newNote = 
    {
        title: note.title,
        text: note.text,
        id: notes.length
    }
    notes.push(newNote);
    console.log(notes);
}
module.exports = { saveNote };