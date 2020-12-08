const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const CreatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
  },

  profilePhoto: {
    type: String,
    default: 'no-photo.jpg'
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Creator", CreatorSchema);
