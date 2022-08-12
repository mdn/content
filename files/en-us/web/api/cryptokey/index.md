---
title: CryptoKey
slug: Web/API/CryptoKey
page-type: web-api-interface
tags:
  - API
  - Code
  - CryptoKey
  - Cryptography
  - Encoding
  - Encryption
  - Interface
  - Privacy
  - Reference
  - Security
  - Web Crypto API
browser-compat: api.CryptoKey
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`CryptoKey`** interface of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents a cryptographic {{glossary("key")}} obtained from one of the {{domxref("SubtleCrypto")}} methods {{domxref("SubtleCrypto.generateKey", "generateKey()")}}, {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}, {{domxref("SubtleCrypto.importKey", "importKey()")}}, or {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}}.

For security reasons, the `CryptoKey` interface can only be used in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

## Properties

- `CryptoKey.type`

  - : String which may take one of the following values:

    - `"secret"`: This key is a secret key for use with a {{Glossary("Symmetric-key cryptography", "symmetric algorithm")}}.
    - `"private"`: This key is the private half of an {{Glossary("Public-key cryptography", "asymmetric algorithm's")}} [`CryptoKeyPair`](/en-US/docs/Web/API/CryptoKeyPair).
    - `"public"`: This key is the public half of an {{Glossary("Public-key cryptography", "asymmetric algorithm's")}} [`CryptoKeyPair`](/en-US/docs/Web/API/CryptoKeyPair).

- `CryptoKey.extractable`

  - : A boolean value indicating whether or not the key may be extracted using [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey) or [`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey).

    - `true`: The key may be extracted.
    - `false` The key may not be extracted. [`exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey) or [`wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey) will throw an exception if used to extract this key.

- `CryptoKey.algorithm`

  - : An object describing the algorithm for which this key can be used and any associated extra parameters.

    - [`AesKeyGenParams`](/en-US/docs/Web/API/AesKeyGenParams) if the algorithm is any of the AES variants.
    - [`RsaHashedKeyGenParams`](/en-US/docs/Web/API/RsaHashedKeyGenParams) if the algorithm is any of the RSA variants.
    - [`EcKeyGenParams`](/en-US/docs/Web/API/EcKeyGenParams) if the algorithm is any of the EC variants.
    - [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) if the algorithm is HMAC.

- `CryptoKey.usages`

  - : An {{jsxref("Array")}} of strings, indicating what can be done with the key. Possible values for array elements are:

    - `"encrypt"`: The key may be used to {{domxref("SubtleCrypto.encrypt()", "encrypt")}} messages.
    - `"decrypt"`: The key may be used to {{domxref("SubtleCrypto.decrypt()", "decrypt")}} messages.
    - `"sign"`: The key may be used to {{domxref("SubtleCrypto.sign()", "sign")}} messages.
    - `"verify"`: The key may be used to {{domxref("SubtleCrypto.verify()", "verify")}} signatures.
    - `"deriveKey"`: The key may be used in {{domxref("SubtleCrypto.deriveKey()", "deriving a new key")}}.
    - `"deriveBits"`: The key may be used in {{domxref("SubtleCrypto.deriveBits()", "deriving bits")}}.
    - `"wrapKey"`: The key may be used to {{domxref("SubtleCrypto.wrapKey()", "wrap a key")}}.
    - `"unwrapKey"`: The key may be used to {{domxref("SubtleCrypto.unwrapKey()", "unwrap a key")}}.

## Examples

The examples for `SubtleCrypto` methods often use `CryptoKey` objects. For example:

- [`SubtleCrypto.generateKey()`](/en-US/docs/Web/API/SubtleCrypto/generateKey)
- [`SubtleCrypto.deriveKey()`](/en-US/docs/Web/API/SubtleCrypto/deriveKey)
- [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey)
- [`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey)
- [`SubtleCrypto.unwrapKey()`](/en-US/docs/Web/API/SubtleCrypto/unwrapKey)
- [`SubtleCrypto.encrypt()`](/en-US/docs/Web/API/SubtleCrypto/encrypt)
- [`SubtleCrypto.decrypt()`](/en-US/docs/Web/API/SubtleCrypto/decrypt)
- [`SubtleCrypto.sign()`](/en-US/docs/Web/API/SubtleCrypto/sign)
- [`SubtleCrypto.verify()`](/en-US/docs/Web/API/SubtleCrypto/verify)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [Web security](/en-US/docs/Web/Security)
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
- {{domxref("Crypto")}} and {{domxref("Crypto.subtle")}}.
