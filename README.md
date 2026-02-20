# Ludo Rani

Initial project scaffold for **Ludo Rani**.

## Included in this first build step

- Node.js + Express API foundation
- Core starter endpoints aligned with planning:
  - `GET /health`
  - `GET /api/v1/config/ads`
  - `GET /api/v1/subscriptions/status/:userId`
  - `GET /api/v1/themes/catalog`
  - `GET /api/v1/chat/:matchId/messages`
  - `POST /api/v1/chat/:matchId/messages`

## Run locally

```bash
npm install
npm start
```

Server runs on `http://localhost:3000` by default.

## Next build targets

1. Persist data in PostgreSQL (replace in-memory stores)
2. Add authentication + RBAC
3. Implement admin APIs for ad config and subscription plan management
4. Add realtime chat and match events with Socket.IO
