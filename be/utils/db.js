const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newdb',{useNewUrlParser:true});

module.exports = mongoose;