const express = require('express');
const Event = require('../models/event');
const moment = require('moment'); // Import moment.js
<<<<<<< HEAD
const router = express.Router();

// GET /events - Search for Events
router.get('/', async (req, res) => {
=======
const verifyToken = require('../middleware/verifyToken'); // Import the token verification middleware
const router = express.Router();

// GET /events - Search for Events (Protected)
router.get('/', verifyToken, async (req, res) => {
>>>>>>> 2acfb9569782989a5897c0bfa4e25db1f3c6f63b
    const { city, dateRange, category } = req.query;

    const query = {};
    if (city) query.location = city;
    if (category) query.category = category;

    if (dateRange) {
        try {
            // Parse and validate date range using moment.js
            const [start, end] = dateRange.split(',');
            const startDate = moment(start, 'YYYY-MM-DD', true); // Strict parsing
            const endDate = moment(end, 'YYYY-MM-DD', true);

            if (!startDate.isValid() || !endDate.isValid()) {
                return res.status(400).json({ error: 'Invalid date range format. Use YYYY-MM-DD,YYYY-MM-DD.' });
            }

            query.date = { $gte: startDate.toDate(), $lte: endDate.toDate() };
        } catch (err) {
            return res.status(400).json({ error: 'Error parsing date range.' });
        }
    }

    try {
        const events = await Event.find(query);

        // Format event dates using moment.js
        const formattedEvents = events.map(event => ({
            ...event._doc,
            date: moment(event.date).format('MMMM Do YYYY, h:mm:ss a'), // Example: December 31st 2024, 3:00:00 pm
        }));

        res.json(formattedEvents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

<<<<<<< HEAD
// POST /events - Add New Event
router.post('/', async (req, res) => {
=======
// POST /events - Add New Event (Protected)
router.post('/', verifyToken, async (req, res) => {
>>>>>>> 2acfb9569782989a5897c0bfa4e25db1f3c6f63b
    try {
        // Parse and validate the date field using moment.js
        const { date } = req.body;
        if (!moment(date, moment.ISO_8601, true).isValid()) {
            return res.status(400).json({ error: 'Invalid date format. Use ISO 8601 format.' });
        }

        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

<<<<<<< HEAD
// PUT /events/:eventID - Update Event by ID
router.put('/:eventID', async (req, res) => {
=======
// PUT /events/:eventID - Update Event by ID (Protected)
router.put('/:eventID', verifyToken, async (req, res) => {
>>>>>>> 2acfb9569782989a5897c0bfa4e25db1f3c6f63b
    try {
        // Validate the date field if provided
        if (req.body.date && !moment(req.body.date, moment.ISO_8601, true).isValid()) {
            return res.status(400).json({ error: 'Invalid date format. Use ISO 8601 format.' });
        }

        const updatedEvent = await Event.findOneAndUpdate(
            { eventID: req.params.eventID },
            req.body,
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found.' });
        }

        res.json(updatedEvent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

<<<<<<< HEAD
// DELETE /events/:eventID - Delete Event by ID
router.delete('/:eventID', async (req, res) => {
=======
// DELETE /events/:eventID - Delete Event by ID (Protected)
router.delete('/:eventID', verifyToken, async (req, res) => {
>>>>>>> 2acfb9569782989a5897c0bfa4e25db1f3c6f63b
    try {
        const deletedEvent = await Event.findOneAndDelete({ eventID: req.params.eventID });

        if (!deletedEvent) {
            return res.status(404).json({ error: 'Event not found.' });
        }

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
