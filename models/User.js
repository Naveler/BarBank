const mongoose = require('mongoose')

// Describe users collection
module.exports = mongoose.model('User', new mongoose.Schema({
    name: {type:String,required:true,minlength:2,maxlength:50},
    username: {type:String,required:true,minlength:2,maxlength:50, unique:true, dropDups:true},
    password: {type:String,required:true,minlength:2,maxlength:100}
}));