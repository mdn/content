---
title: SubtleCrypto.decrypt()
slug: Web/API/SubtleCrypto/decrypt
tags:
  - API
  - Decrypt
  - Method
  - Reference
  - SubtleCrypto
  - Web Crypto API
browser-compat: api.SubtleCrypto.decrypt
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`decrypt()`** method of the {{domxref("SubtleCrypto")}}
interface decrypts some encrypted data. It takes as arguments a {{glossary("key")}} to
decrypt with, some optional extra parameters, and the data to decrypt (also known as
"ciphertext"). It returns a {{jsxref("Promise")}} which will be fulfilled with the
decrypted data (also known as "plaintext").

## Syntax

```js
const result = crypto.subtle.decrypt(algorithm, key, data);
```

### Parameters

- _`algorithm`_ is an object specifying the [algorithm](#supported_algorithms) to be used, and any extra parameters as
  required. The values given for the extra parameters must match those passed into the
  corresponding {{domxref("SubtleCrypto.encrypt()", "encrypt()")}} call.

  - To use [RSA-OAEP](#rsa-oaep), pass an {{domxref("RsaOaepParams")}}
    object.
  - To use [AES-CTR](#aes-ctr), pass an {{domxref("AesCtrParams")}}
    object.
  - To use [AES-CBC](#aes-cbc), pass an {{domxref("AesCbcParams")}}
    object.
  - To use [AES-GCM](#aes-gcm), pass an {{domxref("AesGcmParams")}}
    object.

- `key` is a {{domxref("CryptoKey")}} containing the key to be
  used for decryption. If using RSA-OAEP, this is the `privateKey` property
  of the {{domxref("CryptoKeyPair")}} object.
- *`data`* is a {{domxref("BufferSource")}} containing the data to
  be decrypted (also known as {{glossary("ciphertext")}}).

### Return value

- `result` is a {{jsxref("Promise")}} that fulfills with an
  {{jsxref("ArrayBuffer")}} containing the plaintext.

### Exceptions

The promise is rejected when the following exceptions are encountered:

- InvalidAccessError
  - : Raised when the requested operation is not valid for the provided key (e.g. invalid
    encryption algorithm, or invalid key for the specified encryption algorithm*)*.
- OperationError
  - : Raised when the operation failed for an operation-specific reason (e.g. algorithm
    parameters of invalid sizes, or there was an error decrypting the ciphertext).

## Supported algorithms

The `decrypt()` method supports the same algorithms as the
[`encrypt()`](/en-US/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms)
method.

## Examples

> **Note:** You can [try
> the working examples](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) on GitHub.

### RSA-OAEP

This code decrypts `ciphertext` using RSA-OAEP. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function decryptMessage(privateKey, ciphertext) {
  return window.crypto.subtle.decrypt(
    {
      name: "RSA-OAEP"
    },
    privateKey,
    ciphertext
  );
}
```

### AES-CTR

This code decrypts `ciphertext` using AES in CTR mode. Note that
`counter` must match the value that was used for encryption. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64
    },
    key,
    ciphertext
  );
}
```

### AES-CBC

This code decrypts `ciphertext` using AES in CBC mode. Note that
`iv` must match the value that was used for encryption. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt(
    {
      name: "AES-CBC",
      iv: iv
    },
    key,
    ciphertext
  );
}
```

### AES-GCM

This code decrypts `ciphertext` using AES in GCM mode. Note that
`iv` must match the value that was used for encryption. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv
    },
    key,
    ciphertext
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.encrypt()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSAOAEP.
- [NIST
  SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) specifies CTR mode.
- [NIST
  SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) specifies CBC mode.
- [NIST
  SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) specifies GCM mode.
- [FIPS
  198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) specifies HMAC.
