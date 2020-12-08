const Creator = require("../models/Creator");
const ErrorResponse = require("../utils/errorResponse");
const geocoder = require("../utils/geocoder");
const path = require("path");


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

    creator.remove();

    res.status(200).json({ success: true, data: creator });
  } catch (err) {
    next(err);
  }
};





// @desc    Upload profile photo
// @route   PUT /api/v1/creators/:id/profile-photo
// @access  Private

exports.profilePhotoUpload = async (req, res, next) => {
  try {
    const creator = await Creator.findById(req.params.id);

    if (!creator) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    if(!req.files) {

      return next(
        new ErrorResponse(`Please upload a file`, 400)
      );
    }

    const file = req.files.file; 

    if(!file.mimetype.startsWith("image")) {

      return next(
        new ErrorResponse(`Please upload an image file`, 400)
      );
    }

    if(file.size > process.env.MAX_FILE_UPLOAD) {
      return next(
        new ErrorResponse(`Please upload an image less than ${MAX_FILE_UPLOAD} bytes`, 400)
      );
    }

    // Create unique file identifier 

    let extension = path.parse(file.name).ext; 
    file.name = `profile_${creator._id}${extension}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {

      if(err) {
        console.error(err);

        return next(
          new ErrorResponse(`Problem with file upload`, 500)
        );

      }

      await Creator.findByIdAndUpdate(req.params.id, { profilePhoto: file.name})

      res.status(200).json({ success: true, data: file.name});
    });


  } catch (err) {
    next(err);
  }
};