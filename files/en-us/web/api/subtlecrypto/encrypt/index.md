---
title: "SubtleCrypto: encrypt() method"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.encrypt
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`encrypt()`** method of the {{domxref("SubtleCrypto")}} interface encrypts data.

It takes as its arguments a {{glossary("key")}} to encrypt with, some algorithm-specific parameters, and the data to encrypt (also known as "plaintext").
It returns a {{jsxref("Promise")}} which will be fulfilled with the encrypted data (also known as "ciphertext").

## Syntax

```js-nolint
encrypt(algorithm, key, data)
```

### Parameters

- `algorithm`

  - : An object specifying the [algorithm](#supported_algorithms) to be used and any extra parameters if required:
    - To use [RSA-OAEP](#rsa-oaep), pass an {{domxref("RsaOaepParams")}} object.
    - To use [AES-CTR](#aes-ctr), pass an {{domxref("AesCtrParams")}} object.
    - To use [AES-CBC](#aes-cbc), pass an {{domxref("AesCbcParams")}} object.
    - To use [AES-GCM](#aes-gcm), pass an {{domxref("AesGcmParams")}} object.

- `key`
  - : A {{domxref("CryptoKey")}} containing the key to be used for encryption.
- `data`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}
    containing the data to be encrypted (also known as the {{glossary("plaintext")}}).

### Return value

A {{jsxref("Promise")}} that fulfills with an {{jsxref("ArrayBuffer")}} containing the "ciphertext".

### Exceptions

The promise is rejected when the following exceptions are encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the requested operation is not valid for the provided key (e.g. invalid encryption algorithm, or invalid key for the specified encryption algorithm).
- `OperationError` {{domxref("DOMException")}}
  - : Raised when the operation failed for an operation-specific reason (e.g. algorithm parameters of invalid sizes, or AES-GCM plaintext longer than 2<sup>39</sup>−256 bytes).

## Supported algorithms

The Web Crypto API provides four algorithms that support the `encrypt()` and `decrypt()` operations.

One of these algorithms — RSA-OAEP — is a {{Glossary("public-key cryptography", "public-key cryptosystem")}}.

The other three encryption algorithms here are all {{Glossary("Symmetric-key cryptography", "symmetric algorithms")}}, and they're all based on the same underlying cipher, AES (Advanced Encryption Standard).
The difference between them is the {{Glossary("Block cipher mode of operation", "mode")}}.
The Web Crypto API supports three different AES modes:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

It's strongly recommended to use _authenticated encryption_, which includes checks that the ciphertext has not been modified by an attacker.
Authentication helps protect against _chosen-ciphertext_ attacks, in which an attacker can ask the system to decrypt arbitrary messages, and use the result to deduce information about the
secret key.
While it's possible to add authentication to CTR and CBC modes, they do not provide it by default and when implementing it manually one can easily make minor, but serious mistakes.
GCM does provide built-in authentication, and for this reason it's often recommended over the other two AES modes.

### RSA-OAEP

The RSA-OAEP public-key encryption system is specified in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447).

### AES-CTR

This represents AES in Counter Mode, as specified in [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final).

AES is a block cipher, meaning that it splits the message into blocks and encrypts it a block at a time.
In CTR mode, every time a block of the message is encrypted, an extra block of data is mixed in. This extra block is called the "counter block".

A given counter block value must never be used more than once with the same key:

- Given a message _n_ blocks long, a different counter block must be used for every block.
- If the same key is used to encrypt more than one message, a different counter block must be used for all blocks across all messages.

Typically this is achieved by splitting the initial counter block value into two concatenated parts:

- A [nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) (that is, a number that may only be used once). The nonce part of the block stays the same for every block in the message. Each time a new message is to be encrypted, a new nonce is chosen. Nonces don't have to be secret, but they must not be reused with the same key.
- A counter. This part of the block gets incremented each time a block is encrypted.

Essentially: the nonce should ensure that counter blocks are not reused from one message to the next, while the counter should ensure that counter blocks are not reused within a single message.

> **Note:** See [Appendix B of the NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) for more information.

### AES-CBC

This represents AES in Cipher Block Chaining Mode, as specified in [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final).

### AES-GCM

This represents AES in Galois/Counter Mode, as specified in [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final).

One major difference between this mode and the others is that GCM is an "authenticated" mode, which means that it includes checks that the ciphertext has not been modified by an attacker.

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) out on GitHub.

### RSA-OAEP

This code fetches the contents of a text box, encodes it for encryption, and encrypts
it with using RSA-OAEP. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-oaep #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(publicKey) {
  let encoded = getMessageEncoding();
  return window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded,
  );
}
```

### AES-CTR

This code fetches the contents of a text box, encodes it for encryption, and encrypts it using AES in CTR mode.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-ctr #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // counter will be needed for decryption
  counter = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64,
    },
    key,
    encoded,
  );
}
```

```js
let iv = window.crypto.getRandomValues(new Uint8Array(16));
let key = window.crypto.getRandomValues(new Uint8Array(16));
let data = new Uint8Array(12345);
// crypto functions are wrapped in promises so we have to use await and make sure the function that
// contains this code is an async function
// encrypt function wants a cryptokey object
const key_encoded = await crypto.subtle.importKey(
  "raw",
  key.buffer,
  "AES-CTR",
  false,
  ["encrypt", "decrypt"],
);
const encrypted_content = await window.crypto.subtle.encrypt(
  {
    name: "AES-CTR",
    counter: iv,
    length: 128,
  },
  key_encoded,
  data,
);

// Uint8Array
console.log(encrypted_content);
```

### AES-CBC

This code fetches the contents of a text box, encodes it for encryption, and encrypts it using AES in CBC mode.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-cbc #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // iv will be needed for decryption
  iv = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv: iv,
    },
    key,
    encoded,
  );
}
```

### AES-GCM

This code fetches the contents of a text box, encodes it for encryption, and encrypts it using AES in GCM mode.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-gcm #message");
  const message = messageBox.value;
  const enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  const encoded = getMessageEncoding();
  // iv will be needed for decryption
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encoded,
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.decrypt()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) specifies CTR mode.
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) specifies CBC mode.
- [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) specifies GCM mode.
