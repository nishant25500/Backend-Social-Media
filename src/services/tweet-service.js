const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
    tags = tags.map((tag) => tag.substring(1).toLowerCase());
    // console.log("tags: ",tags);
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    // console.log("Already present: ",alreadyPresentTags);
    let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
    // console.log("Already present: ",titleOfPresentTags);
    let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
    // console.log(newTags);
    newTags = newTags.map((tag) => {
      return {
        title: tag,
        tweets: [tweet.id],
      };
    });
    const response = this.hashtagRepository.bulkCreate(newTags);
    // console.log("Response: ",response);
    alreadyPresentTags.forEach((tag)=>{
       tag.tweets.push(tweet.id);
       tag.save();
    })
    return tweet;
  }
}

module.exports = TweetService;
