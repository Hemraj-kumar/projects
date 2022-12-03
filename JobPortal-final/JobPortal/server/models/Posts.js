const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    company_name : {
        type  : String,
        required : true
    },
    date : {
        type : Date,
        required  : true
    },
    content : {
        type : String,
        required : true
    },
    desc : { 
        type : String,
        required : true
    },
    features : {
        type : String,
        required : true
    },
    applications_count : {
        type : Number,
        required : true
    }
})


module.exports = mongoose.model('Post' , Post , 'posts') 
