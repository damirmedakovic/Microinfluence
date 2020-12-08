

const Campaign = require("../models/Campaign");
const ErrorResponse = require("../utils/errorResponse");



// @desc    Get all campaigns
// @route   GET /api/v1/campaigns
// @access  Public
exports.getCampaigns = async (req, res, next) => {
  try {
    let query;

    // Copy request query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);

    let queryStr = JSON.stringify(reqQuery);

    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    query = Campaign.find(JSON.parse(queryStr));

    // Select fields
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }

    // Sort by
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Campaign.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const campaigns = await query;

    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    res.status(200).json({
      success: true,
      count: campaigns.length,
      pagination: pagination,
      data: campaigns,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get a campaign
// @route   GET /api/v1/campaigns/:id
// @access  Public
exports.getCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: campaign });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a campaign
// @route   POST /api/v1/campaigns
// @access  Private
exports.createCampaign = async (req, res, next) => {
  try {


    // Add company that created campaign
    req.body.company = req.company.id;

    const campaign = await Campaign.create(req.body);
    res.status(201).json({ success: true, data: campaign });
  } catch (err) {
    next(err);
  }
};

// @desc    Update a campaign
// @route   PUT /api/v1/campaigns/:id
// @access  Private
exports.updateCampaign = async (req, res, next) => {
  try {
    const campaing = await Campaign.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!campaign) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: campaign });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a campaign
// @route   DELETE /api/v1/campaigns/:id
// @access  Private
exports.deleteCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);

    if (!campaign) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    campaign.remove();

    res.status(200).json({ success: true, data: campaign });
  } catch (err) {
    next(err);
  }
};



