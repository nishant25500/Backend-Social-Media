const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
}, {timestamps: true});

const Tweets = mongoose.model('Tweets',tweetSchema);
module.exports = Tweets;
