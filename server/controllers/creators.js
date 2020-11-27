const Creator = require("../models/Creator");
const ErrorResponse = require("../utils/errorResponse");
const geocoder = require("../utils/geocoder");


// @desc    Get all creators
// @route   GET /api/v1/creators
// @access  Public
exports.getCreators = async (req, res, next) => {
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

    query = Creator.find(JSON.parse(queryStr));

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
    const total = await Creator.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const creators = await query;

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
      count: creators.length,
      pagination: pagination,
      data: creators,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get a creator
// @route   GET /api/v1/creators/:id
// @access  Public
exports.getCreator = async (req, res, next) => {
  try {
    const creator = await Creator.findById(req.params.id);

    if (!creator) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: creator });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a creator
// @route   POST /api/v1/creators
// @access  Private
exports.createCreator = async (req, res, next) => {
  try {
    const creator = await Creator.create(req.body);
    res.status(201).json({ success: true, data: creator });
  } catch (err) {
    next(err);
  }
};

// @desc    Update a creator
// @route   PUT /api/v1/creators/:id
// @access  Private
exports.updateCreator = async (req, res, next) => {
  try {
    const creator = await Creator.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!creator) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: creator });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a creator
// @route   DELETE /api/v1/creators/:id
// @access  Private
exports.deleteCreator = async (req, res, next) => {
  try {
    const creator = await Creator.findByIdAndDelete(req.params.id);

    if (!creator) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: creator });
  } catch (err) {
    next(err);
  }
};

// @desc    Get creators in radius
// @route   GET /api/v1/creators/radius/:zipcode/:distance
// @access  Private
exports.getCreatorsInRadius = async (req, res, next) => {
  try {
    const { zipcode, distance } = req.params;

    // Get lan/lat
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    const radius = distance / 6378;

    const creators = await Creator.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    });

    res.status(200).json({
      success: true,
      count: creators.length,
      data: creators,
    });
  } catch (err) {
    next(err);
  }
};
