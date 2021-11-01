---
title: SubtleCrypto.sign()
slug: Web/API/SubtleCrypto/sign
tags:
  - API
  - Method
  - Reference
  - SubtleCrypto
  - Web Crypto API
  - sign
browser-compat: api.SubtleCrypto.sign
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`sign()`** method of the {{domxref("SubtleCrypto")}}
interface generates a digital {{glossary("signature")}}.

It takes as its arguments a {{glossary("key")}} to sign with, some algorithm-specific
parameters, and the data to sign. It returns a {{jsxref("Promise")}} which will be
fulfilled with the signature.

You can use the corresponding {{domxref("SubtleCrypto.verify()")}} method to verify the
signature.

## Syntax

```js
const signature = crypto.subtle.sign(algorithm, key, data);
```

### Parameters

- _`algorithm`_ is a string or object that specifies the signature
  algorithm to use and its parameters:

  - To use [RSASSA-PKCS1-v1_5](#rsassa-pkcs1-v1_5), pass the string
    `"RSASSA-PKCS1-v1_5"` or an object of the form
    `{ "name": "RSASSA-PKCS1-v1_5" }`.
  - To use [RSA-PSS](#rsa-pss), pass an {{domxref("RsaPssParams")}}
    object.
  - To use [ECDSA](#ecdsa), pass an {{domxref("EcdsaParams")}} object.
  - To use [HMAC](#hmac), pass the string `"HMAC"` or an
    object of the form `{ "name": "HMAC" }`.

- `key` is a {{domxref("CryptoKey")}} object containing the key to
  be used for signing. If algorithm identifies a public-key cryptosystem, this is the
  private key.
- _`data`_ is an {{jsxref("ArrayBuffer")}} or
  {{domxref("ArrayBufferView")}} object containing the data to be signed.

### Return value

- `signature` is a {{jsxref("Promise")}} that fulfills with an
  {{jsxref("ArrayBuffer")}} containing the signature.

### Exceptions

The promise is rejected when the following exception is encountered:

- {{exception("InvalidAccessError")}}
  - : Raised when the signing key is not a key for the request signing algorithm or when
    trying to use an algorithm that is either unknown or isn't suitable for signing.

## Supported algorithms

The Web Crypto API provides four algorithms that can be used for signing and signature
verification.

Three of these algorithms — RSASSA-PKCS1-v1_5, RSA-PSS, and ECDSA — are
{{Glossary("public-key cryptography", "public-key cryptosystems")}} that use the private
key for signing and the public key for verification. These systems all use a [digest
algorithm](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to hash the message to a short fixed size before signing. The choice of
digest algorithm is passed into the {{domxref("SubtleCrypto.generateKey()",
  "generateKey()")}} or {{domxref("SubtleCrypto.importKey()", "importKey()")}} functions.

The fourth algorithm — HMAC — uses the same algorithm and key for signing and for
verification: this means that the verification key must be kept secret, which in turn
means that this algorithm is not suitable for many signature use cases. It can be a good
choice however when the signer and verifier are the same entity.

### RSASSA-PKCS1-v1_5

The RSASSA-PKCS1-v1_5 algorithm is specified in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447).

### RSA-PSS

The RSA-PSS algorithm is specified in [RFC
3447](https://datatracker.ietf.org/doc/html/rfc3447).

It's different from RSASSA-PKCS1-v1_5 in that it incorporates a random salt in the
signature operation, so the same message signed with the same key will not result in the
same signature each time. An extra property, defining the salt length, is passed into
the {{domxref("SubtleCrypto.sign()", "sign()")}} and {{domxref("SubtleCrypto.verify()",
  "verify()")}} functions when they are invoked.

### ECDSA

ECDSA (Elliptic Curve Digital Signature Algorithm) is a variant of the Digital
Signature Algorithm, specified in [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf), that
uses Elliptic Curve Cryptography ([RFC
6090](https://datatracker.ietf.org/doc/html/rfc6090)).

### HMAC

The HMAC algorithm calculates and verifies hash-based message authentication codes
according to the [FIPS
198-1 standard](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf).

The digest algorithm to use is specified in the
[`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) object
that you pass into  {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, or the
[`HmacImportParams`](/en-US/docs/Web/API/HmacImportParams) object
that you pass into {{domxref("SubtleCrypto.importKey()", "importKey()")}}.

## Examples

> **Note:** You can [try the
> working examples](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html) out on GitHub.

### RSASSA-PKCS1-v1_5

This code fetches the contents of a text box, encodes it for signing, and signs it with
a private key. [See
the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  "RSASSA-PKCS1-v1_5",
  privateKey,
  encoded
);
```

### RSA-PSS

This code fetches the contents of a text box, encodes it for signing, and signs it with
a private key. [See
the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  {
    name: "RSA-PSS",
    saltLength: 32,
  },
  privateKey,
  encoded
);
```

### ECDSA

This code fetches the contents of a text box, encodes it for signing, and signs it with
a private key. [See
the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/sign-verify/ecdsa.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  {
    name: "ECDSA",
    hash: {name: "SHA-384"},
  },
  privateKey,
  encoded
);
```

### HMAC

This code fetches the contents of a text box, encodes it for signing, and signs it with
a secret key. [See
the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/master/web-crypto/sign-verify/hmac.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  "HMAC",
  key,
  encoded
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.verify()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies
  RSASSA-PKCS1-v1_5.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSA-PSS.
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) specifies
  ECDSA.
- [FIPS
  198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) specifies HMAC.
