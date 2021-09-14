---
title: CryptoKeyPair
slug: Web/API/CryptoKeyPair
tags:
  - API
  - CryptoKeyPair
  - Dictionary
  - Reference
  - Web Crypto API
browser-compat: api.CryptoKeyPair
---
{{APIRef("Web Crypto API")}}

The **`CryptoKeyPair`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents a key pair for an asymmetric cryptography algorithm, also known as a public-key algorithm.

A `CryptoKeyPair` object can be obtained using {{domxref("SubtleCrypto.generateKey()")}}, when the selected algorithm is one of the asymmetric algorithms: RSASSA-PKCS1-v1_5, RSA-PSS, RSA-OAEP, ECDSA, or ECDH.

It contains two properties, which are both [`CryptoKey`](/en-US/docs/Web/API/CryptoKey) objects: a `privateKey` property containing the private key and a `publicKey` property containing the public key.

## Properties

- `CryptoKeyPair.privateKey`
  - : A [`CryptoKey`](/en-US/docs/Web/API/CryptoKey) object representing the private key. For encryption and decryption algorithms, this key is used to decrypt. For signing and verification algorithms it is used to sign.
- `CryptoKeyPair.publicKey`
  - : A [`CryptoKey`](/en-US/docs/Web/API/CryptoKey) object representing the public key. For encryption and decryption algorithms, this key is used to encrypt. For signing and verification algorithms it is used to verify signatures.

## Examples

The examples for `SubtleCrypto` methods often use `CryptoKeyPair` objects. For example:

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

- {{domxref("SubtleCrypto.generateKey")}}.
- {{domxref("SubtleCrypto.sign")}} and {{domxref("SubtleCrypto.verify")}}.
- {{domxref("SubtleCrypto.encrypt")}} and {{domxref("SubtleCrypto.decrypt")}}.
