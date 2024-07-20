---
title: EcdhKeyDeriveParams
slug: Web/API/EcdhKeyDeriveParams
page-type: web-api-interface
spec-urls: https://w3c.github.io/webcrypto/#dfn-EcdhKeyDeriveParams
---

{{ APIRef("Web Crypto API") }}

The **`EcdhKeyDeriveParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}}, when using the [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) algorithm.

ECDH enables two people who each have a key pair consisting of a public and a private key to derive a shared secret. They exchange public keys and use the combination of their private key and the other entity's public key to derive a secret key that they — and no one else — share.

The parameters for ECDH `deriveKey()` therefore include the other entity's public key, which is combined with this entity's private key to derive the shared secret.

## Instance properties

- `name`
  - : A string. This should be set to `ECDH`.
- `public`
  - : A {{domxref("CryptoKey")}} object representing the public key of the other entity.

## Examples

See the examples for {{domxref("SubtleCrypto.deriveKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "ECDH" algorithm for the {{domxref("SubtleCrypto.deriveKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.deriveKey()")}}.
