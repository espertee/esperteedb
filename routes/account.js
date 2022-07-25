const router = require('express').Router();
const Account = require('../models/account.model');

router.route('/').post((req, res) => {
  Account.find()
  .then(accountname => res.json(accountname))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const accountname = req.body.accountname;
  Account.find({accountname:accountname})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/id').post((req, res) => {
  const id = req.body.id;
  Account.find({id:id})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const accountname = req.body.accountname
  const email = req.body.email
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const password = req.body.password
  const refferal = req.body.refferal
  const accountnum = req.body.accountnum
  const bankan = req.body.bankan
  const bankname = req.body.bankname
  const phone = req.body.phone
  const usdt = req.body.usdt
  const id = req.body.id

  const newCoupon = new Account({
    accountname,email,firstname,lastname,password,refferal,accountnum,
    bankan,bankname,phone,usdt,id});

  newCoupon.save()
    .then(() => res.json('account creaated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/up').post((req, res) => {
  const id = req.body.id
  Account.findOne({id:id})
    .then(account => {
      account.accountname = req.body.accountname;
      account.email = req.body.email;
      account.firstname = req.body.firstname;
      account.lastname = req.body.lastname;
      account.password = req.body.password;
      account.refferal = req.body.refferal;
      account.accountnum = req.body.accountnum;
      account.bankan = req.body.bankan;
      account.bankname = req.body.bankname;
      account.phone = req.body.phone;
      account.usdt = req.body.usdt;
      account.id = req.body.id;

      
      account.save()
        .then(() => res.json('account updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Account.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Account.findOneAndRemove({"id":id})
    .then(() => res.json('accont Removed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Account.findById(req.params.id)
    .then(exercise => {
      exercise.accontname = req.body.accontname;
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