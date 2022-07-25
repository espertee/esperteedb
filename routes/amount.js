const router = require('express').Router();
let Amount = require('../models/amount.model');

router.route('/').post((req, res) => {
    Amount.find()
    .then(accountname => res.json(accountname))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const accountname = req.body.accountname;
  Amount.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/find_p').post((req, res) => {
  const accountname = req.body.accountname;
  Amount.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const accountname = req.body.accountname
  const balance = req.body.balance
  const withdrawal = req.body.withdrawal
  const deposit = req.body.deposit
  const rate = req.body.rate
  const pending = req.body.pending
  const refferal = req.body.refferal
  const totalweed = req.body.totalweed
  const totalDeposit = req.body.totalDeposit
  const clicks = req.body.clicks
  const task = req.body.task
  const ts1 = req.body.ts1
  const ts2 = req.body.ts2
  const id = req.body.id

  const newLove = new Amount({
    accountname,balance,withdrawal,deposit,rate,pending,refferal,totalweed,totalDeposit,clicks,task,ts1,ts2,id});

  newLove.save()
    .then(() => res.json('money updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const accountname = req.body.accountname
  Amount.findOne({"accountname":accountname})
    .then(amount => {
      amount.accountname = req.body.accountname;
      amount.balance = req.body.balance;
      amount.withdrawal = req.body.withdrawal;
      amount.deposit = req.body.deposit;
      amount.rate = req.body.rate;
      amount.pending = req.body.pending;
      amount.refferal = req.body.refferal;
      amount.totalweed = req.body.totalweed;
      amount.totalDeposit = req.body.totalDeposit;
      amount.clicks = req.body.clicks;
      amount.task = req.body.task;
      amount.ts1 = req.body.ts1;
      amount.ts2 = req.body.ts2;
      amount.id = req.body.id;

      
      amount.save()
        .then(() => res.json('cash updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Amount.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Amount.findOneAndRemove({"id":id})
    .then(() => res.json('money Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
  Amount.findById(req.params.id)
    .then(amount => {
      amount.username = req.body.username;
      amount.description = req.body.description;
      amount.duration = Number(req.body.duration);
      amount.date = Date.parse(req.body.date);

      amount.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;