const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const League = require("./model/League");

dotenv.config();

// IMPORT ROUTES
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const { func } = require("@hapi/joi");

// Connect to Database
mongoose.connect("mongodb://localhost/scravajipt", () => console.log("DB"));

// ROUTE MIDDLEWARES
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(3300, () => {
  console.log("Server up and running");
  // Todo create leagues
  // in debug mode only
  League.find({}, (err, data) => {
    data.forEach((league) => console.log(league));
  });
});

async function saveFirstLeague() {
  const league = new League({
    name: "My first league",
    rank: 3,
    userIdsIn: [],
  });
  try {
    await league.save();
  } catch (err) {
    console.log("Something went wrong");
  }
}
