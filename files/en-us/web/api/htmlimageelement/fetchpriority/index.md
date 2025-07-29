---
title: "HTMLImageElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLImageElement")}} interface represents a hint to the browser indicating how it should prioritize fetching a particular image relative to other images. It reflects the `<img>` element's [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Elements/img#fetchpriority) content attribute.

## Value

A string. For the permitted values, see the HTML [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) attribute.

## Examples

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} header
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) for information about how this API affects priorities on Chrome.
