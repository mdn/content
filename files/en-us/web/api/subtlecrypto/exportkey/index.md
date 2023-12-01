---
title: "SubtleCrypto: exportKey() method"
short-title: exportKey()
slug: Web/API/SubtleCrypto/exportKey
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.exportKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`exportKey()`** method of the {{domxref("SubtleCrypto")}}
interface exports a key: that is, it takes as input a {{domxref("CryptoKey")}} object
and gives you the key in an external, portable format.

To export a key, the key must have {{domxref("CryptoKey.extractable")}} set to
`true`.

Keys can be exported in several formats: see [Supported formats](/en-US/docs/Web/API/SubtleCrypto/importKey#supported_formats) in the
[`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey)
page for details.

Keys are not exported in an encrypted format: to encrypt keys when exporting them use
the
[`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey)
API instead.

## Syntax

```js-nolint
exportKey(format, key)
```

### Parameters

- `format`
  - : A string value describing the data format in which the key should be exported. It can be one of the following:
    - `raw`: [Raw](/en-US/docs/Web/API/SubtleCrypto/importKey#raw) format.
    - `pkcs8`: [PKCS #8](/en-US/docs/Web/API/SubtleCrypto/importKey#pkcs_8) format.
    - `spki`: [SubjectPublicKeyInfo](/en-US/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) format.
    - `jwk`: [JSON Web Key](/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format.
- `key`
  - : The {{domxref("CryptoKey")}} to export.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

- If `format` was `jwk`, then the promise fulfills
  with a JSON object containing the key.
- Otherwise the promise fulfills with an
  [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
  containing the key.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when trying to export a non-extractable key.
- `NotSupported` {{domxref("DOMException")}}
  - : Raised when trying to export in an unknown format.
- {{jsxref("TypeError")}}
  - : Raised when trying to use an invalid format.

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/export-key/index.html) out on GitHub.

### Raw export

This example exports an AES key as an `ArrayBuffer` containing the bytes for
the key. [See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/raw.js).

```js
/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

/*
Generate an encrypt/decrypt secret key,
then set up an event listener on the "Export" button.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((key) => {
    const exportButton = document.querySelector(".raw");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  });
```

### PKCS #8 export

This example exports an RSA private signing key as a PKCS #8 object. The exported key
is then PEM-encoded. [See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/pkcs8.js).

```js
/*
Convert an ArrayBuffer into a string
from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("pkcs8", key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PRIVATE KEY-----\n${exportedAsBase64}\n-----END PRIVATE KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}

/*
Generate a sign/verify key pair,
then set up an event listener on the "Export" button.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => {
    const exportButton = document.querySelector(".pkcs8");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

### SubjectPublicKeyInfo export

This example exports an RSA public encryption key as a PEM-encoded SubjectPublicKeyInfo
object. [See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/spki.js).

```js
/*
Convert an ArrayBuffer into a string
from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("spki", key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PUBLIC KEY-----\n${exportedAsBase64}\n-----END PUBLIC KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}

/*
Generate an encrypt/decrypt key pair,
then set up an event listener on the "Export" button.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((keyPair) => {
    const exportButton = document.querySelector(".spki");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.publicKey);
    });
  });
```

### JSON Web Key export

This example exports an ECDSA private signing key as a JSON Web Key object. [See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/jwk.js).

```js
/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("jwk", key);
  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = JSON.stringify(exported, null, " ");
}

/*
Generate a sign/verify key pair,
then set up an event listener on the "Export" button.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => {
    const exportButton = document.querySelector(".jwk");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8 format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key format](https://datatracker.ietf.org/doc/html/rfc7517).
