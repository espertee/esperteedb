const router = require('express').Router();
const Coupon = require('../models/coupon.model');

router.route('/').post((req, res) => {
    Coupon.find()
    .then(coupon => res.json(coupon))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const coupon = req.body.coupon;
  Coupon.find({coupon:coupon})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const coupon = req.body.coupon
  const value = req.body.value
  const rate = req.body.rate
  const bonus = req.body.bonus
  const email = req.body.email

  const newCoupon = new Coupon({
    coupon,value,email,bonus,rate});

  newCoupon.save()
    .then(() => res.json('coupon gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Coupon.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const coupon = req.body.coupon;
  Coupon.findOneAndRemove({"coupon":coupon})
  
    .then(() => res.json('coupon Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Coupon.findById(req.params.id)
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