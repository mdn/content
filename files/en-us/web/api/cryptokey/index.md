---
title: CryptoKey
slug: Web/API/CryptoKey
page-type: web-api-interface
browser-compat: api.CryptoKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

The **`CryptoKey`** interface of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents a cryptographic {{glossary("key")}} obtained from one of the {{domxref("SubtleCrypto")}} methods {{domxref("SubtleCrypto.generateKey", "generateKey()")}}, {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}, {{domxref("SubtleCrypto.importKey", "importKey()")}}, or {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}}.

For security reasons, the `CryptoKey` interface can only be used in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

## Instance properties

- {{domxref("CryptoKey.type")}} {{ReadOnlyInline}}

  - : The type of key the object represents. It may take one of the following values: `"secret"`, `"private"` or `"public"`.

- {{domxref("CryptoKey.extractable")}} {{ReadOnlyInline}}

  - : A boolean value indicating whether or not the key may be extracted using [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey) or [`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey).

- {{domxref("CryptoKey.algorithm")}} {{ReadOnlyInline}}

  - : An object describing the algorithm for which this key can be used and any associated extra parameters.

- {{domxref("CryptoKey.usages")}} {{ReadOnlyInline}}

  - : An {{jsxref("Array")}} of strings, indicating what can be done with the key. Possible values for array elements are `"encrypt"`, `"decrypt"`, `"sign"`, `"verify"`, `"deriveKey"`, `"deriveBits"`, `"wrapKey"`, and `"unwrapKey"`.

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
