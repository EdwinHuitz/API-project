const mongoose = require('mongoose')
const schema = mongoose.Schema

const dogSchema = new schema({
  name: {type: String, required: true},
  breed: String,
  gender: String,
  age: Number
}, {
  timestamps: true
})

module.exports = mongoose.model('Dog', dogSchema)