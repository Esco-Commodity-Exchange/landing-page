# Esco Trade & Co Ltd. Corporate Website

Responsive multi-page React website built with React, Vite, React Router and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
```

## Project structure

```text
src/
  components/
    Layout.jsx
    PageHero.jsx
  pages/
    Home.jsx
    About.jsx
    Brands.jsx
    Shompod.jsx
    Business.jsx
    Compliance.jsx
    Media.jsx
    Contact.jsx
    Terms.jsx
    PrivacyPolicy.jsx
    RefundPolicy.jsx
    RiskDisclosure.jsx
  data.js
  router.jsx
  App.jsx
  main.jsx
  styles.css
```

Every page has its own JSX file. Routing is maintained separately in `src/router.jsx`. Source code is formatted with readable indentation and line breaks.

## Routes

- `/` — Home
- `/about` — About Us
- `/brands` — Our Brands
- `/brands/shompod` — Shompod
- `/business` — Business Areas
- `/compliance` — Company Information
- `/media` — Media
- `/contact` — Contact
- `/terms` — Terms & Conditions
- `/privacy-policy` — Privacy Policy
- `/refund-policy` — Refund Policy
- `/risk-disclosure` — Risk Disclosure

## Company information

Company information is maintained in `src/data.js`:

- Trade License: 267
- TIN: 354561795486
- RJSC Incorporation: C-202179/2025
- Phone: 01612280451
- Email: support@esco.com.bd

Verify the company details and have policy text reviewed before deploying the live website.
