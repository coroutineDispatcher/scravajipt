const mongoose = require("mongoose");

const attachSchema = mongoose.Schema({
  hackerId: {
    type: String,
    required: true,
  },
  victimsId: {
    type: String,
    required: true,
  },
  devicesAffected: {
    type: [String],
    required: true,
  },
  leagueId: {
    type: String,
    required: true,
  },
  timeHappened: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("AttackSchema", attachSchema);
