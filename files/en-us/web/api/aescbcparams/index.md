---
title: AesCbcParams
slug: Web/API/AesCbcParams
page-type: web-api-interface
spec-urls: https://w3c.github.io/webcrypto/#dfn-AesCbcParams
---

{{ APIRef("Web Crypto API") }}

The **`AesCbcParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) algorithm.

## Instance properties

- `name`
  - : A string. This should be set to `AES-CBC`.
- `iv`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}. The initialization vector. Must be 16 bytes, unpredictable, and preferably cryptographically random. However, it need not be secret (for example, it may be transmitted unencrypted along with the ciphertext).

## Examples

See the examples for {{domxref("SubtleCrypto.encrypt()")}} and {{domxref("SubtleCrypto.decrypt()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "AES-CBC" algorithm for the {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- CBC mode is defined in section 6.2 of the [NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).
- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
