const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: [true, "Please add a brand name"],
  },
  
  campaignObjective: {
    type: String,
    required: true,
  },

  desiredResult: {
    type: String,
    required: true,
  },

  campaignTitle: {
    type: String,
    required: true
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

  ExpiresAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Campaign", CampaignSchema);
