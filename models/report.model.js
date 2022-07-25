const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  accountname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  report: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
}, {
  timestamps: false,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;