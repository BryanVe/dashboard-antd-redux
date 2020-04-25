const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/fakeapp', {
  useUnifiedTopology: true,
  useNewUrlParser: true

}).then(db => console.log('connected to database!'))