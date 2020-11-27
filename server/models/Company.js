const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },

  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
    trim: true,
    maxlength: [600, "Name can not be more than 50 characters"],
  },

  portfolio: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL",
    ],
  },

  email: {
    type: String,
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please add a valid email",
    ],
  },

  street: {
    type: String,
    required: [true, "Please add an address"],
  },
  zipcode: {
    type: String,
    required: [true, "Please add a valid zipcode"],
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },

    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },

  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating can not be more than 5"],
  },

  price: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },

  member_since: {
    type: Date,
    default: Date.now,
  },
});

CompanySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Create location field
CompanySchema.pre("save", async function (next) {
  const loc = await geocoder.geocode({
    country: "NO",
    address: this.street,
    zipcode: this.zipcode,
  });
  console.log("====================================", loc);

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

module.exports = mongoose.model("Company", CompanySchema);
