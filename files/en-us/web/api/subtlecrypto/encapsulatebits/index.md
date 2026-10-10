---
title: "SubtleCrypto: encapsulateBits() method"
short-title: encapsulateBits()
slug: Web/API/SubtleCrypto/encapsulateBits
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SubtleCrypto.encapsulateBits
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`encapsulateBits()`** method of the {{domxref("SubtleCrypto")}} interface uses a key encapsulation algorithm and a public key to create a new shared secret, along with a ciphertext that lets the owner of the matching private key recover the same secret.

## Syntax

```js-nolint
encapsulateBits(encapsulationAlgorithm, encapsulationKey)
```

### Parameters

- `encapsulationAlgorithm`
  - : A string or an object with a single property named `name`, giving the [encapsulation algorithm](/en-US/docs/Web/API/SubtleCrypto/encapsulateKey#supported_algorithms) to use: `ML-KEM-512`, `ML-KEM-768`, or `ML-KEM-1024`. It must match the algorithm of `encapsulationKey`.
- `encapsulationKey`
  - : A {{domxref("CryptoKey")}} object: the public key of the recipient. Its {{domxref("CryptoKey.usages", "usages")}} must include `encapsulateBits`.

### Return value

A {{jsxref("Promise")}} that fulfills with an object with the following properties:

- `sharedKey`
  - : An {{jsxref("ArrayBuffer")}} containing the shared secret. For ML-KEM, it's 32 bytes long.
- `ciphertext`
  - : An {{jsxref("ArrayBuffer")}} containing the ciphertext to send to the recipient.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when `encapsulationKey` isn't a public key, when it isn't a key for `encapsulationAlgorithm`, or when its {{domxref("CryptoKey.usages", "usages")}} don't include `encapsulateBits`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Raised when `encapsulationAlgorithm` isn't a key encapsulation algorithm.
- `OperationError` {{domxref("DOMException")}}
  - : Raised when `encapsulationKey` isn't a valid public key for the algorithm.

## Description

This method works like {{domxref("SubtleCrypto.encapsulateKey()")}}, except that it returns the shared secret as an {{jsxref("ArrayBuffer")}} instead of a {{domxref("CryptoKey")}}. See `encapsulateKey()` for an explanation of key encapsulation. The recipient recovers the shared secret by passing the ciphertext and their private key to {{domxref("SubtleCrypto.decapsulateBits()")}}.

Use `encapsulateKey()` when the shared secret is used directly as a key for one algorithm: it keeps the secret out of reach of your code, and lets you make it non-extractable. Use `encapsulateBits()` when you need the secret bytes themselves, for example to combine them with other key material before deriving a key.

## Supported algorithms

See the [Supported algorithms section of the `encapsulateKey()` documentation](/en-US/docs/Web/API/SubtleCrypto/encapsulateKey#supported_algorithms).

## Examples

### Creating and recovering a shared secret

In this example, Alice generates an ML-KEM key pair and gives her public key to Bob. Bob uses it to create a shared secret and a ciphertext, and sends the ciphertext to Alice. Alice recovers the shared secret from the ciphertext with her private key. The example logs the first bytes of both secrets, to show that they're the same.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 120px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
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
async function shareSecret() {
  // Alice generates a key pair and shares the public key with Bob
  const aliceKeyPair = await crypto.subtle.generateKey(
    { name: "ML-KEM-768" },
    false,
    ["encapsulateBits", "decapsulateBits"],
  );

  // Bob creates a shared secret and a ciphertext from Alice's public key
  const { sharedKey: bobSecret, ciphertext } =
    await crypto.subtle.encapsulateBits(
      { name: "ML-KEM-768" },
      aliceKeyPair.publicKey,
    );

  // Bob sends the ciphertext to Alice, who recovers the shared secret
  const aliceSecret = await crypto.subtle.decapsulateBits(
    { name: "ML-KEM-768" },
    aliceKeyPair.privateKey,
    ciphertext,
  );

  log(`Bob's secret: ${new Uint8Array(bobSecret, 0, 8)}…`);
  log(`Alice's secret: ${new Uint8Array(aliceSecret, 0, 8)}…`);
  log(`Secret length: ${bobSecret.byteLength} bytes`);
}

shareSecret().catch((error) => log(error));
```

#### Result

{{EmbedLiveSample("Creating and recovering a shared secret", "100%", "160px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.decapsulateBits()")}}
- {{domxref("SubtleCrypto.encapsulateKey()")}}
- [FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard](https://csrc.nist.gov/pubs/fips/203/final)
