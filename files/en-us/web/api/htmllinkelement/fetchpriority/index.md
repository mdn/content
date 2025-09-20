---
title: "HTMLLinkElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLLinkElement")}} interface represents a hint to the browser indicating how it should prioritize fetching a particular resource relative to other resources of the same type.
It reflects the `<link>` element's [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Elements/link#fetchpriority) content attribute.

## Value

A string. For the permitted values, see the HTML [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) attribute.

## Examples

```js
const preloadLink = document.createElement("link");
preloadLink.href = "my-image.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} header
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) for information about how this API affects priorities on Chrome.
