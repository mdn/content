---
title: "Nonce"
slug: Glossary/Nonce
page-type: glossary-definition
sidebar: glossarysidebar
---

In cryptography and computer security, a **`nonce`** is an arbitrary number that is used **only once** in a cryptographic communication. The term is derived from "number used once" and is commonly employed to prevent replay attacks, ensure message freshness, and add randomness to cryptographic protocols.

Nonces are frequently used in authentication protocols, encryption schemes, hashing, and digital signatures. They may be generated randomly or pseudo-randomly, or derived deterministically, depending on the application and security requirements.

In web security, nonces are commonly used in mechanisms such as **Content Security Policy (CSP)** to allow specific scripts to execute while preventing cross-site scripting (XSS) attacks. In cryptographic protocols like {{Glossary("TLS")}}, nonces help ensure that each session is unique.

## See also

- [Cryptographic nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) on Wikipedia
- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
- [Replay attack](https://en.wikipedia.org/wiki/Replay_attack) on Wikipedia
- Related glossary terms:
  - {{Glossary("cryptography")}}
  - {{Glossary("encryption")}}
  - {{Glossary("hash")}}
  - {{Glossary("TLS")}}
  - {{Glossary("authentication")}}
