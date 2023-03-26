---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
page-type: html-attribute-value
browser-compat: html.elements.link.rel.preconnect
---

{{HTMLSidebar}}

The **`preconnect`** keyword for the [`rel`](/en-US/docs/Web/HTML/Element/link#rel) attribute of the {{HTMLElement("link")}} element is a hint to browsers that the user is likely to need resources from the target resource's origin, and therefore the browser can likely improve the user experience by preemptively initiating a connection to that origin. Preconnecting speeds up future loads from a given origin by preemptively performing part or all of the handshake (DNS+TCP for HTTP, and DNS+TCP+TLS for HTTPS origins).

```html
<link rel="preconnect" href="https://example.com" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
