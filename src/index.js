import express from "express";
const app = express();
import { connect } from "./config/database.js";

import bodyParser from "body-parser";

import apiRoutes from "./routes/index.js";

const PORT = 3000;

/////////////////////////testing
import { UserRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
  let name = req.query.name || "World";
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connect();
  console.log("Database connected");

  // const user = new UserRepository();
  // const res = await user.create({
  //   email: 'nishant@gmail.com',
  //   password: '12345678',
  //   name: 'nishant',
  // });

  const likeservice = new LikeService();
  const like= await likeservice.toggleLike('65bdd85e0bc00e4d29b11c86','Tweets','65c0c7570e51acad847151aa');

});
