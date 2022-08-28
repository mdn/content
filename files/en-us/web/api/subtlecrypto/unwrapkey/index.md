---
title: SubtleCrypto.unwrapKey()
slug: Web/API/SubtleCrypto/unwrapKey
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - SubtleCrypto
  - Web Crypto API
  - unwrapKey
browser-compat: api.SubtleCrypto.unwrapKey
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`unwrapKey()`** method of the {{domxref("SubtleCrypto")}}
interface "unwraps" a key. This means that it takes as its input a key that has been
exported and then encrypted (also called "wrapped"). It decrypts the key and then
imports it, returning a {{domxref("CryptoKey")}} object that can be used in the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API).

As with [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey),
you specify the key's [import format](/en-US/docs/Web/API/SubtleCrypto/importKey#supported_formats)
and other attributes of the key to import details such as whether it is extractable, and
which operations it can be used for.

But because `unwrapKey()` also decrypts the key to be imported, you also
need to pass in the key that must be used to decrypt it. This is sometimes called the
"unwrapping key".

The inverse of `unwrapKey()` is {{domxref("SubtleCrypto.wrapKey()")}}: while
`unwrapKey` is composed of decrypt + import, `wrapKey` is composed
of encrypt + export.

## Syntax

```js
unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages)
```

### Parameters

- `format`
  - : A string describing the data format of the key to unwrap. It can be one of the following:
    - `raw`: [Raw](/en-US/docs/Web/API/SubtleCrypto/importKey#raw) format.
    - `pkcs8`: [PKCS #8](/en-US/docs/Web/API/SubtleCrypto/importKey#pkcs_8) format.
    - `spki`: [SubjectPublicKeyInfo](/en-US/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) format.
    - `jwk`: [JSON Web Key](/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format.
- `wrappedKey`
  - : An {{jsxref("ArrayBuffer")}} containing the wrapped key in the given format.
- `unwrappingKey`
  - : The {{domxref("CryptoKey")}} to use to decrypt the wrapped key. The key must have the `unwrapKey` usage set.
- `unwrapAlgo`
  - : An object specifying the [algorithm](/en-US/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms)
    to be used to encrypt the exported key, and any extra parameters as required:
    - To use [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep),
      pass an [`RsaOaepParams`](/en-US/docs/Web/API/RsaOaepParams) object.
    - To use [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr),
      pass an [`AesCtrParams`](/en-US/docs/Web/API/AesCtrParams) object.
    - To use [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      pass an [`AesCbcParams`](/en-US/docs/Web/API/AesCbcParams) object.
    - To use [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm),
      pass an [`AesGcmParams`](/en-US/docs/Web/API/AesGcmParams) object.
    - To use [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw),
      pass the string `"AES-KW"` or an object of the form `{ "name": "AES-KW }`.
- `unwrappedKeyAlgo`
  - : An object defining the type of key to unwrap and providing extra algorithm-specific parameters as required.
    - For [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      Pass an [`RsaHashedImportParams`](/en-US/docs/Web/API/RsaHashedImportParams) object.
    - For [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh): Pass
      an [`EcKeyImportParams`](/en-US/docs/Web/API/EcKeyImportParams) object.
    - For [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac): Pass an
      [`HmacImportParams`](/en-US/docs/Web/API/HmacImportParams) object.
    - For [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      Pass the string identifying the algorithm or an object of the form `{ "name": ALGORITHM }`, where `ALGORITHM` is the name of
      the algorithm.
- `extractable`
  - : A boolean indicating whether it will be possible to export the key
    using [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey) or [`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey).
- `keyUsages`
  - : An [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) indicating what can be done with the key. Possible values of the array are:
    - `encrypt`: The key may be used to [`encrypt`](/en-US/docs/Web/API/SubtleCrypto/encrypt) messages.
    - `decrypt`: The key may be used to [`decrypt`](/en-US/docs/Web/API/SubtleCrypto/decrypt) messages.
    - `sign`: The key may be used to [`sign`](/en-US/docs/Web/API/SubtleCrypto/sign) messages.
    - `verify`: The key may be used to [`verify`](/en-US/docs/Web/API/SubtleCrypto/verify) signatures.
    - `deriveKey`: The key may be used in [`deriving a new key`](/en-US/docs/Web/API/SubtleCrypto/deriveKey).
    - `deriveBits`: The key may be used in [`deriving bits`](/en-US/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`: The key may be used to [`wrap a key`](/en-US/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: The key may be used to unwrap a key.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  that fulfills with the unwrapped key as a [`CryptoKey`](/en-US/docs/Web/API/CryptoKey)
  object.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the unwrapping key is not a key for the requested unwrap algorithm or if
    the `keyUsages` value of that key doesn't contain `unwrap`.
- `NotSupported` {{domxref("DOMException")}}
  - : Raised when trying to use an algorithm that is either unknown or isn't suitable for
    encryption or wrapping.
- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when `keyUsages` is empty but the unwrapped key is of type `secret` or `private`.
- {{jsxref("TypeError")}}
  - : Raised when trying to use an invalid format.

## Supported algorithms

The `unwrapKey()` method supports the same algorithms as the
[`wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey#supported_algorithms)
method.

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/unwrap-key/index.html) on GitHub.

### Unwrapping a "raw" key

In this example we unwrap an AES-GCM symmetric key. The key was exported in "raw"
format and encrypted using the AES-KW algorithm, with a key derived from a password.

To unwrap, we ask the user for the password and use PBKDF2 and some salt to derive the
AES-KW unwrapping key. The salt needs to be the same as the salt that was used to derive
the original AES-KW key wrapping key.

Once we have the unwrapping key we pass it into `unwrapKey()` with the
wrapped key and other parameters. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/unwrap-key/raw.js)

```js
/*
Salt that is to be used in derivation of the key-wrapping key,
alongside the password the user supplies.
This must match the salt value that was originally used to derive
the key.
*/
const saltBytes = [89,113,135,234,168,204,21,36,55,93,1,132,242,242,192,156];

/*
The wrapped key itself.
*/
const wrappedKeyBytes = [171,223,14,36,201,233,233,120,164,68,217,192,226,80,
    224,39,199,235,239,60,212,169,100,23,61,54,244,197,160,80,109,230,207,
    225,57,197,175,71,80,209];

/*
Convert an array of byte values to an ArrayBuffer.
*/
function bytesToArrayBuffer(bytes) {
  const bytesAsArrayBuffer = new ArrayBuffer(bytes.length);
  const bytesUint8 = new Uint8Array(bytesAsArrayBuffer);
  bytesUint8.set(bytes);
  return bytesAsArrayBuffer;
}

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  let password = window.prompt("Enter your password");
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    {name: "PBKDF2"},
    false,
    ["deriveBits", "deriveKey"]
  );
}

/*
Derive an AES-KW key using PBKDF2.
*/
async function getUnwrappingKey() {
  // 1. get the key material (user-supplied password)
  const keyMaterial = await getKeyMaterial();
  // 2 initialize the salt parameter.
  // The salt must match the salt originally used to derive the key.
  // In this example it's supplied as a constant "saltBytes".
  const saltBuffer = bytesToArrayBuffer(saltBytes);
  // 3 derive the key from key material and salt
  return window.crypto.subtle.deriveKey(
    {
      "name": "PBKDF2",
      salt: saltBuffer,
      "iterations": 100000,
      "hash": "SHA-256"
    },
    keyMaterial,
    { "name": "AES-KW", "length": 256},
    true,
    [ "wrapKey", "unwrapKey" ]
  );
}

/*
Unwrap an AES secret key from an ArrayBuffer containing the raw bytes.
Takes an array containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the secret key.
*/
async function unwrapSecretKey(wrappedKey) {
  // 1. get the unwrapping key
  const unwrappingKey = await getUnwrappingKey();
  // 2. initialize the wrapped key
  const wrappedKeyBuffer = bytesToArrayBuffer(wrappedKey);
  // 3. unwrap the key
  return window.crypto.subtle.unwrapKey(
    "raw",                 // import format
    wrappedKeyBuffer,      // ArrayBuffer representing key to unwrap
    unwrappingKey,         // CryptoKey representing key encryption key
    "AES-KW",              // algorithm identifier for key encryption key
    "AES-GCM",             // algorithm identifier for key to unwrap
    true,                  // extractability of key to unwrap
    ["encrypt", "decrypt"] // key usages for key to unwrap
  );
}
```

### Unwrapping a "pkcs8" key

In this example we unwrap an RSA-PSS private signing key. The key was exported in
"pkcs8" format and encrypted using the AES-GCM algorithm, with a key derived from a
password.

To unwrap, we ask the user for the password and use PBKDF2 and some salt to derive the
AES-GCM unwrapping key. The salt needs to be the same as the salt that was used to
derive the original AES-GCM key wrapping key.

Once we have the unwrapping key we pass it into `unwrapKey()` with the
wrapped key and other parameters. Note that when using AES-GCM we have to pass the iv
value into `unwrapKey()`, and this must be the same as the iv that was used
in the corresponding `wrapKey()` operation. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/unwrap-key/pkcs8.js)

```js
/*
Salt that is to be used in derivation of the key-wrapping key,
alongside the password the user supplies.
This must match the salt value that was originally used to derive
the key.
*/
const saltBytes = [180,253,62,216,47,35,90,55,218,233,103,10,172,143,161,177];

/*
IV that is to be used in decrypting the key to unwrap.
This must the same IV that was originally used to encrypt
the key.
*/
const ivBytes = [212,187,26,247,172,51,37,151,27,177,249,142];

/*
The wrapped key itself.
*/
const wrappedKeyBytes = [6,155,182,208,7,141,44,18,3,151,58,126,68,100,252,
  225,241,11,25,201,153,171,102,174,150,29,62,195,110,138,106,109,14,6,108,
  148,104,221,22,93,102,221,146,25,65,112,4,140,79,194,164,163,156,250,108,
  11,14,220,78,194,161,17,14,57,121,70,13,28,220,210,78,32,46,217,36,165,220,
  170,244,152,214,150,83,2,138,128,11,251,227,213,72,100,158,10,162,40,195,
  60,248,77,37,156,34,10,213,171,67,147,73,231,31,63,80,176,103,206,187,164,
  214,250,49,223,185,5,48,241,17,1,253,59,185,181,209,255,42,223,175,90,159,
  174,169,205,156,120,195,1,135,165,226,46,119,27,97,183,23,197,227,85,138,
  235,79,158,167,59,62,194,34,210,214,240,215,101,233,63,138,53,87,253,189,
  27,66,150,76,242,76,102,174,179,163,184,205,11,161,224,19,110,34,175,192,
  101,117,169,86,66,56,241,128,13,156,165,125,139,110,138,50,108,129,251,137,
  26,186,110,117,113,207,179,59,213,18,175,14,203,192,2,97,131,125,167,227,
  182,87,72,123,54,156,60,195,88,224,96,46,126,245,251,247,147,110,147,173,
  82,106,93,210,55,71,127,133,41,37,181,17,106,16,158,220,136,43,75,133,96,
  240,151,116,40,44,254,2,32,74,226,193,172,48,211,71,109,163,143,30,92,28,
  30,183,25,16,176,207,77,93,139,242,114,91,218,126,123,234,18,9,245,53,46,
  172,215,62,92,249,191,17,27,0,58,151,33,23,169,93,177,253,152,147,198,196,
  226,42,202,166,99,250,127,40,221,196,121,195,198,235,30,159,159,95,182,107,
  175,137,177,49,72,63,131,162,198,186,22,255,230,237,195,56,147,177,101,52,
  227,125,32,180,242,47,92,212,6,148,218,107,125,137,123,15,51,107,159,228,
  238,212,60,54,184,48,110,248,252,208,46,23,149,78,169,201,68,242,193,251,
  156,227,42,90,109,102,172,61,207,124,96,98,79,37,218,16,212,139,162,0,183,
  235,171,75,18,84,160,120,173,156,187,99,24,58,88,213,148,24,193,111,75,169,
  10,158,207,148,84,249,156,248,19,221,2,175,1,8,74,221,212,244,123,34,223,
  175,54,166,101,51,175,141,80,87,9,146,72,223,46,251,199,192,2,22,125,16,15,
  99,26,159,165,133,172,169,26,236,44,86,182,162,81,143,249,15,207,12,232,15,
  205,199,78,133,199,19,232,183,33,183,72,117,72,27,43,254,13,17,252,1,143,
  137,154,10,4,77,85,24,85,143,200,81,76,171,43,124,42,191,150,70,10,90,178,
  198,40,233,233,225,146,231,209,254,2,90,216,5,97,105,204,82,88,81,99,92,
  159,116,192,223,148,252,12,24,197,211,187,212,98,252,201,154,184,65,54,47,
  13,106,151,168,208,112,212,74,204,36,233,98,104,58,103,1,194,13,26,109,101,
  60,42,3,215,20,25,99,176,63,28,112,102,121,190,96,198,228,196,78,38,82,37,
  248,42,150,115,6,10,22,101,42,237,175,69,232,212,231,40,193,70,211,245,106,
  231,175,150,88,105,170,139,238,196,64,218,250,47,165,22,36,196,161,30,79,
  175,14,133,88,129,182,56,140,147,168,134,91,68,172,110,195,134,156,68,78,
  249,215,68,250,11,23,70,59,156,99,75,249,159,84,16,206,93,16,130,34,66,210,
  82,252,53,251,84,59,226,212,154,15,20,163,58,228,109,53,214,151,237,10,169,
  107,180,123,174,159,182,8,240,115,115,220,131,128,79,80,61,133,58,24,98,
  193,225,56,36,159,254,199,49,44,160,28,81,140,163,24,143,114,31,237,235,
  250,83,72,215,44,232,182,45,39,182,193,248,65,174,186,52,219,30,198,48,1,
  134,151,81,114,38,124,7,213,205,138,28,22,216,76,46,224,241,88,156,7,62,
  23,104,34,54,25,156,93,212,133,182,61,93,255,195,68,244,234,53,132,151,140,
  72,146,127,113,227,34,243,218,222,47,218,113,18,173,203,158,133,90,156,214,
  77,20,113,1,231,164,52,55,69,132,24,68,131,212,7,153,34,179,113,156,81,
  127,83,57,29,195,90,64,211,115,202,188,5,42,188,142,203,109,231,53,206,72,
  220,90,23,12,1,178,122,60,221,68,6,14,154,108,203,171,142,159,249,13,55,52,
  110,214,33,147,164,181,50,79,164,200,83,251,40,105,223,50,0,115,240,146,23,
  122,80,204,169,38,198,154,31,29,23,236,39,35,131,147,242,163,138,158,236,
  117,7,108,33,132,98,50,111,46,146,251,82,34,85,5,130,237,67,40,170,235,124,
  92,66,71,239,12,97,136,251,1,206,13,51,232,92,46,35,95,5,123,24,183,99,243,
  124,75,155,89,66,54,72,17,255,99,137,199,232,204,9,248,78,35,218,136,117,
  239,102,240,187,40,89,244,140,109,229,120,116,54,207,171,11,248,190,199,81,
  53,109,8,188,51,93,165,34,255,165,191,198,130,220,41,192,166,194,69,104,
  124,158,122,236,176,24,60,87,240,42,158,143,37,143,208,155,249,230,21,4,
  230,56,194,62,235,132,14,50,180,216,134,28,25,159,64,199,161,236,60,233,
  160,172,68,169,2,5,252,190,20,54,115,248,63,93,107,156,8,96,85,32,189,118,
  66,114,126,64,203,97,235,13,18,102,192,51,59,5,122,171,96,129,40,32,154,4,
  191,234,75,184,112,201,244,110,50,216,44,88,139,175,58,112,7,52,25,64,112,
  40,148,187,39,234,96,151,16,158,114,113,109,164,47,108,94,148,35,232,221,
  33,110,126,170,25,234,45,165,180,210,193,120,247,155,127];

/*
The unwrapped signing key.
*/
let signingKey;

const signButton = document.querySelector(".pkcs8 .sign-button");

/*
Convert an array of byte values to an ArrayBuffer.
*/
function bytesToArrayBuffer(bytes) {
  const bytesAsArrayBuffer = new ArrayBuffer(bytes.length);
  const bytesUint8 = new Uint8Array(bytesAsArrayBuffer);
  bytesUint8.set(bytes);
  return bytesAsArrayBuffer;
}

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  let password = window.prompt("Enter your password");
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    {name: "PBKDF2"},
    false,
    ["deriveBits", "deriveKey"]
  );
}

/*
Derive an AES-GCM key using PBKDF2.
*/
async function getUnwrappingKey() {
  // 1. get the key material (user-supplied password)
  const keyMaterial = await getKeyMaterial();
  // 2 initialize the salt parameter.
  // The salt must match the salt originally used to derive the key.
  // In this example it's supplied as a constant "saltBytes".
  const saltBuffer = bytesToArrayBuffer(saltBytes);
  // 3 derive the key from key material and salt
  return window.crypto.subtle.deriveKey(
    {
      "name": "PBKDF2",
      salt: saltBuffer,
      "iterations": 100000,
      "hash": "SHA-256"
    },
    keyMaterial,
    { "name": "AES-GCM", "length": 256},
    true,
    [ "wrapKey", "unwrapKey" ]
  );
}

/*
Unwrap an RSA-PSS private signing key from an ArrayBuffer containing
the raw bytes.
Takes an array containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
async function unwrapPrivateKey(wrappedKey) {
  // 1. get the unwrapping key
  const unwrappingKey = await getUnwrappingKey();
  // 2. initialize the wrapped key
  const wrappedKeyBuffer = bytesToArrayBuffer(wrappedKey);
  // 3. initialize the iv
  const ivBuffer = bytesToArrayBuffer(ivBytes);
  // 4. unwrap the key
  return window.crypto.subtle.unwrapKey(
    "pkcs8",               // import format
    wrappedKeyBuffer,      // ArrayBuffer representing key to unwrap
    unwrappingKey,         // CryptoKey representing key encryption key
    {                      // algorithm params for key encryption key
      name: "AES-GCM",
      iv: ivBuffer
    },
    {                      // algorithm params for key to unwrap
      name: "RSA-PSS",
      hash: "SHA-256"
    },
    true,                  // extractability of key to unwrap
    ["sign"]               // key usages for key to unwrap
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8 format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key format](https://datatracker.ietf.org/doc/html/rfc7517).
- [AES-KW specification](https://datatracker.ietf.org/doc/html/rfc3394).
