# Backend (Express)

This folder contains a minimal Express server scaffolding.

Quick start:

```bash
cd backend
npm install
npm start
```

Endpoints:
- `GET /` - health check
- `POST /api/contact` - accepts JSON body `{ name, email, message }` and returns `{ success: true }` (placeholder)
 - `POST /api/contact` - accepts JSON body `{ name, email, message }` and sends an email to the configured recipient.

To send real emails:
1. Copy `.env.example` to `.env` and fill SMTP values (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`) and `TO_EMAIL`.
2. Install dependencies and start server:

```bash
cd backend
npm install
npm start
```

The server uses `nodemailer` to deliver messages via the configured SMTP server.
