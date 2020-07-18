const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;

var useSchema = new Schema({
    
    username : String,
    // address:String,
    // dob:Date,
    // email:String,
    // phone_number:Number,
    password : String,   
    // cp:String
    
    
    
});

var usedata = mongoose.model('usedata', useSchema);

module.exports = usedata;