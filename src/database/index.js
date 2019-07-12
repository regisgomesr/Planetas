const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/planetrest', { useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose;




