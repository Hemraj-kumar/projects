const mongoose = require('mongoose');

const Application = new mongoose.Schema({
    post_id :{
        type : String,
        required : true
    },
    name :{
        type:String,
        required:true
    },
    qualification : {
        type:String,
    },
    phno :{
        type:Number,
        required:true
    },
    dob :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    university :{
        type:String,
        required:true
    },
    skills :{
        type:String,
        required:true
    },
    experience :{
        type:String,
        required:true
    },
    achievements:{
        type:String,
    },
    mail :{
        type:String,
        required:true
    },
    linkedin :{
        type:String,
        required:false
    }

})

module.exports =  mongoose.model('Application' , Application , 'applications')