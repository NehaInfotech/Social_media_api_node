const mongoose = require('mongoose')
// const { default: mongoose } = require('mongoose');


const postSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    likes: [{
        type: Boolean,
        default: false
    }],
    comments: [{
        type: Boolean,
        default: false
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Post', postSchema);