---
title: "SubtleCrypto: verify() method"
short-title: verify()
slug: Web/API/SubtleCrypto/verify
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.verify
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`verify()`** method of the {{domxref("SubtleCrypto")}}
interface verifies a digital {{glossary("signature")}}.

It takes as its arguments a {{glossary("key")}} to verify the signature with, some
algorithm-specific parameters, the signature, and the original signed data. It returns a
{{jsxref("Promise")}} which will be fulfilled with a boolean value
indicating whether the signature is valid.

## Syntax

```js-nolint
verify(algorithm, key, signature, data)
```

### Parameters

- `algorithm`
  - : A string or object defining the algorithm to use, and for some algorithm choices, some extra parameters.
    The values given for the extra parameters must match those passed into the corresponding {{domxref("SubtleCrypto.sign()", "sign()")}} call.
    - To use [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5),
      pass the string `"RSASSA-PKCS1-v1_5"` or an object of the form `{ "name": "RSASSA-PKCS1-v1_5" }`.
    - To use [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss), pass an {{domxref("RsaPssParams")}} object.
    - To use [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa), pass an {{domxref("EcdsaParams")}} object.
    - To use [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac), pass the string `"HMAC"` or an object of the form `{ "name": "HMAC" }`.
- `key`
  - : A {{domxref("CryptoKey")}} containing the key that will be used to verify the signature.
    It is the secret key for a symmetric algorithm and the public key for a public-key system.
- `signature`
  - : A {{jsxref("ArrayBuffer")}} containing the {{glossary("signature")}} to verify.
- `data`
  - : A {{jsxref("ArrayBuffer")}} containing the data whose signature is to be verified.

### Return value

A {{jsxref("Promise")}} that fulfills with a
boolean value: `true` if the signature is valid, `false`
otherwise.

### Exceptions

The promise is rejected when the following exception is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the encryption key is not a key for the requested verifying algorithm or
    when trying to use an algorithm that is either unknown or isn't suitable for a verify
    operation.

## Supported algorithms

The `verify()` method supports the same algorithms as the
[`sign()`](/en-US/docs/Web/API/SubtleCrypto/sign#supported_algorithms)
method.

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html) out on GitHub.

### RSASSA-PKCS1-v1_5

This code uses a public key to verify a signature.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### RSA-PSS

This code uses a public key to verify a signature.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".rsa-pss .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### ECDSA

This code uses a public key to verify a signature.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".ecdsa .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" },
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### HMAC

This code uses a secret key to verify a signature.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(key) {
  const signatureValue = document.querySelector(".hmac .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "HMAC",
    key,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.sign()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSASSA-PKCS1-v1_5.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSA-PSS.
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) specifies ECDSA.
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) specifies HMAC.
