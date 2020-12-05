const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
  createCompany,
  getCompaniesInRadius,
} = require("../controllers/companies");



router.route("radius/:zipcode/:distance").get(getCompaniesInRadius);

router.route("/").get(getCompanies).post(protect, createCompany);

router
  .route("/:id")
  .get(getCompany)
  .put(protect, updateCompany)
  .delete(protect, deleteCompany);

module.exports = router;
