---
title: HMAC
slug: Glossary/HMAC
tags:
  - Cryptography
  - Glossary
  - Hash
  - Security
---
**Hash-based message authentication code**(_HMAC_) is a protocol used for {{Glossary("cryptography", "cryptographically")}} authenticating messages.

It can use any kind of {{Glossary("Cryptographic hash function", "cryptographic functions")}}, and its strength depends on the underlying function (SHA1 or MD5 for instance), and the chosen secret key. With such a combination, the HMAC verification {{Glossary("Algorithm", "algorithm")}} is then known with a compound name such as HMAC-SHA1.

HMAC is used to ensure both integrity and authentication.

## See also

- {{Interwiki("wikipedia", "Hash-based message authentication code", "HMAC")}} on Wikipedia
- [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt) on IETF
