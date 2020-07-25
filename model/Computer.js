const mongoose = requie('mongoose');

const computerSchema = mongoose.Schema({
    ownerId: {
        type: String,
        required: true
    },
    capability: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    shieldPoints: {
        type: Number,
        required: true
    },
    virusPower : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Computer', computerSchema);