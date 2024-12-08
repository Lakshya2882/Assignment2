const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventID: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);