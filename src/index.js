const express = require("express");
const app = express();
const connect = require("./config/database");

var bodyParser = require('body-parser')
const apiRoutes = require('./routes/index');


const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api',apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
  let name = req.query.name || "World";
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connect();
  console.log("Database connected");
});
