const router = require('express').Router();
let Resp = require('../models/resp.model');

router.route('/').post((req, res) => {
  Resp.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const accountname = req.body.accountname;
  Resp.findOneAndRemove({"accountname":accountname})
  
    .then(() => res.json('resp msg Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const accountname = req.body.accountname;
  Resp.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const accountname = req.body.accountname;
  const resp = req.body.resp;
  const id = req.body.id;

  const newReport = new Resp({accountname,resp,id});

  newReport.save()
    .then(() => res.json('Resp created!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Resp.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Resp.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Resp.findById(req.params.id)
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