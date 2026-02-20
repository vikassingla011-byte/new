const express = require("express");
const { subscriptionStatusByUserId } = require("../data/store");

const router = express.Router();

router.get("/subscriptions/status/:userId", (req, res) => {
  const { userId } = req.params;
  const status = subscriptionStatusByUserId[userId] || {
    userId,
    planId: null,
    isVip: false,
    entitlements: [],
    status: "inactive",
  };

  res.json({ data: status });
});

module.exports = router;
