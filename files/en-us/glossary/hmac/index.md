---
title: HMAC
slug: Glossary/HMAC
page-type: glossary-definition
---

{{GlossarySidebar}}

**Hash-based message authentication code**(_HMAC_) is a protocol used for {{Glossary("cryptography", "cryptographically")}} authenticating messages.

It can use any kind of {{Glossary("Cryptographic hash function", "cryptographic functions")}}, and its strength depends on the underlying function (SHA1 or MD5 for instance), and the chosen secret key. With such a combination, the HMAC verification {{Glossary("Algorithm", "algorithm")}} is then known with a compound name such as HMAC-SHA1.

HMAC is used to ensure both integrity and authentication.

## See also

- [HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) on Wikipedia
- [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104) on IETF
