const express = require("express");
const {
  handleGenerateNewURl,
  handleRedirectToOriginalURl,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewURl);
router.get("/:shortId", handleRedirectToOriginalURl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
