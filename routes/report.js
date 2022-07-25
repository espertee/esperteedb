const router = require('express').Router();
let Report = require('../models/report.model');

router.route('/').post((req, res) => {
  Report.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.body.id;
  Report.findOneAndRemove({"id":id})
  
    .then(() => res.json('msg Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const accountname = req.body.accountname;
  Report.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const accountname = req.body.accountname;
  const report = req.body.report;
  const id = req.body.id;

  const newReport = new Report({accountname,report,id});

  newReport.save()
    .then(() => res.json('Report created!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Report.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Report.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Report.findById(req.params.id)
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