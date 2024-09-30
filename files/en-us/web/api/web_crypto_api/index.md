---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
page-type: web-api-overview
browser-compat: api.Crypto
---

{{DefaultAPISidebar("Web Crypto API")}}{{securecontext_header}}{{AvailableInWorkers}}

The **Web Crypto API** is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.

Some browsers implemented an interface called {{domxref("Crypto")}} without having it well defined or being cryptographically sound.
In order to avoid confusion, methods and properties of this interface have been removed from browsers implementing the Web Crypto API, and all Web Crypto API methods are available on a new interface: {{domxref("SubtleCrypto")}}.
The {{domxref("Crypto.subtle")}} property gives access to an object implementing it.

> [!WARNING]
> The Web Crypto API provides a number of low-level cryptographic primitives. It's very easy to misuse them, and the pitfalls involved can be very subtle.
>
> Even assuming you use the basic cryptographic functions correctly, secure key management and overall security system design are extremely hard to get right, and are generally the domain of specialist security experts.
>
> Errors in security system design and implementation can make the security of the system completely ineffective.
>
> Please learn and experiment, but don't guarantee or imply the security of your work before an individual knowledgeable in this subject matter thoroughly reviews it. The [Crypto 101 Course](https://www.crypto101.io/) can be a great place to start learning about the design and implementation of secure systems.

## Interfaces

- {{domxref("Crypto")}}
  - : Provides basic cryptography features, such as a cryptographically strong random number generator, and access to cryptographic primitives via a {{domxref("SubtleCrypto")}} object.
    An object of this type can be accessed in the global scope using {{domxref("Window.crypto")}} or {{domxref("WorkerGlobalScope.crypto")}}.
- {{domxref("SubtleCrypto")}}
  - : Represents an object that provides low-level cryptographic functions for key generation, encryption, decryption, key wrapping and unwrapping, and so on.
- {{domxref("CryptoKey")}}
  - : Represents a cryptographic {{glossary("key")}} obtained from one of the {{domxref("SubtleCrypto")}} methods {{domxref("SubtleCrypto.generateKey", "generateKey()")}}, {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}, {{domxref("SubtleCrypto.importKey", "importKey()")}}, or {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}}.

### Dictionaries

- {{domxref("AesCbcParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) algorithm.
- {{domxref("AesCtrParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) algorithm.
- {{domxref("AesGcmParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) algorithm.
- {{domxref("AesKeyGenParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating an AES key: that is, when the algorithm is identified as any of [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw).
- {{domxref("CryptoKeyPair")}}
  - : Represents a public and private key pair used for an asymmetric cryptography algorithm.
- {{domxref("EcKeyGenParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating any elliptic-curve-based key pair: that is, when the algorithm is identified as either of [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh).
- {{domxref("EcKeyImportParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}}, when generating any elliptic-curve-based key pair: that is, when the algorithm is identified as either of [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh).
- {{domxref("EcdhKeyDeriveParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}}, when using the [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) algorithm.
- {{domxref("EcdsaParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.sign()")}} or {{domxref("SubtleCrypto.verify()")}} when using the [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) algorithm.
- {{domxref("HkdfParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}}, when using the [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf) algorithm.
- {{domxref("HmacImportParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}}, when generating a key for the [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac) algorithm.
- {{domxref("HmacKeyGenParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating a key for the [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac) algorithm.
- {{domxref("Pbkdf2Params")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}}, when using the [PBKDF2](/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) algorithm.
- {{domxref("RsaHashedImportParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}}, when importing any RSA-based key pair: that is, when the algorithm is identified as any of [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss), or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).
- {{domxref("RsaHashedKeyGenParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating any RSA-based key pair: that is, when the algorithm is identified as any of [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss), or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).
- {{domxref("RsaOaepParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [RSA_OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) algorithm.
- {{domxref("RsaPssParams")}}
  - : Represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.sign()")}} or {{domxref("SubtleCrypto.verify()")}}, when using the [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss) algorithm.

### Extensions to other interfaces

- {{domxref("Window.crypto")}}
  - : Represents the {{domxref("Crypto")}} object associated with the global object in the main thread scope.
- {{domxref("WorkerGlobalScope.crypto")}}
  - : Represents {{domxref("Crypto")}} object associated with the global object in worker scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
