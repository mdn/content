---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
page-type: web-api-interface
spec-urls: https://w3c.github.io/webcrypto/#dfn-HmacKeyGenParams
---

{{ APIRef("Web Crypto API") }}

The **`HmacKeyGenParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating a key for the [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac) algorithm.

## Instance properties

- `name`
  - : A string. This should be set to `HMAC`.
- `hash`
  - : A string representing the name of the [digest function](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to use. You can pass any of `SHA-1`, `SHA-256`, `SHA-384`, or `SHA-512` here.
- `length` {{optional_inline}}
  - : A `Number` — the length in bits of the key. If this is omitted, the length of the key is equal to the block size of the hash function you have chosen. Unless you have a good reason to use a different length, omit this property and use the default.

## Examples

See the examples for {{domxref("SubtleCrypto.generateKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "HMAC" algorithm for the {{domxref("SubtleCrypto.generateKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.generateKey()")}}.
