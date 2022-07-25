const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const amountSchema = new Schema({
  accountname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  balance: {type: String,required: false,unique: false,trim: false,minlength: 1},
  withdrawal: {type: String,required: false,unique: false,trim: false,minlength: 1},
  deposit: {type: String,required: false,unique: false,trim: false,minlength: 1},
  rate: {type: String,required: false,unique: false,trim: false,minlength: 1},
  pending: {type: String,required: false,unique: false,trim: false,minlength: 1},
  refferal: {type: String,required: false,unique: false,trim: false,minlength: 1},
  totalweed: {type: String,required: false,unique: false,trim: false,minlength: 1},
  totalDeposit: {type: String,required: false,unique: false,trim: false,minlength: 1},
  clicks: {type: String,required: false,unique: false,trim: false,minlength: 1},
  ts1: {type: String,required: false,unique: false,trim: false,minlength: 0},
  ts2: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const Amount = mongoose.model("Amount",amountSchema)

module.exports = Amount;


