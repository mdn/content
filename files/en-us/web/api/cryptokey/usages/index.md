---
title: "CryptoKey: usages property"
short-title: usages
slug: Web/API/CryptoKey/usages
page-type: web-api-instance-property
browser-compat: api.CryptoKey.usages
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

The read-only **`usages`** property of the {{DOMxRef("CryptoKey")}} interface indicates what can be done with the key.

## Value

An {{jsxref("Array")}} of strings from the following list:

- `"encrypt"`: The key may be used to {{domxref("SubtleCrypto.encrypt()", "encrypt")}} messages.
- `"decrypt"`: The key may be used to {{domxref("SubtleCrypto.decrypt()", "decrypt")}} messages.
- `"sign"`: The key may be used to {{domxref("SubtleCrypto.sign()", "sign")}} messages.
- `"verify"`: The key may be used to {{domxref("SubtleCrypto.verify()", "verify")}} signatures.
- `"deriveKey"`: The key may be used in {{domxref("SubtleCrypto.deriveKey()", "deriving a new key")}}.
- `"deriveBits"`: The key may be used in {{domxref("SubtleCrypto.deriveBits()", "deriving bits")}}.
- `"wrapKey"`: The key may be used to {{domxref("SubtleCrypto.wrapKey()", "wrap a key")}}.
- `"unwrapKey"`: The key may be used to {{domxref("SubtleCrypto.unwrapKey()", "unwrap a key")}}.

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
console.log(
  `The following usages are reported for this key: ${key.usages.toString()}`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
