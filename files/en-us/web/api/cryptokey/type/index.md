---
title: "CryptoKey: type property"
short-title: type
slug: Web/API/CryptoKey/type
page-type: web-api-instance-property
browser-compat: api.CryptoKey.type
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The read-only **`type`** property of the {{DOMxRef("CryptoKey")}} interface indicates which kind of key is represented by the object. It can have the following values:

- `"secret"`: This key is a secret key for use with a {{Glossary("Symmetric-key cryptography", "symmetric algorithm")}}.
- `"private"`: This key is the private half of an {{Glossary("Public-key cryptography", "asymmetric algorithm's")}} [`CryptoKeyPair`](/en-US/docs/Web/API/CryptoKeyPair).
- `"public"`: This key is the public half of an {{Glossary("Public-key cryptography", "asymmetric algorithm's")}} [`CryptoKeyPair`](/en-US/docs/Web/API/CryptoKeyPair).

## Value

One of the following strings: `"secret"`, `"private"`, or `"public"`.

## Examples

This function verifies a message using {{domxref("SubtleCrypto.verify()")}} and a public key given in the parameter. If the key is not a public key, it always returns `"invalid"`, as such verification is fundamentally insecure.

```js
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let result = false; // By default, it is invalid

  if (publicKey.type === "public") {
    const encoded = getMessageEncoding();
    result = await window.crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      publicKey,
      signature,
      encoded,
    );
  }

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
