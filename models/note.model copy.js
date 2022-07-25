const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const noteSchema = new Schema({
  note: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
}, {
  timestamps: true,
});

const Note = mongoose.model("Note",noteSchema)

module.exports = Note;


