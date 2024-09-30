---
title: "Window: crypto property"
short-title: crypto
slug: Web/API/Window/crypto
page-type: web-api-instance-property
browser-compat: api.crypto
---

{{APIRef("Web Crypto API")}}

The **`crypto`** read-only property of the {{domxref("Window")}} interface returns the {{domxref("Crypto")}} object for this window's scope. This object gives web pages access to certain cryptographic related services.

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
  globalThis.crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `The random numbers are: ${array.join(" ")}`;
};
```

### HTML

```html
<p id="myRandText">The random numbers are:</p>
<button type="button" onClick="genRandomNumbers()">
  Generate 10 random numbers
</button>
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Crypto")}} interface
- {{domxref("WorkerGlobalScope.crypto")}}
