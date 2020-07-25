const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6 // Todo check this
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6 // Todo check this
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6 // Todo check this
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    leagueIdIn: {
        type: String,
        required: true,
    },
    cryptoCoins: {
        type: String,
        required: true
    },
    currentLeaguePoints:{
        type: Number,
        required: true
    },
    avatarUrl: {
        type: String,
        required: true
    },
    deviceListInPosession: {
        type: [Number],
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);