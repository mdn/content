---
title: "SubtleCrypto: decapsulateBits() method"
short-title: decapsulateBits()
slug: Web/API/SubtleCrypto/decapsulateBits
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SubtleCrypto.decapsulateBits
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`decapsulateBits()`** method of the {{domxref("SubtleCrypto")}} interface uses a key encapsulation algorithm and a private key to recover a shared secret from a ciphertext.

## Syntax

```js-nolint
decapsulateBits(decapsulationAlgorithm, decapsulationKey, ciphertext)
```

### Parameters

- `decapsulationAlgorithm`
  - : A string or an object with a single property named `name`, giving the [encapsulation algorithm](/en-US/docs/Web/API/SubtleCrypto/encapsulateKey#supported_algorithms) to use: `ML-KEM-512`, `ML-KEM-768`, or `ML-KEM-1024`. It must match the algorithm of `decapsulationKey`.
- `decapsulationKey`
  - : A {{domxref("CryptoKey")}} object: the private key of the recipient. Its {{domxref("CryptoKey.usages", "usages")}} must include `decapsulateBits`.
- `ciphertext`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} containing the ciphertext received from the sender.

### Return value

A {{jsxref("Promise")}} that fulfills with an {{jsxref("ArrayBuffer")}} containing the shared secret. For ML-KEM, it's 32 bytes long.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when `decapsulationKey` isn't a private key, when it isn't a key for `decapsulationAlgorithm`, or when its {{domxref("CryptoKey.usages", "usages")}} don't include `decapsulateBits`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Raised when `decapsulationAlgorithm` isn't a key encapsulation algorithm.
- `OperationError` {{domxref("DOMException")}}
  - : Raised when `ciphertext` doesn't have the right length for the algorithm, or when `decapsulationKey` isn't a valid private key for the algorithm.

## Description

This method works like {{domxref("SubtleCrypto.decapsulateKey()")}}, except that it returns the shared secret as an {{jsxref("ArrayBuffer")}} instead of a {{domxref("CryptoKey")}}. See {{domxref("SubtleCrypto.encapsulateKey()")}} for an explanation of key encapsulation. The sender creates the ciphertext with {{domxref("SubtleCrypto.encapsulateBits()")}} or `encapsulateKey()`.

If the ciphertext has the right length but wasn't created from the matching public key, or was changed on the way, `decapsulateBits()` doesn't reject: it returns a secret that's different from the sender's.

## Supported algorithms

See the [Supported algorithms section of the `encapsulateKey()` documentation](/en-US/docs/Web/API/SubtleCrypto/encapsulateKey#supported_algorithms).

## Examples

### Deriving a key from the shared secret

In this example, Alice generates an ML-KEM key pair and gives her public key to Bob. Bob uses it to create a shared secret and a ciphertext, and sends the ciphertext to Alice. Alice recovers the shared secret with her private key, then imports it as [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf) key material and derives an AES-GCM key from it. Bob can derive the same AES-GCM key from his copy of the secret, using the same HKDF parameters.

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
async function deriveSharedKey() {
  // Alice generates a key pair and shares the public key with Bob
  const aliceKeyPair = await crypto.subtle.generateKey(
    { name: "ML-KEM-768" },
    false,
    ["encapsulateBits", "decapsulateBits"],
  );

  // Bob creates a shared secret and a ciphertext, and sends the ciphertext
  const { ciphertext } = await crypto.subtle.encapsulateBits(
    { name: "ML-KEM-768" },
    aliceKeyPair.publicKey,
  );

  // Alice recovers the shared secret
  const secret = await crypto.subtle.decapsulateBits(
    { name: "ML-KEM-768" },
    aliceKeyPair.privateKey,
    ciphertext,
  );
  log(`Shared secret: ${secret.byteLength} bytes`);

  // Alice derives an AES-GCM key from the shared secret
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    secret,
    "HKDF",
    false,
    ["deriveKey"],
  );
  const key = await crypto.subtle.deriveKey(
    {
      name: "HKDF",
      hash: "SHA-256",
      salt: new Uint8Array(),
      info: new TextEncoder().encode("chat session"),
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
  log(`Derived key: ${key.algorithm.name}, ${key.algorithm.length} bits`);
}

deriveSharedKey().catch((error) => log(error));
```

#### Result

{{EmbedLiveSample("Deriving a key from the shared secret", "100%", "160px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.encapsulateBits()")}}
- {{domxref("SubtleCrypto.decapsulateKey()")}}
- [FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard](https://csrc.nist.gov/pubs/fips/203/final)
