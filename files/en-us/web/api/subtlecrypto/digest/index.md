---
title: "SubtleCrypto: digest() method"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.digest
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

The **`digest()`** method of the {{domxref("SubtleCrypto")}}
interface generates a {{Glossary("digest")}} of the given data. A digest is a short
fixed-length value derived from some variable-length input. Cryptographic digests should
exhibit collision-resistance, meaning that it's hard to come up with two different
inputs that have the same digest value.

It takes as its arguments an identifier for the digest algorithm to use and the data to
digest. It returns a {{jsxref("Promise")}} which will be fulfilled with the digest.

Note that this API does not support streaming input: you must read the entire input into memory before passing it into the digest function.

## Syntax

```js-nolint
digest(algorithm, data)
```

### Parameters

- `algorithm`
  - : This may be a string or an object with a single property `name` that is a string. The string names the hash function to use. Supported values are:
    - `"SHA-1"` (but don't use this in cryptographic applications)
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`.
- `data`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object containing the data to be digested.

### Return value

A {{jsxref("Promise")}} that fulfills with an {{jsxref("ArrayBuffer")}} containing the digest.

## Supported algorithms

Digest algorithms, also known as [cryptographic hash functions](/en-US/docs/Glossary/Cryptographic_hash_function),
transform an arbitrarily large block of data into a fixed-size output,
usually much shorter than the input. They have a variety of applications in
cryptography.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Algorithm</th>
      <th scope="col">Output length (bits)</th>
      <th scope="col">Block size (bits)</th>
      <th scope="col">Specification</th>
    </tr>
    <tr>
      <th scope="row">SHA-1</th>
      <td>160</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.1
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-256</th>
      <td>256</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.2
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-384</th>
      <td>384</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.5
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-512</th>
      <td>512</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, section 6.4
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> SHA-1 is now considered vulnerable and should not
> be used for cryptographic applications.

> [!NOTE]
> If you are looking here for how to create a keyed-hash message authentication
> code ([HMAC](/en-US/docs/Glossary/HMAC)), you need to use the [SubtleCrypto.sign()](/en-US/docs/Web/API/SubtleCrypto/sign#hmac) instead.

## Examples

For more examples of using the `digest()` API, see [Non-cryptographic uses of SubtleCrypto](/en-US/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

### Basic example

This example encodes a message, then calculates its SHA-256 digest and logs the digest
length:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await window.crypto.subtle.digest("SHA-256", data);
  return hash;
}

digestMessage(text).then((digestBuffer) =>
  console.log(digestBuffer.byteLength),
);
```

### Converting a digest to a hex string

The digest is returned as an `ArrayBuffer`, but for comparison and display
digests are often represented as hex strings. This example calculates a digest, then
converts the `ArrayBuffer` to a hex string:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Non-cryptographic uses of SubtleCrypto](/en-US/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium secure origins specification](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) specifies the SHA family of digest algorithms.
