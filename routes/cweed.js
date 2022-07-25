const router = require('express').Router();
let Cweed = require('../models/cweed.model');

router.route('/').post((req, res) => {
  Cweed.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/del').post((req, res) => {
  const id = req.body.id;
  Cweed.findOneAndRemove({"id":id})
  
    .then(() => res.json('cweed Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const accountname = req.body.accountname;
  Cweed.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const accountname = req.body.accountname;
  const amount = req.body.amount;
  const bankname = req.body.bankname;
  const bankan = req.body.bankan;
  const accountnum = req.body.accountnum;
  const usdt = req.body.usdt;
  const id = req.body.id;

  const newWeed = new Cweed({
    accountname,amount,bankname,bankan,accountnum,usdt,id});

    newWeed.save()
    .then(() => res.json('Cweed created!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Cweed.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Cweed.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Cweed.findById(req.params.id)
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