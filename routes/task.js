const router = require('express').Router();
const Task = require('../models/task.model');

router.route('/').post((req, res) => {
    Task.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const task = req.body.id;
  Task.find({id:task})
  .then(task => res.json(task))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const task = req.body.task
  const ts1 = req.body.ts1
  const ts2 = req.body.ts2
  const tds1 = req.body.tds1
  const tds2 = req.body.tds2
  const id = req.body.id

  const savetask = new Task({
    task,ts1,ts2,tds1,tds2,id});

    savetask.save()
    .then(() => res.json('task saved sucessfuly!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const id = req.body.id
  Task.findOne({"id":id})
    .then(amount => {
      amount.task = req.body.task;
      amount.ts1 = req.body.ts1;
      amount.ts2 = req.body.ts2;
      amount.tds1 = req.body.tds1;
      amount.tds2 = req.body.tds2;
      amount.id = req.body.id;

      amount.save()
        .then(() => res.json('Task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const task = req.body.task;
  Task.findOneAndRemove({"coupon":task})
  
    .then(() => res.json('Task Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Task.findById(req.params.id)
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