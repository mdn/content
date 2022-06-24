---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - Pbkdf2Params
  - Reference
  - Web Crypto API
spec-urls: https://w3c.github.io/webcrypto/#dfn-Pbkdf2Params
---
{{ APIRef("Web Crypto API") }}

The **`Pbkdf2Params`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}}, when using the [PBKDF2](/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) algorithm.

## Properties

- `name`
  - : A string. This should be set to `PBKDF2`.
- `hash`

  - : A string representing the [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to use. This may be one of:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

    > **Warning:** `SHA-1` is considered vulnerable in most cryptographic applications, but is still considered safe in PBKDF2. However, it's advisable to transition away from it everywhere, so unless you need to use `SHA-1`, don't. Use a different digest algorithm instead.

- `salt`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}. This should be a random or pseudo-random value of at least 16 bytes. Unlike the input key material passed into [`deriveKey()`](/en-US/docs/Web/API/SubtleCrypto/deriveKey), `salt` does not need to be kept secret.
- `iterations`
  - : A `Number` representing the number of times the hash function will be executed in `deriveKey()`. This determines how computationally expensive (that is, slow) the `deriveKey()` operation will be. In this context, slow is good, since it makes it more expensive for an attacker to run a {{Glossary("dictionary attack")}} against the keys. The general guidance here is to use as many iterations as possible, subject to keeping an acceptable level of performance for your application.

## Examples

See the examples for {{domxref("SubtleCrypto.deriveKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "PBKDF2" algorithm for the {{domxref("SubtleCrypto.deriveKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.deriveKey()")}}.
