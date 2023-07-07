---
title: "SubtleCrypto: deriveBits() method"
short-title: deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.deriveBits
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`deriveBits()`** method of the
{{domxref("SubtleCrypto")}} interface can be used to derive an array of bits from a base
key.

It takes as its arguments the base key, the derivation algorithm to use, and the length
of the bits to derive. It returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
which will be fulfilled with an
[`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the derived bits.

This method is very similar to
[`SubtleCrypto.deriveKey()`](/en-US/docs/Web/API/SubtleCrypto/deriveKey),
except that `deriveKey()` returns a
[`CryptoKey`](/en-US/docs/Web/API/CryptoKey) object rather than an
`ArrayBuffer`. Essentially `deriveKey()` is composed of
`deriveBits()` followed by
[`importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey).

This function supports the same derivation algorithms as `deriveKey()`:
ECDH, HKDF, and PBKDF2. See [Supported algorithms](/en-US/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms)
for some more detail on these algorithms.

## Syntax

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### Parameters

- `algorithm`
  - : An object defining the [derivation algorithm](/en-US/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) to use.
    - To use [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh), pass an
      [`EcdhKeyDeriveParams`](/en-US/docs/Web/API/EcdhKeyDeriveParams) object.
    - To use [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf), pass
      an [`HkdfParams`](/en-US/docs/Web/API/HkdfParams) object.
    - To use [PBKDF2](/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2),
      pass a [`Pbkdf2Params`](/en-US/docs/Web/API/Pbkdf2Params) object.
- `baseKey`
  - : A {{domxref("CryptoKey")}} representing the input
    to the derivation algorithm. If `algorithm` is ECDH, this will be the ECDH
    private key. Otherwise it will be the initial key material for the derivation
    function: for example, for PBKDF2 it might be a password, imported as a
    `CryptoKey` using [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey).
- `length`
  - : A number representing the number of bits to derive. To be compatible with all browsers, the number should be a multiple of 8.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
that fulfills with an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the derived bits.

### Exceptions

The promise is rejected when one of the following exceptions are encountered:

- `OperationError` {{domxref("DOMException")}}
  - : Raised if the _length_ parameter of the `deriveBits()` call is null, and also in some cases if the _length_ parameter is not a multiple of 8.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the base key is not a key for the requested derivation algorithm or if
    the [`CryptoKey.usages`](/en-US/docs/Web/API/CryptoKey) value of that key doesn't contain
    `deriveBits`.
- `NotSupported` {{domxref("DOMException")}}
  - : Raised when trying to use an algorithm that is either unknown or isn't suitable for
    derivation.

## Supported algorithms

See the [Supported algorithms section of the `deriveKey()` documentation](/en-US/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html) on GitHub.

### ECDH

In this example Alice and Bob each generate an ECDH key pair.

We then use Alice's private key and Bob's public key to derive a shared secret. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)

```js
async function deriveSharedSecret(privateKey, publicKey) {
  const sharedSecret = await window.crypto.subtle.deriveBits(
    {
      name: "ECDH",
      namedCurve: "P-384",
      public: publicKey,
    },
    privateKey,
    128,
  );

  const buffer = new Uint8Array(sharedSecret, 0, 5);
  const sharedSecretValue = document.querySelector(".ecdh .derived-bits-value");
  sharedSecretValue.classList.add("fade-in");
  sharedSecretValue.addEventListener("animationend", () => {
    sharedSecretValue.classList.remove("fade-in");
  });
  sharedSecretValue.textContent = `${buffer}…[${sharedSecret.byteLength} bytes total]`;
}

// Generate 2 ECDH key pairs: one for Alice and one for Bob
// In more normal usage, they would generate their key pairs
// separately and exchange public keys securely
const generateAlicesKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

const generateBobsKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

Promise.all([generateAlicesKeyPair, generateBobsKeyPair]).then((values) => {
  const alicesKeyPair = values[0];
  const bobsKeyPair = values[1];

  const deriveBitsButton = document.querySelector(".ecdh .derive-bits-button");
  deriveBitsButton.addEventListener("click", () => {
    // Alice then generates a secret using her private key and Bob's public key.
    // Bob could generate the same secret using his private key and Alice's public key.
    deriveSharedSecret(alicesKeyPair.privateKey, bobsKeyPair.publicKey);
  });
});
```

### PBKDF2

In this example we ask the user for a password, then use it to derive some bits using
PBKDF2. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)

```js
let salt;

/*
Get some key material to use as input to the deriveBits method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Derive some bits from a password supplied by the user.
*/
async function getDerivedBits() {
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  const buffer = new Uint8Array(derivedBits, 0, 5);
  const derivedBitsValue = document.querySelector(
    ".pbkdf2 .derived-bits-value",
  );
  derivedBitsValue.classList.add("fade-in");
  derivedBitsValue.addEventListener("animationend", () => {
    derivedBitsValue.classList.remove("fade-in");
  });
  derivedBitsValue.textContent = `${buffer}…[${derivedBits.byteLength} bytes total]`;
}

const deriveBitsButton = document.querySelector(".pbkdf2 .derive-bits-button");
deriveBitsButton.addEventListener("click", () => {
  getDerivedBits();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HKDF specification](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST guidelines for password-based key derivation](https://csrc.nist.gov/publications/detail/sp/800-132/final).
- [Password storage cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Advice on choosing an iteration count for PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
