const Tweets = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweets.create(data);
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweets.findById(id);
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }
  
  async getAllTweet() {
    try {
      const tweet = await Tweets.find();
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }
  
  async getWithComments(id) {
    try {
      const tweet = await Tweets.findById(id).populate({path: 'comments'});
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }

  async update(tweetId, data) {
    try {
      const tweet = await Tweets.findByIdAndUpdate(tweetId, data, {
        new: true,
      });
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }

  async destroy(id) {
    try {
      const tweet = await Tweets.findByIdAndRemove(id);
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }

  async getAll(offset,limit){
    try{
      const tweet = await Tweets.find().skip(offset).limit(limit);
      return tweet;
    }catch(err){
      console.log(err);
    }
  }
}

module.exports = TweetRepository;
