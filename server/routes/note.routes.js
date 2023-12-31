const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

router.post('/', async (req, res) => {
  const text = req.body.text;
  const note = new Note({ text });
  await note.save();

  res.status(201).json({ note });
});

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
