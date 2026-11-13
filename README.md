# Frigates Shoe Store

A mobile-friendly shoe catalogue for FRIGATES STORES. Customers can browse products, filter and search the collection, add items to a cart, and send an itemised order summary through WhatsApp.

**Live site:** https://alpha791.github.io/shoe-/

## Features
- Responsive product catalogue and category filters.
- Product search and price/name sorting.
- Product details and image previews.
- Shopping cart, quantity controls and subtotal.
- WhatsApp order handoff with an itemised order summary.
- Accessible controls, lazy-loaded images and reduced-motion support.
- GitHub Pages deployment workflow.

## Technology
HTML5, CSS3 and vanilla JavaScript. Product data lives in `products.json`. No build step or package manager is required.

## Project structure
```text
.github/workflows/deploy.yml
css/style.css
images/
js/store.js
products.json
index.html
LICENSE
README.md
SECURITY.md
```

## Run locally
The site loads `products.json` using Fetch, so use a local HTTP server rather than opening `index.html` with a `file://` URL:
```bash
python -m http.server 8000
```
Open http://localhost:8000.

## Update products
Edit `products.json`. Each product has a unique `id`, `name`, numeric `price` in KES, `currency`, `categories`, `image` path, and `description`. Confirm stock, sizes, pricing and image rights before publishing changes.

## Orders and payments
The cart offers two WhatsApp checkout destinations with an itemised order message: primary +254 717 616 895 and alternative +254 791 185 252. This static site does **not** process payments, reserve inventory, calculate delivery fees or create server-side order records. The store must confirm availability, sizes, delivery charges and the final amount with the customer. Online payments require a secure backend and payment-provider integration.

Never commit credentials, payment secrets, access tokens or private customer information to this repository.

## Deployment
The GitHub Actions workflow validates required files and deploys the site when changes are pushed to `main`. In GitHub, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**. Pull requests run validation without deploying.

## Customer rights and privacy

Customers can open the [Customer Rights & Privacy Notice](https://alpha791.github.io/shoe-/legal.html) from the storefront footer. It explains browser cart storage, WhatsApp handoff, hosting, customer privacy rights, store ordering terms, and copyright information. This notice is general customer information, not legal advice.

## Support
WhatsApp primary: [+254 717 616 895](https://wa.me/254717616895) · WhatsApp alternative: [+254 791 185 252](https://wa.me/254791185252)

## Copyright and licence
Copyright (c) 2026 FRIGATES. All rights reserved, subject to the repository's proprietary licence and third-party rights. See [LICENSE](LICENSE).

**Developed by FRIGATES.** Engineering solutions. Building technology. Solving complex problems.
