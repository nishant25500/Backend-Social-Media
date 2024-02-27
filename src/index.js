import express from "express";
const app = express();
import { connect } from "./config/database.js";

import bodyParser from "body-parser";
import passport from "passport";
import {passportAuth} from './config/jwt-middleware.js'

import apiRoutes from "./routes/index.js";

const PORT = 3000;

/////////////////////////testing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
  let name = req.query.name || "World";
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connect();
  console.log("Database connected");
});
