var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/dogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('connected', function(){
  console.log('connected')
})

module.exports=mongoose;