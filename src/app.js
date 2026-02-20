const express = require("express");
const healthRoutes = require("./routes/health");
const configRoutes = require("./routes/config");
const subscriptionRoutes = require("./routes/subscriptions");
const themeRoutes = require("./routes/themes");
const chatRoutes = require("./routes/chat");

const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use("/api/v1", configRoutes);
app.use("/api/v1", subscriptionRoutes);
app.use("/api/v1", themeRoutes);
app.use("/api/v1", chatRoutes);

module.exports = app;
