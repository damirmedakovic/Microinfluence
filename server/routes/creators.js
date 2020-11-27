const express = require("express");
const router = express.Router();
const {
  getCreator,
  getCreators,
  updateCreator,
  deleteCreator,
  createCreator,
  getCreatorsInRadius,
} = require("../controllers/creators");

router.route("radius/:zipcode/:distance").get(getCreatorsInRadius);

router.route("/").get(getCreator).post(createCreator);

router
  .route("/:id")
  .get(getCreators)
  .put(updateCreator)
  .delete(deleteCreator);

module.exports = router;
