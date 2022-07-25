const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const weedSchema = new Schema({
  accountname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  amount: {type: String,required: false,unique: false,trim: false,minlength: 1},
  bankname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  bankan: {type: String,required: false,unique: false,trim: false,minlength: 1},
  accountnum: {type: String,required: false,unique: false,trim: false,minlength: 1},
  usdt: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const weed = mongoose.model("weed",weedSchema)

module.exports = weed;


