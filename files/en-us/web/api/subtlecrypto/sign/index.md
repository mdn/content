---
title: "SubtleCrypto: sign() method"
short-title: sign()
slug: Web/API/SubtleCrypto/sign
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.sign
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`sign()`** method of the {{domxref("SubtleCrypto")}} interface generates a digital {{glossary("signature")}}.

It takes as its arguments a {{glossary("key")}} to sign with, some algorithm-specific parameters, and the data to sign. It returns a {{jsxref("Promise")}} which will be fulfilled with the signature.

You can use the corresponding {{domxref("SubtleCrypto.verify()")}} method to verify the signature.

## Syntax

```js-nolint
sign(algorithm, key, data)
```

### Parameters

- `algorithm`
  - : A string or object that specifies the signature algorithm to use and its parameters:
    - To use [RSASSA-PKCS1-v1_5](#rsassa-pkcs1-v1_5), pass the string `RSASSA-PKCS1-v1_5` or an object of the form `{ name: "RSASSA-PKCS1-v1_5" }`.
    - To use [RSA-PSS](#rsa-pss), pass an {{domxref("RsaPssParams")}} object.
    - To use [ECDSA](#ecdsa), pass an {{domxref("EcdsaParams")}} object.
    - To use [HMAC](#hmac), pass the string `HMAC` or an object of the form `{ name: "HMAC" }`.
    - To use [Ed25519](#ed25519), pass the string `Ed25519` or an object of the form `{ name: "Ed25519" }`.
- `key`
  - : A {{domxref("CryptoKey")}} object containing the key to be used for signing.
    If `algorithm` identifies a public-key cryptosystem, this is the private key.
- `data`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object containing the data to be signed.

### Return value

A {{jsxref("Promise")}} that fulfills with an {{jsxref("ArrayBuffer")}} containing the signature.

### Exceptions

The promise is rejected when the following exception is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the signing key is not a key for the request signing algorithm or when trying to use an algorithm that is either unknown or isn't suitable for signing.

## Supported algorithms

The Web Crypto API provides the following algorithms that can be used for signing (and signature verification):

#### RSASSA-PKCS1-v1_5

The SASSA-PKCS1-v1_5 algorithm is used in {{Glossary("public-key cryptography", "public-key cryptosystems")}} that use the private key for signing and the public key for verification.
Systems that use this algorithm use a [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to hash the message to a short fixed size before signing.
The choice of digest algorithm is passed into the {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} or {{domxref("SubtleCrypto.importKey()", "importKey()")}} functions.

The RSASSA-PKCS1-v1_5 algorithm is specified in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447).

#### RSA-PSS

The RSA-PSS algorithm is used in {{Glossary("public-key cryptography", "public-key cryptosystems")}} that use the private key for signing and the public key for verification.
Systems that use this algorithm use a [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to hash the message to a short fixed size before signing.
The choice of digest algorithm is passed into the {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} or {{domxref("SubtleCrypto.importKey()", "importKey()")}} functions.

The algorithm is specified in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447).

It's different from RSASSA-PKCS1-v1_5 in that it incorporates a random salt in the signature operation, so the same message signed with the same key will not result in the same signature each time. An extra property, defining the salt length, is passed into the {{domxref("SubtleCrypto.sign()", "sign()")}} and {{domxref("SubtleCrypto.verify()", "verify()")}} functions when they are invoked.

#### ECDSA

This algorithm is used in {{Glossary("public-key cryptography", "public-key cryptosystems")}} that use the private key for signing and the public key for verification.
Systems that use this algorithm use a [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to hash the message to a short fixed size before signing.
This
For ECDSA the choice of digest algorithm is passed as part of the `algorithm` object, a {{domxref("EcdsaParams")}}, when calling {{domxref("SubtleCrypto.sign()")}}.

ECDSA (Elliptic Curve Digital Signature Algorithm) is a variant of the Digital Signature Algorithm, specified in [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf), that uses Elliptic Curve Cryptography ([RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090)).

Signatures are encoded as the `s1` and `s2` values specified in RFC 6090 (known respectively as `r` and `s` in [RFC 4754](https://datatracker.ietf.org/doc/html/rfc4754#section-3)), each in big-endian byte arrays, with their length the bit size of the curve rounded up to a whole number of bytes.
These values are concatenated together in this order.

This encoding was also proposed by the [IEEE 1363-2000](https://standards.ieee.org/ieee/1363/2049/) standard, and is sometimes referred to as the IEEE P1363 format. It differs from the [X.509](https://www.itu.int/rec/T-REC-X.509) signature structure, which is the default format produced by some tools and libraries such as [OpenSSL](https://www.openssl.org).

#### HMAC

The HMAC algorithm calculates and verifies hash-based message authentication codes according to the [FIPS 198-1 standard](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf).

The digest algorithm to use is specified in the [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) object that you pass into {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, or the
[`HmacImportParams`](/en-US/docs/Web/API/HmacImportParams) object that you pass into {{domxref("SubtleCrypto.importKey()", "importKey()")}}.

The HMAC algorithm uses the same algorithm and key for signing and for verification: this means that the verification key must be kept secret, which in turn means that this algorithm is not suitable for many signature use cases.
It can be a good choice however when the signer and verifier are the same entity.

#### Ed25519

Ed25519 is a high-performance digital signature algorithm built on the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) elliptic curve, which is part of the Edwards-Curve Digital Signature Algorithm (EdDSA) family of algorithms defined in {{rfc("8032")}}.

This algorithm is used in {{Glossary("public-key cryptography", "public-key cryptosystems")}} that use the private key for signing and the public key for verification.
Unlike some other such systems (RSASSA-PKCS1-v1_5, RSA-PSS, and ECDSA), it does not pass in a [digest](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) of the message for signing.

## Examples

> [!NOTE]
> You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html) out on GitHub.

### RSASSA-PKCS1-v1_5

This code fetches the contents of a text box, encodes it for signing, and signs it with a private key.
[See the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

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
  encoded,
);
```

### RSA-PSS

This code fetches the contents of a text box, encodes it for signing, and signs it with a private key.
[See the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

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
  encoded,
);
```

### ECDSA

This code fetches the contents of a text box, encodes it for signing, and signs it with a private key.
[See the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

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
    hash: { name: "SHA-384" },
  },
  privateKey,
  encoded,
);
```

### HMAC

This code fetches the contents of a text box, encodes it for signing, and signs it with a secret key.
[See the complete source code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

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
let signature = await window.crypto.subtle.sign("HMAC", key, encoded);
```

### Ed25519 (key generation, signing, and verification)

This code generates an Ed25519 signing key pair, uses the private key to sign the (encoded) contents of a text `<input>`, and then verifies the signature using the public key.
It is derived from [this source code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ed25519.js), which you can [run live here](https://mdn.github.io/dom-examples/web-crypto/sign-verify/).

#### HTML

The HTML defines an `<input>`, containing the text to be signed, and a button that starts the operation to create keys, sign the text and then verify the signature.

```html
<label for="message">Enter a message to sign:</label>
<input
  type="text"
  id="message"
  name="message"
  size="25"
  value="The lion roars near dawn" />

<input id="sign-button" type="button" value="Run" />
```

```html hidden
<pre id="log">Click "Run" button</pre>
```

```css hidden
#log {
  height: 110px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The JavaScript first gets the `button` and message `input` elements, and then adds a listener for the `click` event on the button.
The event handler that clears the log and runs the other operations passing the content of the `input` element.

```js
const button = document.querySelector("#sign-button");
const input = document.querySelector("#message");

button.addEventListener("click", () => {
  // Clear log
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Run test
  test(input.value);
});
```

The code below has several parts.
First it generates keys using the Ed25519 algorithm, then it encodes text and signs that text using the private key.
Then if calls {{domxref("SubtleCrypto.verify()")}} with the public key to verify the signature.

```js
async function test(data) {
  log(`Message: ${data}`);
  try {
    // Generate keys
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "Ed25519",
      },
      true,
      ["sign", "verify"],
    );

    log(`publicKey: ${publicKey}, type: ${publicKey.type}`);
    log(`privateKey: ${privateKey},  type: ${privateKey.type}`);

    // Encode data prior to signing
    const encoder = new TextEncoder();
    encodedData = encoder.encode(data);
    log(`encodedData: ${encodedData}`);

    // Sign the data using the private key.
    const signature = await crypto.subtle.sign(
      {
        name: "Ed25519",
      },
      privateKey,
      encodedData,
    );

    // Log the first part of the signature data
    const signatureBuffer = new Uint8Array(signature, 0, 8);
    log(
      `signature: ${signatureBuffer}...[${signature.byteLength} bytes total]`,
    );

    // Verify the signature using the public key
    const verifyResult = await crypto.subtle.verify(
      {
        name: "Ed25519",
      },
      publicKey,
      signature,
      encodedData,
    );

    // Log result - true if the text was signed with the corresponding public key.
    log(`signature verified?: ${verifyResult}`);
  } catch (error) {
    log(error);
  }
}
```

#### Result

The information about the created keys is logged below (or an error string if the browser does not allow the key to be created).

{{EmbedLiveSample("Ed25519 (key generation, signing, and verification)", "100%", "170px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.verify()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSASSA-PKCS1-v1_5.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSA-PSS.
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) specifies ECDSA.
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) specifies HMAC.
