const mongoose = require('mongoose');

const penSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    skill: {
        type: String,
    }
})

const Pen = mongoose.model('Pen', penSchema);

module.exports = Pen;