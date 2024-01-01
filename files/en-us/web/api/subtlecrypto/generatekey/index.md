---
title: "SubtleCrypto: generateKey() method"
short-title: generateKey()
slug: Web/API/SubtleCrypto/generateKey
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.generateKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Use the **`generateKey()`** method of the
{{domxref("SubtleCrypto")}} interface to generate a new key (for symmetric algorithms)
or key pair (for public-key algorithms).

## Syntax

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### Parameters

- `algorithm`

  - : An object defining the type of key to generate and providing extra algorithm-specific parameters.

    - For [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      pass an [`RsaHashedKeyGenParams`](/en-US/docs/Web/API/RsaHashedKeyGenParams) object.
    - For [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      pass an [`EcKeyGenParams`](/en-US/docs/Web/API/EcKeyGenParams) object.
    - For [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac):
      pass an [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) object.
    - For [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      pass an [`AesKeyGenParams`](/en-US/docs/Web/API/AesKeyGenParams) object.

- `extractable`
  - : A boolean value indicating whether it
    will be possible to export the key using {{domxref("SubtleCrypto.exportKey()")}} or
    {{domxref("SubtleCrypto.wrapKey()")}}.
- `keyUsages`
  - : An {{jsxref("Array")}} indicating what can be
    done with the newly generated key. Possible values for array elements are:
    - `encrypt`: The key may be used to {{domxref("SubtleCrypto.encrypt()", "encrypt")}} messages.
    - `decrypt`: The key may be used to {{domxref("SubtleCrypto.decrypt()", "decrypt")}} messages.
    - `sign`: The key may be used to {{domxref("SubtleCrypto.sign()", "sign")}} messages.
    - `verify`: The key may be used to {{domxref("SubtleCrypto.verify()", "verify")}} signatures.
    - `deriveKey`: The key may be used in {{domxref("SubtleCrypto.deriveKey()", "deriving a new key")}}.
    - `deriveBits`: The key may be used in {{domxref("SubtleCrypto.deriveBits()", "deriving bits")}}.
    - `wrapKey`: The key may be used to {{domxref("SubtleCrypto.wrapKey()", "wrap a key")}}.
    - `unwrapKey`: The key may be used to {{domxref("SubtleCrypto.unwrapKey()", "unwrap a key")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a
{{domxref("CryptoKey")}} (for symmetric algorithms) or a {{domxref("CryptoKeyPair")}}
(for public-key algorithms).

### Exceptions

The promise is rejected when the following exception is encountered:

- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when the result is a {{domxref("CryptoKey")}} of type `secret` or
    `private` but `keyUsages` is empty.
- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when the result is a {{domxref("CryptoKeyPair")}} and its
    `privateKey.usages` attribute is empty.

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) on GitHub.

### RSA key pair generation

This code generates an RSA-OAEP encryption key pair.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256",
  },
  true,
  ["encrypt", "decrypt"],
);
```

### Elliptic curve key pair generation

This code generates an ECDSA signing key pair.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "ECDSA",
    namedCurve: "P-384",
  },
  true,
  ["sign", "verify"],
);
```

### HMAC key generation

This code generates an HMAC signing key.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: { name: "SHA-512" },
  },
  true,
  ["sign", "verify"],
);
```

### AES key generation

This code generates an AES-GCM encryption key.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"],
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cryptographic key length recommendations](https://www.keylength.com/).
- [NIST Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final).
