// File: routes/preferences.js
const express = require('express');
const UserPreference = require('../models/userPreference');
const router = express.Router();

// POST /preferences
router.post('/', async (req, res) => {
    try {
        const preference = new UserPreference(req.body);
        await preference.save();
        res.status(201).json(preference);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /preferences/:userID
router.get('/:userID', async (req, res) => {
    try {
        const preference = await UserPreference.findOne({ userID: req.params.userID });
        res.json(preference);
    } catch (err) {
        res.status(404).json({ error: 'Preferences not found' });
    }
});

// PUT /preferences/:userID
router.put('/:userID', async (req, res) => {
    try {
        const updatedPreference = await UserPreference.findOneAndUpdate(
            { userID: req.params.userID },
            req.body,
            { new: true }
        );
        res.json(updatedPreference);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE /preferences/:userID
router.delete('/:userID', async (req, res) => {
    try {
        await UserPreference.findOneAndDelete({ userID: req.params.userID });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
