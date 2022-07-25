const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resSchema = new Schema({
  accountname: {type: String,required: false,unique: false,trim: false,minlength: 1},
  resp: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
}, {
  timestamps: false,
});

const Resp = mongoose.model('Resp', resSchema);

module.exports = Resp;