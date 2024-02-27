import { LikeRepository, TweetRepository, CommentRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
    this.commentRepository = new CommentRepository();
  }
  async toggleLike(modelId, modelType, userId) {
    // /api/v1/likes/toggle?id=model&type=Tweets
    if (modelType == "Tweets") {
      var likeable = await this.tweetRepository.find(modelId);  //to get the tweet
      // console.log(likeable);  
    } else if (modelType == "Comment") {
      //TODO
      var likeable = await this.commentRepository.get(modelId);
    } else {
      throw new Error("unknown model type");
    }

    const isExists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      likeable: modelId,
      onModel: modelType,
    });

    if (isExists) {
      likeable.likes.pull(isExists.id);
      await likeable.save();
      await isExists.deleteOne();
      var isRemoved = true;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        likeable: modelId,
        onModel: modelType,
      });

      likeable.likes.push(newLike);
      await likeable.save();
      var isRemoved = false;
    }
    return isRemoved;
  }
}

export default LikeService;
