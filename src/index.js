const express = require("express");
const connect = require("./config/database");
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
  // const repo = new TweetService();
  // const tweet = await repo.create({
  //   content: "i am #exited to have #new #lovelife",
  // });

  // console.log(tweet);
});
