const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  userIdsIn: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("League", leagueSchema);
