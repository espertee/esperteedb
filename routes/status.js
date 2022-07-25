const router = require('express').Router();
const Status = require('../models/status.model');

router.route('/').get((req, res) => {
    Status.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const e_mail = req.body.e_mail;
  Status.find({e_mail:e_mail})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Email = req.body.Email
  const ratieID = req.body.love
  const Rating = req.body.love
  const totalRating = req.body.love
  const productID = req.body.productID

  const newLove = new Status({
    Email,ratieID,Rating,totalRating,productID});

  newLove.save()
    .then(() => res.json('STATUS RED!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Status.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Status.findOneAndRemove({"id":id})
    .then(() => res.json('Like Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Status.findById(req.params.id)
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