const locationSchema = new mongoose.Schema({
    city: { type: String, required: true },
    neighborhood: { type: String },
    zipCode: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
});

module.exports = mongoose.model('Location', locationSchema);