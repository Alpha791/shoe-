# Security Policy

## Reporting a vulnerability
Do not publish credentials, private customer information, or exploitable vulnerabilities in a public issue. Report suspected security issues privately to **alpha39frigates@gmail.com**. Include the affected URL or file, reproduction steps, expected impact, and relevant evidence. Do not access or modify other users' data while investigating.

## Scope and limitations
This repository is a static storefront. WhatsApp checkout hands an order message to the customer's WhatsApp client; it does not collect card details or store orders on a server.

- Never commit passwords, API keys, access tokens, payment secrets, or customer records.
- Keep future payment integrations and privileged operations on a trusted server, not browser JavaScript.
- Verify payment status server-side before treating an order as paid.
- Use HTTPS for production services.
- Review third-party scripts, fonts, libraries and image licences before use.

## Supported versions
Security fixes are applied to the current default branch.
