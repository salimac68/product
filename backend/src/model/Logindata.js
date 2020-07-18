const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    
    username : String,
    password : String
    
});

var userdata = mongoose.model('userdata', userSchema);

module.exports = userdata;