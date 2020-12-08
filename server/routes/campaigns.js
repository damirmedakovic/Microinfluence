const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

const {
  getCampaign,
  getCampaigns,
  updateCampaign,
  deleteCampaign,
  createCampaign,
} = require("../controllers/campaigns");




router.route("/").get(getCampaigns).post(protect, authorize("company", "admin") , createCampaign);

router
  .route("/:id")
  .get(getCampaign)
  .put(protect, authorize("company", "admin"), updateCampaign)
  .delete(protect, authorize("company", "admin"), deleteCampaign);

module.exports = router;
