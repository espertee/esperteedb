const router = require('express').Router();
const Note = require('../models/note.model');

router.route('/').post((req, res) => {
    Note.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const note = req.body.note;
  Note.find({note:note})
  .then(note => res.json(note))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const note = req.body.note
  const id = req.body.id

  const savetask = new Note({
    note,id});

    savetask.save()
    .then(() => res.json('note saved sucessfuly!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const id = req.body.id
  Note.findOne({"id":id})
    .then(amount => {
      amount.note = req.body.note;
      amount.id = req.body.id;

      amount.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const note = req.body.note;
  Note.findOneAndRemove({"coupon":note})
  
    .then(() => res.json('Note Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Note.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;