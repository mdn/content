---
title: "MathMLElement: nonce property"
short-title: nonce
slug: Web/API/MathMLElement/nonce
page-type: web-api-instance-property
browser-compat: api.MathMLElement.nonce
---

{{APIRef("SVG")}}

The **`nonce`** property of the {{DOMxRef("MathMLElement")}} interface returns the {{Glossary("Nonce", "nonce")}} that is used by [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP) to determine whether a given fetch will be allowed to proceed.

## Value

A String; the cryptographic nonce, or an empty string if no nonce is set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.nonce")}} a similar method for HTML elements.
- [`nonce` global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
