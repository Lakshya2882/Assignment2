// File: models/userPreference.js

const mongoose = require('mongoose'); // Import mongoose

const userPreferenceSchema = new mongoose.Schema({
    userID: { type: String, unique: true, required: true },
    preferredEventType: { type: String },
    preferredLocation: { type: String }
});

module.exports = mongoose.model('UserPreference', userPreferenceSchema);
