const { default: mongoose } = require('mongoose');
const moongose = require('mongoose')
const user = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    followers:[{
        type:moongose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    followings:[{
        type:moongose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createAt:[{
        type:Date,
        default:Date.now
    }]
});
module.Exports=mongoose.model('user',user)