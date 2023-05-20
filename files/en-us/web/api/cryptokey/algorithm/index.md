---
title: "CryptoKey: algorithm property"
short-title: algorithm
slug: Web/API/CryptoKey/algorithm
page-type: web-api-instance-property
browser-compat: api.CryptoKey.algorithm
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

The read-only **`algorithm`** property of the {{DOMxRef("CryptoKey")}} interface returns an object describing the algorithm for which this key can be used, and any associated extra parameters.

The object returned depends of the algorithm used to generate the key.

## Value

An object matching:

- [`AesKeyGenParams`](/en-US/docs/Web/API/AesKeyGenParams) if the algorithm is any of the AES variants.
- [`RsaHashedKeyGenParams`](/en-US/docs/Web/API/RsaHashedKeyGenParams) if the algorithm is any of the RSA variants.
- [`EcKeyGenParams`](/en-US/docs/Web/API/EcKeyGenParams) if the algorithm is any of the EC variants.
- [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) if the algorithm is HMAC.

## Examples

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

// Import an AES secret key from an ArrayBuffer containing the raw bytes.
// Takes an ArrayBuffer string containing the bytes, and returns a Promise
// that will resolve to a CryptoKey representing the secret key.
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}

const key = importSecretKey(rawKey);
console.log(`This key is to be used with the ${key.algorithm} algorithm.`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
