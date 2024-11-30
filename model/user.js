const { default: mongoose } = require('mongoose');
const moongose = require('mongoose')
const user = new moongose.Schema({
    name: {
        type: String,
        required: true,
      
    },
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    bio:{
        type:String,
        default:""
    },
    createAt:[{
        type:Date,
        default:Date.now
    }]
});
module.exports = mongoose.model('user', user)
