const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  getCreator,
  getCreators,
  updateCreator,
  deleteCreator,
  createCreator,
  getCreatorsInRadius,
} = require("../controllers/creators");

router.route("radius/:zipcode/:distance").get(getCreatorsInRadius);

router.route("/").get(getCreator).post(protect, createCreator);

router
  .route("/:id")
  .get(getCreators)
  .put(protect, updateCreator)
  .delete(protect, deleteCreator);

module.exports = router;
