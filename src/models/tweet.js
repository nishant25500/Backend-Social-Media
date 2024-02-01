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

//virtuals are computed at runtime, these are not stored in db. 
tweetSchema.virtual('contentWithEmail').get(function process(){  
    return `${this.content} \nSaid by: ${this.email}`;
})

const Tweets = mongoose.model('Tweets',tweetSchema);
module.exports = Tweets;
