const express = require("express");
const connect = require("./config/database");
const Tweets = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  let name = req.query.name || "World";
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connect();
  console.log("Database connected");

//   const tweets = new TweetRepository();
//   const tweet = await tweets.getWithComments('65bb7f4ba2abe0dde81ddc5c');
//   const new_comment = await Comment.create({
//     content: "comment form new schema",
//   });

//   console.log(tweet);
//   tweet.comments.push(new_comment);

//   await tweet.save();
//   console.log(tweet);
});
