---
title: Cross-site request forgery (CSRF)
slug: Glossary/CSRF
page-type: glossary-definition
sidebar: glossarysidebar
---

In a **cross-site request forgery** (CSRF) attack, an attacker tricks the browser into making an HTTP request to the target site from a malicious site. The request includes the user's credentials and causes the server to carry out some harmful action, thinking that the user intended it.

A CSRF attack is possible if a website:

- Uses HTTP requests to change some state on the server
- Uses only cookies to validate that the request came from an authenticated user
- Uses only parameters in the request that an attacker can predict

There are several defenses against CSRF attacks, including [CSRF tokens](/en-US/docs/Web/Security/Attacks/CSRF#csrf_tokens), using [fetch metadata](/en-US/docs/Web/Security/Attacks/CSRF#fetch_metadata) to block certain cross-site requests, and [setting the `SameSite` attribute](/en-US/docs/Web/Security/Attacks/CSRF#defense_in_depth_samesite_cookies) on cookies used to authenticate sensitive requests.

## See also

- [Cross-site request forgery](/en-US/docs/Web/Security/Attacks/CSRF)
- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) at [owasp.org](https://owasp.org/)
