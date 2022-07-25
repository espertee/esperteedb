const router = require('express').Router();
const Ref = require('../models/ref.model');

router.route('/').post((req, res) => {
    Ref.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const accountname = req.body.accountname;
  Ref.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const accountname = req.body.accountname
  const ref = req.body.ref
  const refname = req.body.refname
  const id = req.body.id

  const newRef = new Ref({
    accountname,ref,refname,id});

  newRef.save()
    .then(() => res.json('Ref sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Ref.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const accountname = req.body.accountname;
  Ref.deleteMany({"accountname":accountname})
  
    .then(() => res.json('Ref Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Ref.findById(req.params.id)
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