const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

const {
  getCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
  createCompany,
  getCompaniesInRadius,
} = require("../controllers/companies");



router.route("radius/:zipcode/:distance").get(getCompaniesInRadius);

router.route("/").get(getCompanies).post(protect, authorize("company", "admin") , createCompany);

router
  .route("/:id")
  .get(getCompany)
  .put(protect, authorize("company", "admin"), updateCompany)
  .delete(protect, authorize("company", "admin"), deleteCompany);

module.exports = router;
