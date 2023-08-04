---
title: Cryptographic hash function
slug: Glossary/Cryptographic_hash_function
page-type: glossary-definition
---

{{GlossarySidebar}}

A cryptographic hash function, also sometimes called a _digest function_, is a {{glossary("cryptography", "cryptographic")}} primitive transforming a message of arbitrary size into a message of fixed size, called a {{glossary("digest")}}. Cryptographic hash functions are used for authentication, {{Glossary("digital signature", "digital signatures")}}, and {{Glossary("HMAC", "message authentication codes")}}.

To be used for cryptography, a hash function must have these qualities:

- quick to compute (because they are generated frequently)
- not invertible (each digest could come from a very large number of messages, and only brute-force can generate a message that leads to a given digest)
- tamper-resistant (any change to a message leads to a different digest)
- collision-resistant (it should be impossible to find two different messages that produce the same digest)

Cryptographic hash functions such as MD5 and SHA-1 are considered broken, as attacks have been found that significantly reduce their collision resistance.

## See also

- [Cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function) on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{Glossary("Symmetric-key cryptography")}}
