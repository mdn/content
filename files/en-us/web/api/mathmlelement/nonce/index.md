---
title: "MathMLElement: nonce property"
short-title: nonce
slug: Web/API/MathMLElement/nonce
page-type: web-api-instance-property
browser-compat: api.MathMLElement.nonce
---

{{APIRef("MathML")}}

The **`nonce`** property of the {{DOMxRef("MathMLElement")}} interface returns the {{Glossary("Nonce", "nonce")}} that is used by [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP) to determine whether a given fetch will be allowed to proceed.

## Value

A String; the cryptographic nonce, or an empty string if no nonce is set.

## Examples

### Retrieving a nonce value

```js
const math = document.querySelector("math");
console.log(math.nonce);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.nonce")}} a similar property for HTML elements.
- {{domxref("SVGElement.nonce")}} a similar property for SVG elements.
- [`nonce` global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
