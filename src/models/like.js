import mongoose from 'mongoose';

const likeSchema = mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['Tweets','Comment'] 
    },
    likeable: {
        type: String,
        required: true,
        refPath: 'onModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

const Like = mongoose.model('Like',likeSchema);
export default Like;