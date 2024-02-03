// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250,'Max 250 characters are allowed']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
}, {timestamps: true});

// virtuals are computed at runtime, these are not stored in db. 
// tweetSchema.virtual('contentWithEmail').get(function process(){  
//     return `${this.content} \nSaid by: ${this.email}`;
// })

const Tweets = mongoose.model('Tweets',tweetSchema);
// module.exports = Tweets;
export default Tweets;
