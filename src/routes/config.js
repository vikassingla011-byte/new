const express = require("express");
const { adsConfig } = require("../data/store");

const router = express.Router();

router.get("/config/ads", (_req, res) => {
  res.json({ data: adsConfig });
});

module.exports = router;
