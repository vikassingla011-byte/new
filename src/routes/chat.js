const express = require("express");
const { messagesByMatchId } = require("../data/store");

const router = express.Router();

router.get("/chat/:matchId/messages", (req, res) => {
  const { matchId } = req.params;
  const messages = messagesByMatchId[matchId] || [];

  res.json({ data: messages });
});

router.post("/chat/:matchId/messages", (req, res) => {
  const { matchId } = req.params;
  const { userId, text } = req.body;

  if (!userId || !text || typeof text !== "string") {
    return res.status(400).json({ error: "userId and text are required" });
  }

  const newMessage = {
    id: `msg_${Date.now()}`,
    matchId,
    userId,
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };

  if (!messagesByMatchId[matchId]) {
    messagesByMatchId[matchId] = [];
  }

  messagesByMatchId[matchId].push(newMessage);

  return res.status(201).json({ data: newMessage });
});

module.exports = router;
