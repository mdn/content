---
title: SubtleCrypto.wrapKey()
slug: Web/API/SubtleCrypto/wrapKey
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - SubtleCrypto
  - Web Crypto API
  - wrapKey
browser-compat: api.SubtleCrypto.wrapKey
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`wrapKey()`** method of the {{domxref("SubtleCrypto")}}
interface "wraps" a key. This means that it exports the key in an external, portable
format, then encrypts the exported key. Wrapping a key helps protect it in untrusted
environments, such as inside an otherwise unprotected data store or in transmission over
an unprotected network.

As with {{DOMxRef("SubtleCrypto.exportKey()")}},
you specify an [export format](/en-US/docs/Web/API/SubtleCrypto/importKey#supported_formats)
for the key. To export a key, it must have {{DOMxRef("CryptoKey.extractable")}}
set to `true`.

But because `wrapKey()` also encrypts the key to be imported, you also need
to pass in the key that must be used to encrypt it. This is sometimes called the
"wrapping key".

The inverse of `wrapKey()` is {{domxref("SubtleCrypto.unwrapKey()")}}: while
`wrapKey` is composed of export + encrypt, `unwrapKey` is composed
of import + decrypt.

## Syntax

```js
wrapKey(format, key, wrappingKey, wrapAlgo)
```

### Parameters

- `format`
  - : A string describing the data format in which the key will be exported before it is encrypted. It can be one of the following:
    - `raw`
      - : [Raw](/en-US/docs/Web/API/SubtleCrypto/importKey#raw) format.
    - `pkcs8`
      - : [PKCS #8](/en-US/docs/Web/API/SubtleCrypto/importKey#pkcs_8) format.
    - `spki`
      - : [SubjectPublicKeyInfo](/en-US/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) format.
    - `jwk`
      - : [JSON Web Key](/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format.
- `key`
  - : The {{domxref("CryptoKey")}} to wrap.
- `wrappingkey`
  - : The {{domxref("CryptoKey")}} used to encrypt the exported key. The key must have the `wrapKey` usage set.
- `wrapAlgo`
  - : An object specifying the [algorithm](/en-US/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms)
    to be used to encrypt the exported key, and any required extra parameters:
    - To use [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep),
      pass an [`RsaOaepParams`](/en-US/docs/Web/API/RsaOaepParams) object.
    - To use [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr),
      pass an [`AesCtrParams`](/en-US/docs/Web/API/AesCtrParams) object.
    - To use [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      pass an [`AesCbcParams`](/en-US/docs/Web/API/AesCbcParams) object.
    - To use [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm),
      pass an [`AesGcmParams`](/en-US/docs/Web/API/AesGcmParams) object.
    - To use [AES-KW](#aes-kw),
      pass the string `"AES-KW"`, or an object of the form `{ "name": "AES-KW }`.

### Return value

- `result` is a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  that fulfills with an
  [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
  containing the encrypted exported key.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the wrapping key is not a key for the requested wrap algorithm.
- `NotSupported` {{domxref("DOMException")}}
  - : Raised when trying to use an algorithm that is either unknown or isn't suitable for
    encryption or wrapping.
- {{jsxref("TypeError")}}
  - : Raised when trying to use an invalid format.

## Supported algorithms

All [algorithms that are usable for encryption](/en-US/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) are also usable for key wrapping,
as long as the key has the "wrapKey" usage set. For key wrapping you have the additional option of AES-KW.

### AES-KW

AES-KW is a way to use the AES cipher for key wrapping.

One advantage of using AES-KW over another AES mode such as AES-GCM is that AES-KW does
not require an initialization vector. To use AES-KW, the input must be a multiple of 64
bits.

AES-KW is specified in [RFC 3394](https://datatracker.ietf.org/doc/html/rfc3394).

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/wrap-key/index.html) out on GitHub.

### Raw wrap

This example wraps an AES key. It uses "raw" as the export format and AES-KW, with a
password-derived key, to encrypt it. [See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/raw.js).

```js
let salt;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt('Enter your password');
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey'],
  );
}

/*
Given some key material and some random salt
derive an AES-KW key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-KW', length: 256 },
    true,
    ['wrapKey', 'unwrapKey'],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);

  return window.crypto.subtle.wrapKey('raw', keyToWrap, wrappingKey, 'AES-KW');
}

/*
Generate an encrypt/decrypt secret key,
then wrap it.
*/
window.crypto.subtle
  .generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  )
  .then((secretKey) => wrapCryptoKey(secretKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

### PKCS #8 wrap

This example wraps an RSA private signing key. It uses "pkcs8" as the export format and
AES-GCM, with a password-derived key, to encrypt it.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/pkcs8.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt('Enter your password');
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey'],
  );
}

/*
Given some key material and some random salt
derive an AES-GCM key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['wrapKey', 'unwrapKey'],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(12));

  return window.crypto.subtle.wrapKey(
    'pkcs8',
    keyToWrap,
    wrappingKey,
    { name: 'AES-GCM', iv });
}

/*
Generate a sign/verify key pair,
then wrap the private key.
*/
window.crypto.subtle
  .generateKey(
    {
      name: 'RSA-PSS',
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify'],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.privateKey))
  .then((wrappedKey) => {
    console.log(wrappedKey);
  });
```

### SubjectPublicKeyInfo wrap

This example wraps an RSA public encryption key. It uses "spki" as the export format
and AES-CBC, with a password-derived key, to encrypt it.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/spki.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt('Enter your password');
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey'],
  );
}

/*
Given some key material and some random salt
derive an AES-CBC key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-CBC', length: 256 },
    true,
    ['wrapKey', 'unwrapKey'],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(16));

  return window.crypto.subtle.wrapKey(
    'spki',
    keyToWrap,
    wrappingKey,
    { name: 'AES-CBC', iv });
}

/*
Generate an encrypt/decrypt key pair,
then wrap it.
*/
window.crypto.subtle
  .generateKey(
    {
      name: 'RSA-OAEP',
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['encrypt', 'decrypt'],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.publicKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

### JSON Web Key import

This code wraps an ECDSA private signing key. It uses "jwk" as the export format and
AES-GCM, with a password-derived key, to encrypt it.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/jwk.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt('Enter your password');
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey'],
  );
}

/*
Given some key material and some random salt
derive an AES-GCM key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['wrapKey', 'unwrapKey'],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(12));

  return window.crypto.subtle.wrapKey(
    'jwk',
    keyToWrap,
    wrappingKey,
    { name: 'AES-GCM', iv });
}

/*
Generate a sign/verify key pair,
then wrap the private key
*/
window.crypto.subtle
  .generateKey(
    {
      name: 'ECDSA',
      namedCurve: 'P-384',
    },
    true,
    ['sign', 'verify'],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.privateKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS #8 format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key format](https://datatracker.ietf.org/doc/html/rfc7517).
- [AES-KW specification](https://datatracker.ietf.org/doc/html/rfc3394).
