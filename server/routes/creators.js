const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  getCreator,
  getCreators,
  updateCreator,
  deleteCreator,
  createCreator,
  profilePhotoUpload
} = require("../controllers/creators");


router.route("/:id/profile-photo").put(protect, profilePhotoUpload);

router.route("/").get(getCreators).post(protect, createCreator);

router
  .route("/:id")
  .get(getCreator)
  .put(protect, updateCreator)
  .delete(protect, deleteCreator);

module.exports = router;
