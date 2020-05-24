const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('message', messageSchema);