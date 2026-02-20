const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const adConfig = {
  appName: 'Ludo Rani',
  updatedAt: new Date().toISOString(),
  android: {
    appId: 'ca-app-pub-android-placeholder',
    bannerUnitId: 'ca-app-pub-android-banner-placeholder',
    interstitialUnitId: 'ca-app-pub-android-interstitial-placeholder',
    rewardedUnitId: 'ca-app-pub-android-rewarded-placeholder'
  },
  ios: {
    appId: 'ca-app-pub-ios-placeholder',
    bannerUnitId: 'ca-app-pub-ios-banner-placeholder',
    interstitialUnitId: 'ca-app-pub-ios-interstitial-placeholder',
    rewardedUnitId: 'ca-app-pub-ios-rewarded-placeholder'
  }
};

const themeCatalog = [
  { id: 'classic', name: 'Classic Rani', vipOnly: false, active: true },
  { id: 'royal-gold', name: 'Royal Gold', vipOnly: true, active: true },
  { id: 'night-neon', name: 'Night Neon', vipOnly: true, active: false }
];

const chatMessagesByMatch = new Map();

app.get('/health', (_req, res) => {
  res.json({
    service: 'ludo-rani-api',
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/v1/config/ads', (_req, res) => {
  res.json(adConfig);
});

app.get('/api/v1/subscriptions/status/:userId', (req, res) => {
  const { userId } = req.params;
  const isVip = userId.toLowerCase().startsWith('vip');

  res.json({
    userId,
    appName: 'Ludo Rani',
    plan: isVip ? 'VIP_PRO' : 'FREE',
    entitlements: {
      ad_free: isVip,
      premium_themes: isVip,
      vip_chat_badge: isVip
    }
  });
});

app.get('/api/v1/themes/catalog', (_req, res) => {
  res.json({
    appName: 'Ludo Rani',
    themes: themeCatalog
  });
});

app.get('/api/v1/chat/:matchId/messages', (req, res) => {
  const { matchId } = req.params;
  const messages = chatMessagesByMatch.get(matchId) || [];
  res.json({ matchId, messages });
});

app.post('/api/v1/chat/:matchId/messages', (req, res) => {
  const { matchId } = req.params;
  const { sender, text } = req.body;

  if (!sender || !text) {
    res.status(400).json({ error: 'sender and text are required' });
    return;
  }

  const newMessage = {
    id: `${Date.now()}`,
    sender,
    text,
    sentAt: new Date().toISOString()
  };

  const messages = chatMessagesByMatch.get(matchId) || [];
  messages.push(newMessage);
  chatMessagesByMatch.set(matchId, messages);

  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Ludo Rani API listening on port ${PORT}`);
});
