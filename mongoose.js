var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@cluster0.nse6i.mongodb.net/Cluster0?retryWrites=true&w=majority');
console.log("mongodb  connect...")
module.exports = mongoose;