---
title: HMAC
slug: Glossary/HMAC
page-type: glossary-definition
sidebar: glossarysidebar
---

**Hash-based message authentication code**(_HMAC_) is a mechanism used for {{Glossary("cryptography", "cryptographically")}} authenticating messages.

It can use any kind of {{Glossary("Hash function", "cryptographic hash function")}}. Its strength depends on the underlying hash function and the chosen secret key. With such a combination, the HMAC verification {{Glossary("Algorithm", "algorithm")}} is then known with a compound name such as HMAC-SHA2.

HMAC is used to ensure both integrity and authentication.

## Example

The following JavaScript example creates an HMAC-SHA256 signature:

```js
async function createHMAC(message, secretKey) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secretKey);
  const messageData = encoder.encode(message);

  const key = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", key, messageData);
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
```

## See also

- [HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) on Wikipedia
- [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104) on IETF
