---
title: "SubtleCrypto: decapsulateKey() method"
short-title: decapsulateKey()
slug: Web/API/SubtleCrypto/decapsulateKey
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SubtleCrypto.decapsulateKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`decapsulateKey()`** method of the {{domxref("SubtleCrypto")}} interface uses a key encapsulation algorithm and a private key to recover a shared secret key from a ciphertext.

## Syntax

```js-nolint
decapsulateKey(decapsulationAlgorithm, decapsulationKey, ciphertext, sharedKeyAlgorithm, extractable, keyUsages)
```

### Parameters

- `decapsulationAlgorithm`
  - : A string or an object with a single property named `name`, giving the [encapsulation algorithm](/en-US/docs/Web/API/SubtleCrypto/encapsulateKey#supported_algorithms) to use: `ML-KEM-512`, `ML-KEM-768`, or `ML-KEM-1024`. It must match the algorithm of `decapsulationKey`.
- `decapsulationKey`
  - : A {{domxref("CryptoKey")}} object: the private key of the recipient. Its {{domxref("CryptoKey.usages", "usages")}} must include `decapsulateKey`.
- `ciphertext`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} containing the ciphertext received from the sender.
- `sharedKeyAlgorithm`
  - : A string or an object defining the algorithm the shared key will be used with. It takes the same values as the `sharedKeyAlgorithm` parameter of {{domxref("SubtleCrypto.encapsulateKey()", "encapsulateKey()", "#sharedkeyalgorithm")}}, and should match the one the sender used.
- `extractable`
  - : A boolean value indicating whether it will be possible to export the shared key using {{domxref("SubtleCrypto.exportKey()")}} or {{domxref("SubtleCrypto.wrapKey()")}}.
- `keyUsages`
  - : An {{jsxref("Array")}} of strings indicating what can be done with the shared key. The usages must be valid for `sharedKeyAlgorithm`. See {{domxref("CryptoKey.usages")}} for the possible values.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("CryptoKey")}} object: the shared key, for use with `sharedKeyAlgorithm`.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when `decapsulationKey` isn't a private key, when it isn't a key for `decapsulationAlgorithm`, or when its {{domxref("CryptoKey.usages", "usages")}} don't include `decapsulateKey`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Raised when `decapsulationAlgorithm` isn't a key encapsulation algorithm, or when `sharedKeyAlgorithm` isn't an algorithm that supports importing keys.
- `OperationError` {{domxref("DOMException")}}
  - : Raised when `ciphertext` doesn't have the right length for the algorithm, or when `decapsulationKey` isn't a valid private key for the algorithm.
- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when `keyUsages` contains a usage that isn't valid for `sharedKeyAlgorithm`.

## Description

This method is the recipient's half of key encapsulation. The sender passes the recipient's public key to {{domxref("SubtleCrypto.encapsulateKey()")}} or {{domxref("SubtleCrypto.encapsulateBits()")}}, keeps the shared key it returns, and sends the ciphertext to the recipient. The recipient passes the ciphertext and their private key to `decapsulateKey()`, which returns the same shared key, as a {{domxref("CryptoKey")}}. See `encapsulateKey()` for an explanation of key encapsulation.

If the ciphertext has the right length but wasn't created from the matching public key, or was changed on the way, `decapsulateKey()` doesn't reject: it returns a key that's different from the sender's. The mismatch shows up when the key is used, for example when decrypting a message with [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) fails.

The {{domxref("SubtleCrypto.decapsulateBits()")}} method works the same way, except that it returns the shared secret as an {{jsxref("ArrayBuffer")}} instead of a `CryptoKey`.

## Supported algorithms

See the [Supported algorithms section of the `encapsulateKey()` documentation](/en-US/docs/Web/API/SubtleCrypto/encapsulateKey#supported_algorithms).

## Examples

### Recovering an HMAC key

In this example, Alice generates an ML-KEM key pair and gives her public key to Bob. Bob uses it to create a shared HMAC key and a ciphertext, signs a message with the shared key, and sends the ciphertext, the message, and the signature to Alice. Alice recovers the shared key from the ciphertext with her private key, and verifies the signature.

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
const hmac = { name: "HMAC", hash: "SHA-256" };

async function verifyMessage() {
  // Alice generates a key pair and shares the public key with Bob
  const aliceKeyPair = await crypto.subtle.generateKey(
    { name: "ML-KEM-768" },
    false,
    ["encapsulateKey", "decapsulateKey"],
  );

  // Bob creates a shared key and a ciphertext, and signs a message
  const { sharedKey: bobKey, ciphertext } = await crypto.subtle.encapsulateKey(
    { name: "ML-KEM-768" },
    aliceKeyPair.publicKey,
    hmac,
    false,
    ["sign"],
  );
  const message = new TextEncoder().encode("Meet me at noon");
  const signature = await crypto.subtle.sign(hmac, bobKey, message);

  // Bob sends the ciphertext, the message, and the signature to Alice.
  // Alice recovers the shared key from the ciphertext with her private key
  const aliceKey = await crypto.subtle.decapsulateKey(
    { name: "ML-KEM-768" },
    aliceKeyPair.privateKey,
    ciphertext,
    hmac,
    false,
    ["verify"],
  );

  // Alice verifies the signature
  const valid = await crypto.subtle.verify(hmac, aliceKey, signature, message);
  log(`Signature valid: ${valid}`);
}

verifyMessage().catch((error) => log(error));
```

#### Result

{{EmbedLiveSample("Recovering an HMAC key", "100%", "160px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.encapsulateKey()")}}
- {{domxref("SubtleCrypto.decapsulateBits()")}}
- [FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard](https://csrc.nist.gov/pubs/fips/203/final)
