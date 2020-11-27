const express = require("express");
const router = express.Router();
const {
  getCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
  createCompany,
  getCompaniesInRadius,
} = require("../controllers/companies");

router.route("radius/:zipcode/:distance").get(getCompaniesInRadius);

router.route("/").get(getCompanies).post(createCompany);

router
  .route("/:id")
  .get(getCompany)
  .put(updateCompany)
  .delete(deleteCompany);

module.exports = router;
