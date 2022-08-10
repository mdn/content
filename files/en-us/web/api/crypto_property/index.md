---
title: self.crypto
slug: Web/API/crypto_property
page-type: web-api-global-property
tags:
  - API
  - Crypto
  - Cryptography
  - Encoding
  - Encryption
  - HTML DOM
  - Property
  - Read-only
  - Reference
  - Security
browser-compat: api.crypto
---
{{APIRef}}

The global read-only **`crypto`** property returns the {{domxref("Crypto")}} object associated to the global object. This object allows web pages access to certain cryptographic related services.

Although the property itself is read-only, all of its methods (and the methods of its
child object, {{domxref("SubtleCrypto")}}) are not read-only, and therefore vulnerable
to attack by {{glossary("polyfill")}}.

Although `crypto` is available on all windows, the returned `Crypto` object only has one usable feature in insecure contexts: the {{domxref("Crypto.getRandomValues", "getRandomValues()")}} method. In general, you should use this API only in secure contexts.

## Value

An instance of the {{domxref("Crypto")}} interface, providing access to general-purpose cryptography and a strong random-number generator.

## Examples

This example uses the `crypto` property to access the {{domxref("Crypto.getRandomValues", "getRandomValues()")}} method.

### JavaScript

```js
globalThis.genRandomNumbers = () => {
  const array = new Uint32Array(10);
  crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `The random numbers are: ${array.join(" ")}`;
}
```

### HTML

```html
<p id="myRandText">The random numbers are: </p>
<button type="button" onClick='genRandomNumbers()'>Generate 10 random numbers</button>
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Window")}} global object
- The {{domxref("Crypto")}} interface
