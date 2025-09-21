const mongoose = require('mongoose');

const monasterySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    locationName: { // New field for display
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    images: {
      type: [String],
      required: true,
    },
    virtualTourUrl: {
      type: String,
    },
    duration: { // New field
      type: String,
    },
    views: { // New field
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'approved'],
      default: 'pending',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Monastery = mongoose.model('Monastery', monasterySchema);

module.exports = Monastery;