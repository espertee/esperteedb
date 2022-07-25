const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const couponSchema = new Schema({
  coupon: {type: String,required: false,unique: false,trim: false,minlength: 1},
  value: {type: String,required: false,unique: false,trim: false,minlength: 1},
  rate: {type: String,required: false,unique: false,trim: false,minlength: 1},
  bonus: {type: String,required: false,unique: false,trim: false,minlength: 1},
  email: {type: String,required: false,unique: false,trim: false,minlength: 1},
}, {
  timestamps: true,
});

const Coupon = mongoose.model("Coupon",couponSchema)

module.exports = Coupon;


