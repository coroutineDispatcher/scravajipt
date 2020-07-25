const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    itemIdsPurchased: {
        type: [String],
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    byerId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Purchase', purchaseSchema);