const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a task title"],
  },
  description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },

    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },

  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create location field
CampaignSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };
  // Do not save address in DB
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Campaign", CampaignSchema);
