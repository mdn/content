---
title: RsaOaepParams
slug: Web/API/RsaOaepParams
page-type: web-api-interface
spec-urls: https://w3c.github.io/webcrypto/#dfn-RsaOaepParams
---

{{ APIRef("Web Crypto API") }}

The **`RsaOaepParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [RSA_OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) algorithm.

## Instance properties

- `name`
  - : A string. This should be set to `RSA-OAEP`.
- `label` {{optional_inline}}

  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} — an array of bytes that does not itself need to be encrypted but which should be bound to the ciphertext. A digest of the label is part of the input to the encryption operation.

    Unless your application calls for a label, you can just omit this argument and it will not affect the security of the encryption operation.

## Examples

See the examples for {{domxref("SubtleCrypto.encrypt()")}} and {{domxref("SubtleCrypto.decrypt()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "RSA-OAEP" algorithm for the {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
