---
title: SubtleCrypto.deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
page-type: web-api-instance-method
tags:
  - API
  - Crypto
  - Method
  - Reference
  - SubtleCrypto
  - Web
  - deriveKey
browser-compat: api.SubtleCrypto.deriveKey
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`deriveKey()`** method of the {{domxref("SubtleCrypto")}}
interface can be used to derive a secret key from a master key.

It takes as arguments some initial key material, the derivation algorithm to use, and
the desired properties for the key to derive. It returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
which will be fulfilled with a {{domxref("CryptoKey")}} object representing the new key.

It's worth noting that the three key derivation algorithms you can use have quite
different characteristics and are appropriate in quite different situations. See [Supported algorithms](#supported_algorithms) for some more detail on this.

## Syntax

```js
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### Parameters

- `algorithm`
  - : An object defining the [derivation algorithm](#supported_algorithms) to use.
    - To use [ECDH](#ecdh), pass an
      [`EcdhKeyDeriveParams`](/en-US/docs/Web/API/EcdhKeyDeriveParams) object.
    - To use [HKDF](#hkdf), pass
      an [`HkdfParams`](/en-US/docs/Web/API/HkdfParams) object.
    - To use [PBKDF2](#pbkdf2), pass
      a [`Pbkdf2Params`](/en-US/docs/Web/API/Pbkdf2Params) object.
- `baseKey`
  - : A {{domxref("CryptoKey")}} representing the input
    to the derivation algorithm. If `algorithm` is ECDH, then this will be the
    ECDH private key. Otherwise it will be the initial key material for the derivation
    function: for example, for PBKDF2 it might be a password, imported as a
    `CryptoKey` using
    [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey).
- `derivedKeyAlgorithm`
  - : An object defining the algorithm the derived key will be used for.
    - For [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac): pass an
      [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) object.
    - For [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw): pass an
      [`AesKeyGenParams`](/en-US/docs/Web/API/AesKeyGenParams) object.
- `extractable`
  - : A boolean value indicating whether it
    will be possible to export the key using {{domxref("SubtleCrypto.exportKey()")}} or
    {{domxref("SubtleCrypto.wrapKey()")}}.
- `keyUsages`
  - : An {{jsxref("Array")}} indicating what can be
    done with the derived key. Note that the key usages must be allowed by the algorithm
    set in `derivedKeyAlgorithm`. Possible values of the array are:
    - `encrypt`: The key may be used to {{domxref("SubtleCrypto.encrypt()", "encrypt")}} messages.
    - `decrypt`: The key may be used to {{domxref("SubtleCrypto.decrypt()", "decrypt")}} messages.
    - `sign`: The key may be used to {{domxref("SubtleCrypto.sign()", "sign")}} messages.
    - `verify`: The key may be used to {{domxref("SubtleCrypto.verify()", "verify")}} signatures.
    - `deriveKey`: The key may be used in {{domxref("SubtleCrypto.deriveKey()", "deriving a new key")}}.
    - `deriveBits`: The key may be used in {{domxref("SubtleCrypto.deriveBits()", "deriving bits")}}.
    - `wrapKey`: The key may be used to {{domxref("SubtleCrypto.wrapKey()", "wrap a key")}}.
    - `unwrapKey`: The key may be used to {{domxref("SubtleCrypto.unwrapKey()", "unwrap a key")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("CryptoKey")}}.

### Exceptions

The promise is rejected when one of the following exceptions are encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the master key is not a key for the requested derivation algorithm
    or if the `keyUsages` value of that key doesn't contain `deriveKey`.
- `NotSupported` {{domxref("DOMException")}}
  - : Raised when trying to use an algorithm that is either unknown or isn't suitable for
    derivation, or if the algorithm requested for the derived key doesn't define a key
    length.
- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when `keyUsages` is empty but the unwrapped key is of
    type `secret` or `private`.

## Supported algorithms

The three algorithms supported by `deriveKey()` have quite different
characteristics and are appropriate in different situations.

### ECDH

ECDH (Elliptic Curve Diffie-Hellman) is a _key-agreement algorithm_. It enables
two people who each have an ECDH public/private key pair to generate a shared secret:
that is, a secret that they — and no one else — share. They can then use this shared
secret as a symmetric key to secure their communication, or can use the secret as an
input to derive such a key (for example, using the HKDF algorithm).

ECDH is specified in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090).

### HKDF

HKDF is a _key derivation function_. It's designed to derive key material from
some high-entropy input, such as the output of an ECDH key agreement operation.

It's _not_ designed to derive keys from relatively low-entropy inputs such as
passwords. For that, use PBKDF2.

HKDF is specified in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869).

### PBKDF2

PBKDF2 is also a _key derivation function_. It's designed to derive key material
from some relatively low-entropy input, such as a password. It derives key material by
applying a function such as HMAC to the input password along with some salt, and
repeating this process many times. The more times the process is repeated, the more
computationally expensive key derivation is: this makes it harder for an attacker to use
brute-force to discover the key using a dictionary attack.

PBKDF2 is specified in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898).

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html) on GitHub.

### ECDH

In this example Alice and Bob each generate an ECDH key pair, then exchange public
keys. They then use `deriveKey()` to derive a shared AES key, that they could
use to encrypt messages. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
Derive an AES key, given:
- our ECDH private key
- their ECDH public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "ECDH",
      public: publicKey
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256
    },
    false,
    ["encrypt", "decrypt"]
  );
}

async function agreeSharedSecretKey() {
  // Generate 2 ECDH key pairs: one for Alice and one for Bob
  // In more normal usage, they would generate their key pairs
  // separately and exchange public keys securely
  let alicesKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384"
    },
    false,
    ["deriveKey"]
  );

  let bobsKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384"
    },
    false,
    ["deriveKey"]
  );

  // Alice then generates a secret key using her private key and Bob's public key.
  let alicesSecretKey = await deriveSecretKey(alicesKeyPair.privateKey, bobsKeyPair.publicKey);

  // Bob generates the same secret key using his private key and Alice's public key.
  let bobsSecretKey = await deriveSecretKey(bobsKeyPair.privateKey, alicesKeyPair.publicKey);

  // Alice can then use her copy of the secret key to encrypt a message to Bob.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(alicesSecretKey);
  });

  // Bob can use his copy to decrypt the message.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobsSecretKey);
  });
}
```

### PBKDF2

In this example we ask the user for a password, then use it to derive an AES key using
PBKDF2, then use the AES key to encrypt a message.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );
}

async function encrypt(plaintext, salt, iv) {
  const keyMaterial = await getKeyMaterial();
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { "name": "AES-GCM", "length": 256},
    true,
    ["encrypt", "decrypt"],
  );

  return window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    plaintext,
  );
}
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
