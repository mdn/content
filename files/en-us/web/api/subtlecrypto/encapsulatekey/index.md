---
title: "SubtleCrypto: encapsulateKey() method"
short-title: encapsulateKey()
slug: Web/API/SubtleCrypto/encapsulateKey
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SubtleCrypto.encapsulateKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`encapsulateKey()`** method of the {{domxref("SubtleCrypto")}} interface uses a key encapsulation algorithm and a public key to create a new shared secret key, along with a ciphertext that lets the owner of the matching private key recover the same key.

## Syntax

```js-nolint
encapsulateKey(encapsulationAlgorithm, encapsulationKey, sharedKeyAlgorithm, extractable, keyUsages)
```

### Parameters

- `encapsulationAlgorithm`
  - : A string or an object with a single property named `name`, giving the [encapsulation algorithm](#supported_algorithms) to use: `ML-KEM-512`, `ML-KEM-768`, or `ML-KEM-1024`. It must match the algorithm of `encapsulationKey`.
- `encapsulationKey`
  - : A {{domxref("CryptoKey")}} object: the public key of the recipient. Its {{domxref("CryptoKey.usages", "usages")}} must include `encapsulateKey`.
- `sharedKeyAlgorithm`
  - : A string or an object defining the algorithm the shared key will be used with, in the same form as the `algorithm` parameter of {{domxref("SubtleCrypto.importKey()")}}. With ML-KEM, the shared key is 256 bits long, so the algorithm must accept a key of this length. For example:
    - For [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw): pass the algorithm name as a string, or an object of the form `{ name: "AES-GCM" }`. The result is a 256-bit AES key.
    - For [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac): pass an [`HmacImportParams`](/en-US/docs/Web/API/HmacImportParams) object.
    - For [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf): pass the string `HKDF` or an object of the form `{ name: "HKDF" }`, to derive further keys from the shared key.
- `extractable`
  - : A boolean value indicating whether it will be possible to export the shared key using {{domxref("SubtleCrypto.exportKey()")}} or {{domxref("SubtleCrypto.wrapKey()")}}.
- `keyUsages`
  - : An {{jsxref("Array")}} of strings indicating what can be done with the shared key. The usages must be valid for `sharedKeyAlgorithm`. See {{domxref("CryptoKey.usages")}} for the possible values.

### Return value

A {{jsxref("Promise")}} that fulfills with an object with the following properties:

- `sharedKey`
  - : A {{domxref("CryptoKey")}} object: the new shared key, for use with `sharedKeyAlgorithm`.
- `ciphertext`
  - : An {{jsxref("ArrayBuffer")}} containing the ciphertext to send to the recipient.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when `encapsulationKey` isn't a public key, when it isn't a key for `encapsulationAlgorithm`, or when its {{domxref("CryptoKey.usages", "usages")}} don't include `encapsulateKey`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Raised when `encapsulationAlgorithm` isn't a key encapsulation algorithm, or when `sharedKeyAlgorithm` isn't an algorithm that supports importing keys.
- `OperationError` {{domxref("DOMException")}}
  - : Raised when `encapsulationKey` isn't a valid public key for the algorithm.
- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when `keyUsages` contains a usage that isn't valid for `sharedKeyAlgorithm`.

## Description

A _key encapsulation mechanism_ (KEM) lets two parties agree on a shared secret key, which they can then use with a {{Glossary("Symmetric-key cryptography", "symmetric algorithm")}} such as [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) to protect their communication.

The recipient generates a {{Glossary("Public-key cryptography", "key pair")}} and shares their public key. The sender passes that public key to `encapsulateKey()`, which returns two things: a new shared key, as a {{domxref("CryptoKey")}}, and a {{Glossary("ciphertext")}}. The sender keeps the shared key and sends the ciphertext to the recipient. The recipient passes the ciphertext and their private key to {{domxref("SubtleCrypto.decapsulateKey()")}}, which returns the same shared key. Only the holder of the private key can recover the shared key from the ciphertext, so the ciphertext can be sent over an insecure channel.

The shared key is created at random by the algorithm: the sender doesn't choose it. Each call to `encapsulateKey()` returns a different shared key and ciphertext, even for the same public key.

The {{domxref("SubtleCrypto.encapsulateBits()")}} method works the same way, except that it returns the shared secret as an {{jsxref("ArrayBuffer")}} instead of a `CryptoKey`.

## Supported algorithms

### ML-KEM

ML-KEM (Module-Lattice-Based Key-Encapsulation Mechanism) is a key encapsulation algorithm designed to stay secure against attacks by quantum computers, unlike key agreement algorithms such as [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) and [X25519](/en-US/docs/Web/API/SubtleCrypto/deriveKey#x25519). It's specified in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final).

There are three parameter sets, each with its own algorithm name. They trade key and ciphertext size for security strength:

| Algorithm name | Security category | Public key size | Ciphertext size |
| -------------- | ----------------- | --------------- | --------------- |
| `ML-KEM-512`   | 1                 | 800 bytes       | 768 bytes       |
| `ML-KEM-768`   | 3                 | 1184 bytes      | 1088 bytes      |
| `ML-KEM-1024`  | 5                 | 1568 bytes      | 1568 bytes      |

The security categories are defined by NIST: category 1 is comparable to AES-128, category 3 to AES-192, and category 5 to AES-256. `ML-KEM-768` is the recommended default. With all three, the shared key is 32 bytes (256 bits) long.

The algorithm takes no parameters other than its name. To create an ML-KEM key pair, pass the algorithm name to {{domxref("SubtleCrypto.generateKey()")}}. The public key can have the `encapsulateKey` and `encapsulateBits` usages, and the private key can have the `decapsulateKey` and `decapsulateBits` usages. ML-KEM keys can be exported and imported in the `spki`, `pkcs8`, `raw-public`, `raw-seed`, and `jwk` formats: see {{domxref("SubtleCrypto.importKey()")}} for details.

## Examples

### Agreeing on an AES-GCM key

In this example, Alice generates an ML-KEM key pair and gives her public key to Bob. Bob uses Alice's public key to create a shared AES-GCM key and a ciphertext, encrypts a message with the shared key, and sends the ciphertext and the encrypted message to Alice. Alice recovers the shared key from the ciphertext with her private key, and decrypts the message.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 120px;
  white-space: pre-wrap;
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

```js
async function agreeOnKey() {
  // Alice generates a key pair and shares the public key with Bob
  const aliceKeyPair = await crypto.subtle.generateKey(
    { name: "ML-KEM-768" },
    false,
    ["encapsulateKey", "decapsulateKey"],
  );

  // Bob creates a shared key and a ciphertext from Alice's public key
  const { sharedKey: bobKey, ciphertext } = await crypto.subtle.encapsulateKey(
    { name: "ML-KEM-768" },
    aliceKeyPair.publicKey,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
  log(`Ciphertext: ${ciphertext.byteLength} bytes`);

  // Bob encrypts a message with the shared key
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    bobKey,
    new TextEncoder().encode("Hello, Alice!"),
  );

  // Bob sends the ciphertext, the IV, and the encrypted message to Alice.
  // Alice recovers the shared key from the ciphertext with her private key
  const aliceKey = await crypto.subtle.decapsulateKey(
    { name: "ML-KEM-768" },
    aliceKeyPair.privateKey,
    ciphertext,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );

  // Alice decrypts the message
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    aliceKey,
    encrypted,
  );
  log(`Decrypted message: ${new TextDecoder().decode(decrypted)}`);
}

agreeOnKey().catch((error) => log(error));
```

#### Result

{{EmbedLiveSample("Agreeing on an AES-GCM key", "100%", "160px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.decapsulateKey()")}}
- {{domxref("SubtleCrypto.encapsulateBits()")}}
- [FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard](https://csrc.nist.gov/pubs/fips/203/final)
