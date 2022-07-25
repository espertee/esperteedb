const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const refSchema = new Schema({
  accountname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  ref: {type: String,required: false,unique: false,trim: false,minlength: 1},
  refname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
}, {
  timestamps: true,
});

const Ref = mongoose.model("Ref",refSchema)

module.exports = Ref;
