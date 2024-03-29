// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const hashtagSchema  = new mongoose.Schema({
   title: {
     type: String,
     required: true,
     unique: true
   },
   tweets: [
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweets',
     }
   ]
},{timestamps: true});

const Hashtag = mongoose.model('Hashtag',hashtagSchema);
// module.exports = Hashtag;
export default Hashtag;