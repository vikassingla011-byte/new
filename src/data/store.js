const adsConfig = {
  environment: "dev",
  android: {
    appId: "ca-app-pub-android-app-id",
    bannerUnitId: "ca-app-pub-android-banner-id",
    interstitialUnitId: "ca-app-pub-android-interstitial-id",
    rewardedUnitId: "ca-app-pub-android-rewarded-id",
  },
  ios: {
    appId: "ca-app-pub-ios-app-id",
    bannerUnitId: "ca-app-pub-ios-banner-id",
    interstitialUnitId: "ca-app-pub-ios-interstitial-id",
    rewardedUnitId: "ca-app-pub-ios-rewarded-id",
  },
  placements: {
    homeBanner: { enabled: true },
    postMatchInterstitial: { enabled: true },
    rewardSpin: { enabled: true },
  },
};

const subscriptionStatusByUserId = {
  user_1: {
    userId: "user_1",
    planId: "vip_basic_monthly",
    isVip: true,
    entitlements: ["ad_free", "premium_themes"],
    status: "active",
  },
};

const themes = [
  { id: "theme_classic", name: "Classic", tier: "free", isActive: true },
  { id: "theme_royal_gold", name: "Royal Gold", tier: "vip", isActive: true },
  { id: "theme_neon_nights", name: "Neon Nights", tier: "vip", isActive: true },
];

const messagesByMatchId = {
  match_101: [
    {
      id: "msg_1",
      matchId: "match_101",
      userId: "user_1",
      text: "Good luck!",
      createdAt: new Date().toISOString(),
    },
  ],
};

module.exports = {
  adsConfig,
  subscriptionStatusByUserId,
  themes,
  messagesByMatchId,
};
