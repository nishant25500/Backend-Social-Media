// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    useremail: {
      type: String
    }
}, {timestamps: true});

const Comment = mongoose.model('Comment',commentSchema);
// module.exports = Comment;
export default Comment;