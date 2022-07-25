const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const taskSchema = new Schema({
  task: {type: String,required: false,unique: false,trim: false,minlength: 1},
  ts1: {type: String,required: false,unique: false,trim: false,minlength: 1},
  ts2: {type: String,required: false,unique: false,trim: false,minlength: 1},
  tds1: {type: String,required: false,unique: false,trim: false,minlength: 1},
  tds2: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
}, {
  timestamps: true,
});

const Task = mongoose.model("Task",taskSchema)

module.exports = Task;

