// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    onModel: {
      type: String,
      required: true,
      enum: ['Tweets','Comment']
    },
    commentable: {
      type: mongoose.Schema.Types.ObjectId,
      reqiured: true,
      refPath: 'onModel',
    },
    comments: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
      }
  ]
}, {timestamps: true});

const Comment = mongoose.model('Comment',commentSchema);
// module.exports = Comment;
export default Comment;