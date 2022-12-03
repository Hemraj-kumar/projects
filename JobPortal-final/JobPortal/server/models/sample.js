const mongoose = require('mongoose');

const Sample = new mongoose.Schema({
    value : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Sample' , Sample) 
