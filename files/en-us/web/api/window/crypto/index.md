---
title: Window.crypto
slug: Web/API/Window/crypto
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
  - Window
browser-compat: api.Window.crypto
---
{{APIRef}}

The read-only **`Window.crypto`**
property returns the {{domxref("Crypto")}} object associated to the global object.
This object allows web pages access to certain cryptographic related services.

Although the property itself is read-only, all of its methods (and the methods of its
child object, {{domxref("SubtleCrypto")}}) are not read-only, and therefore vulnerable
to attack by {{glossary("polyfill")}}.

Although `window.crypto` is available on all windows, the
returned `Crypto` object only has one usable feature in insecure contexts:
the {{domxref("Crypto.getRandomValues", "getRandomValues()")}} method. In general, you
should use this API only in secure contexts.

## Syntax

```js
let cryptoObj = window.crypto || window.msCrypto; // for IE 11
```

### Value

An instance of the {{domxref("Crypto")}} interface, providing access to general-purpose
cryptography and a strong random-number generator.

## Example

This
example uses the {{domxref("Window.crypto")}} property to access the
{{domxref("Crypto.getRandomValues", "getRandomValues()")}} method.

### JavaScript

```js
genRandomNumbers = function getRandomNumbers() {
  const array = new Uint32Array(10);
  window.crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = "The random numbers are: "
  for (let i = 0; i < array.length; i++) {
    randText.textContent += array[i] + " ";
  }
}
```

### HTML

```html
<p id="myRandText">The random numbers are: </p>
<button type="button" onClick='genRandomNumbers()'>Generate 10 random numbers</button>
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Window")}} global object
- The {{domxref("Crypto")}} interface
