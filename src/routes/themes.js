const express = require("express");
const { themes } = require("../data/store");

const router = express.Router();

router.get("/themes/catalog", (_req, res) => {
  res.json({ data: themes });
});

module.exports = router;
